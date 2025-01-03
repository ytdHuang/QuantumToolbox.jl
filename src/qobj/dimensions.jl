export AbstractDimensions, Dimensions, CompoundDimensions

abstract type AbstractDimensions{N} end

struct Dimensions{N} <: AbstractDimensions{N}
    to::SVector{N,AbstractSpace}
end
function Dimensions(dims::Union{AbstractVector{T},NTuple{N,T}}) where {T<:Integer,N}
    _non_static_array_warning("dims", dims)
    L = length(dims)
    (L > 0) || throw(DomainError(dims, "The argument dims must be of non-zero length"))

    return Dimensions{L}(SVector{L,AbstractSpace}(Space.(dims)))
end
Dimensions(dims::Int) = Dimensions(Space(dims))
Dimensions(dims::DimType) where {DimType<:Union{Field,Space}} = Dimensions(SVector{1,AbstractSpace}(dims))
Dimensions(dims::Any) = throw(
    ArgumentError(
        "The argument dims must be a Tuple or a StaticVector of non-zero length and contain only positive integers.",
    ),
)

struct CompoundDimensions{N} <: AbstractDimensions{N}
    # note that the number `N` should be the same for both `to` and `from`
    to::SVector{N,AbstractSpace}   # space acting on the left
    from::SVector{N,AbstractSpace} # space acting on the right
end
function CompoundDimensions(dims::Union{AbstractVector{T},NTuple{N,T}}) where {T<:Union{AbstractVector,NTuple},N}
    (length(dims) != 2) && throw(ArgumentError("Invalid dims = $dims"))

    _non_static_array_warning("dims[1]", dims[1])
    _non_static_array_warning("dims[2]", dims[2])

    L1 = length(dims[1])
    L2 = length(dims[2])
    ((L1 > 0) && (L1 == L2)) || throw(
        DomainError(
            (L1, L2),
            "The length of the arguments `dims[1]` and `dims[2]` must be in the same length and have at least one element.",
        ),
    )

    return CompoundDimensions{L1}(
        SVector{L1,AbstractSpace}(Space.(dims[1])),
        SVector{L1,AbstractSpace}(Space.(dims[2])),
    )
end

#Base.show(io::IO, D::CompoundDimensions) = print(io, "[", D.to, ", ", D.from, "]")

_gen_dims(dims::AbstractDimensions) = dims
_gen_dims(dims::Union{AbstractVector{T},NTuple{N,T}}) where {T<:Integer,N} = Dimensions(dims)
_gen_dims(dims::Union{AbstractVector{T},NTuple{N,T}}) where {T<:Union{AbstractVector,NTuple},N} =
    CompoundDimensions(dims)
_gen_dims(dims::Any) = Dimensions(dims)

# obtain dims in the type of SVector with integers
dims_to_list(dimsvec::SVector{N,AbstractSpace}) where {N} = vcat(map(dims_to_list, dimsvec)...)
dims_to_list(dims::Dimensions) = dims_to_list(dims.to)
dims_to_list(dims::CompoundDimensions) = SVector{2}(dims_to_list(dims.to), dims_to_list(dims.from))

# for printing `dims_to_list(CompoundDimensions)` 
function Base.show(io::IO, svec::SVector{2,SVector{N,T}}) where {N,T<:Int}
    print(io, "[")
    join(io, svec, ", ")
    print(io, "]")
end

Base.length(::AbstractDimensions{N}) where {N} = N

# need to specify return type `Int` for `_get_space_size`
# otherwise the type of `prod(::Dimensions)` will be unstable
_get_space_size(s::AbstractSpace)::Int = s.size
Base.prod(dims::Dimensions) = prod(dims.to)
Base.prod(spaces::SVector{N,AbstractSpace}) where {N} = prod(_get_space_size, spaces)

LinearAlgebra.transpose(dims::Dimensions) = dims
LinearAlgebra.transpose(dims::CompoundDimensions) = CompoundDimensions(dims.from, dims.to) # switch `to` and `from`