#=
This file defines the Dimensions structures, which can describe composite Hilbert spaces.
=#

export AbstractDimensions, Dimensions, GeneralDimensions

abstract type AbstractDimensions{N} end

@doc raw"""
    struct Dimensions{N,T<:Tuple} <: AbstractDimensions{N}
        to::T
    end

A structure that describes the Hilbert [`Space`](@ref) of each subsystems.
"""
struct Dimensions{N,T<:Tuple} <: AbstractDimensions{N}
    to::T

    # make sure the elements in the tuple are all AbstractSpace
    Dimensions(to::NTuple{N,T}) where {N,T<:AbstractSpace} = new{N,typeof(to)}(to)
end
function Dimensions(dims::Union{AbstractVector{T},NTuple{N,T}}) where {T<:Integer,N}
    _non_static_array_warning("dims", dims)
    L = length(dims)
    (L > 0) || throw(DomainError(dims, "The argument dims must be of non-zero length"))

    return Dimensions(NTuple{L,Space}(Space.(dims)))
end
Dimensions(dims::Int) = Dimensions(Space(dims))
Dimensions(dims::DimType) where {DimType<:AbstractSpace} = Dimensions((dims,))
Dimensions(dims::Any) = throw(
    ArgumentError(
        "The argument dims must be a Tuple or a StaticVector of non-zero length and contain only positive integers.",
    ),
)

@doc raw"""
    struct GeneralDimensions{N,T1,T2} <: AbstractDimensions{N}
        to::T1
        from::T2
    end

A structure that describes the left-hand side (`to`) and right-hand side (`from`) Hilbert [`Space`](@ref) of an [`Operator`](@ref).
"""
struct GeneralDimensions{N,T1,T2} <: AbstractDimensions{N}
    # note that the number `N` should be the same for both `to` and `from`
    to::T1   # space acting on the left
    from::T2 # space acting on the right

    # make sure the elements in the tuple are all AbstractSpace
    GeneralDimensions(to::NTuple{N,T1}, from::NTuple{N,T2}) where {N,T1<:AbstractSpace,T2<:AbstractSpace} =
        new{N,typeof(to),typeof(from)}(to, from)
end
function GeneralDimensions(dims::Union{AbstractVector{T},NTuple{N,T}}) where {T<:Union{AbstractVector,NTuple},N}
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

    return GeneralDimensions(NTuple{L1,Space}(Space.(dims[1])), NTuple{L1,Space}(Space.(dims[2])))
end

_gen_dimensions(dims::AbstractDimensions) = dims
_gen_dimensions(dims::Union{AbstractVector{T},NTuple{N,T}}) where {T<:Integer,N} = Dimensions(dims)
_gen_dimensions(dims::Union{AbstractVector{T},NTuple{N,T}}) where {T<:Union{AbstractVector,NTuple},N} =
    GeneralDimensions(dims)
_gen_dimensions(dims::Any) = Dimensions(dims)

# obtain dims in the type of SVector with integers
dimensions_to_dims(dimensions::NTuple{N,AbstractSpace}) where {N} = vcat(map(dimensions_to_dims, dimensions)...)
dimensions_to_dims(dimensions::Dimensions) = dimensions_to_dims(dimensions.to)
dimensions_to_dims(dimensions::GeneralDimensions) =
    SVector{2}(dimensions_to_dims(dimensions.to), dimensions_to_dims(dimensions.from))

dimensions_to_dims(::Nothing) = nothing # for EigsolveResult.dimensions = nothing

Base.length(::AbstractDimensions{N}) where {N} = N

# need to specify return type `Int` for `_get_space_size`
# otherwise the type of `prod(::Dimensions)` will be unstable
_get_space_size(s::AbstractSpace)::Int = s.size
Base.prod(dims::Dimensions) = prod(dims.to)
Base.prod(spaces::NTuple{N,AbstractSpace}) where {N} = prod(_get_space_size, spaces)

LinearAlgebra.transpose(dimensions::Dimensions) = dimensions
LinearAlgebra.transpose(dimensions::GeneralDimensions) = GeneralDimensions(dimensions.from, dimensions.to) # switch `to` and `from`
LinearAlgebra.adjoint(dimensions::AbstractDimensions) = transpose(dimensions)

# this is used to show `dims` for Qobj and QobjEvo
_get_dims_string(dimensions::Dimensions) = string(dimensions_to_dims(dimensions))
function _get_dims_string(dimensions::GeneralDimensions)
    dims = dimensions_to_dims(dimensions)
    return "[$(string(dims[1])), $(string(dims[2]))]"
end
_get_dims_string(::Nothing) = "nothing" # for EigsolveResult.dimensions = nothing
