#=
This file gathers all the deprecated names (structures, functions, or variables) which will be removed in the future major release.

- Before the major release, the deprecated names will just throw errors when they are called.
- If the deprecated names were once exported, we will still export them here until next major release.
- If we decide to push a major release, cleanup this file.

Example:

export deprecated_foo

function deprecated_foo(args...; kwargs...)
    error("`deprecated_foo` has been deprecated and will be removed in next major release, please use `new_foo` instead.")
end
=#

export FFTCorrelation
export sparse_to_dense, dense_to_sparse

FFTCorrelation() = error(
    "`FFTCorrelation` has been deprecated and will be removed in next major release, please use `spectrum_correlation_fft` to calculate the spectrum with FFT method instead.",
)

sparse_to_dense(args...) = error(
    "`sparse_to_dense` has been deprecated and will be removed in next major release, please use `to_dense` instead.",
)
dense_to_sparse(args...) = error(
    "`dense_to_sparse` has been deprecated and will be removed in next major release, please use `to_sparse` instead.",
)

correlation_3op_2t(
    H::QuantumObject{HOpType},
    ψ0::QuantumObject{StateOpType},
    t_l::AbstractVector,
    τ_l::AbstractVector,
    A::QuantumObject{Operator},
    B::QuantumObject{Operator},
    C::QuantumObject{Operator},
    c_ops::Union{Nothing,AbstractVector,Tuple} = nothing;
    kwargs...,
) where {HOpType<:Union{Operator,SuperOperator},StateOpType<:Union{Ket,Operator}} = error(
    "The parameter order of `correlation_3op_2t` has been changed, please use `?correlation_3op_2t` to check the updated docstring.",
)

correlation_3op_1t(
    H::QuantumObject{HOpType},
    ψ0::QuantumObject{StateOpType},
    τ_l::AbstractVector,
    A::QuantumObject{Operator},
    B::QuantumObject{Operator},
    C::QuantumObject{Operator},
    c_ops::Union{Nothing,AbstractVector,Tuple} = nothing;
    kwargs...,
) where {HOpType<:Union{Operator,SuperOperator},StateOpType<:Union{Ket,Operator}} = error(
    "The parameter order of `correlation_3op_1t` has been changed, please use `?correlation_3op_1t` to check the updated docstring.",
)

correlation_2op_2t(
    H::QuantumObject{HOpType},
    ψ0::QuantumObject{StateOpType},
    t_l::AbstractVector,
    τ_l::AbstractVector,
    A::QuantumObject{Operator},
    B::QuantumObject{Operator},
    c_ops::Union{Nothing,AbstractVector,Tuple} = nothing;
    reverse::Bool = false,
    kwargs...,
) where {HOpType<:Union{Operator,SuperOperator},StateOpType<:Union{Ket,Operator}} = error(
    "The parameter order of `correlation_2op_2t` has been changed, please use `?correlation_2op_2t` to check the updated docstring.",
)

correlation_2op_1t(
    H::QuantumObject{HOpType},
    ψ0::QuantumObject{StateOpType},
    τ_l::AbstractVector,
    A::QuantumObject{Operator},
    B::QuantumObject{Operator},
    c_ops::Union{Nothing,AbstractVector,Tuple} = nothing;
    reverse::Bool = false,
    kwargs...,
) where {HOpType<:Union{Operator,SuperOperator},StateOpType<:Union{Ket,Operator}} = error(
    "The parameter order of `correlation_2op_1t` has been changed, please use `?correlation_2op_1t` to check the updated docstring.",
)

MultiSiteOperator(dims::Union{AbstractVector,Tuple}, pairs::Pair{<:Integer,<:QuantumObject}...) = error(
    "`MultiSiteOperator` has been deprecated and will be removed in next major release, please use `multisite_operator` instead.",
)
