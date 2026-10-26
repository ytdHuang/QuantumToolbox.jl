export correlation_3op_2t, correlation_3op_1t, correlation_2op_2t, correlation_2op_1t

function _check_correlation_time_list(tlist::AbstractVector)
    any(t -> t == 0, tlist) ||
        throw(ArgumentError("The time list for calculating correlation function must contain the element `0`"))
    all(>=(0), tlist) ||
        throw(ArgumentError("All the elements in the time list for calculating correlation function must be positive."))
    return nothing
end

@doc raw"""
    correlation_3op_2t(
        H::AbstractQuantumObject,
        ψ0::Union{Nothing,QuantumObject},
        tlist::AbstractVector,
        τlist::AbstractVector,
        c_ops::Union{Nothing,AbstractVector,Tuple},
        A::QuantumObject,
        B::QuantumObject,
        C::QuantumObject;
        ensemblealg::EnsembleAlgorithm = EnsembleThreads(),
        matrix_form::Union{Val,Bool} = Val(false),
        kwargs...
    )

Returns the two-time correlation function of three operators ``\hat{A}``, ``\hat{B}`` and ``\hat{C}``: ``\left\langle \hat{A}(t) \hat{B}(t + \tau) \hat{C}(t) \right\rangle`` for a given initial state ``|\psi_0\rangle``.

# Notes

This function is implemented based on [`mesolve_map`](@ref) by the following adjustments:

- If the initial state `ψ0` is given as `nothing`, then the [`steadystate`](@ref) will be used as the initial state. Note that this is only implemented if `H` is constant ([`QuantumObject`](@ref)) and doesn't support matrix form.
- The ``\tau``-evolution starting from every `t` in `tlist` is solved together as a single [`mesolve_map`](@ref), and `ensemblealg` (default to `EnsembleThreads()`) controls how that ensemble is parallelized.
- If `matrix_form = Val(true)`, the solving process is done with matrix form instead of vectorizing the density matrices, which is most useful for large Hilbert spaces, sparse operators, GPU calculations, and poorly sparse Liouvillians. See the `matrix_form` keyword argument of [`mesolve`](@ref) for more details.
"""
function correlation_3op_2t(
        H::AbstractQuantumObject{HOpType},
        ψ0::Union{Nothing, QuantumObject{StateOpType}},
        tlist::AbstractVector,
        τlist::AbstractVector,
        c_ops::Union{Nothing, AbstractVector, Tuple},
        A::QuantumObject{Operator},
        B::QuantumObject{Operator},
        C::QuantumObject{Operator};
        ensemblealg::EnsembleAlgorithm = EnsembleThreads(),
        matrix_form::Union{Val, Bool} = Val(false),
        kwargs...,
    ) where {HOpType <: Union{Operator, SuperOperator}, StateOpType <: Union{Ket, Operator}}
    # check tlist and τlist
    _check_correlation_time_list(tlist)
    _check_correlation_time_list(τlist)

    matrix_form_val = makeVal(matrix_form)
    is_matrix_form = getVal(matrix_form_val)

    L = liouvillian(H, c_ops; matrix_form = matrix_form_val)
    if ψ0 isa Nothing
        # steadystate doesn't support time-dependent systems or matrix form, so it always needs the constant and vectorized Liouvillian
        isconstant(L) ||
            throw(ArgumentError("The state must be specified if the Hamiltonian/Liouvillian is time-dependent."))
        is_matrix_form &&
            throw(ArgumentError("The state must be specified for the support of matrix form."))
        ψ0 = steadystate(L)
    end

    # check the dimensions of Operator A, B, C, and ψ0
    # the dimension validity of L and ψ0 will be checked in mesolve
    check_mul_dimensions(A, ψ0)
    check_dimensions(A, B, C)

    kwargs2 = merge((saveat = collect(tlist),), (; kwargs...))
    
    # generate OperatorKet for non-matrix form, so sol.states will store OperatorKet (skip redundant reshaping)
    ρ0 = is_matrix_form ? ket2dm(ψ0) : mat2vec(ket2dm(ψ0))

    # note that doesn't need to do the first mesolve if tlist == [0] (for 2op_1t and 3op_1t cases)
    ρt_list = (tlist == [0]) ? [ρ0] : mesolve(L, ρ0, tlist; matrix_form = matrix_form_val, kwargs2...).states

    C_A = cache_operator(sprepost(C, A; matrix_form = matrix_form_val), ρt_list[1])
    CρA_list = map(ρt -> C_A * ρt, ρt_list)

    sols = mesolve_map(L, CρA_list, τlist; e_ops = [B], ensemblealg = ensemblealg, matrix_form = matrix_form_val, kwargs...)
    corr = map(sol -> sol.expect[1, :], sols)

    # make the output correlation Matrix align with QuTiP
    # 1st dimension corresponds to tlist
    # 2nd dimension corresponds to τlist
    return reduce(vcat, transpose.(corr))
end

@doc raw"""
    correlation_3op_1t(
        H::AbstractQuantumObject,
        ψ0::Union{Nothing,QuantumObject},
        τlist::AbstractVector,
        c_ops::Union{Nothing,AbstractVector,Tuple},
        A::QuantumObject,
        B::QuantumObject,
        C::QuantumObject;
        matrix_form::Union{Val,Bool} = Val(false),
        kwargs...
    )

Returns the two-time correlation function (with only one time coordinate ``\tau``) of three operators ``\hat{A}``, ``\hat{B}`` and ``\hat{C}``: ``\left\langle \hat{A}(0) \hat{B}(\tau) \hat{C}(0) \right\rangle`` for a given initial state ``|\psi_0\rangle``.

# Notes

- If the initial state `ψ0` is given as `nothing`, then the [`steadystate`](@ref) will be used as the initial state. Note that this is only implemented if `H` is constant ([`QuantumObject`](@ref)).
- See [`correlation_3op_2t`](@ref) for the `matrix_form` keyword argument.
"""
function correlation_3op_1t(
        H::AbstractQuantumObject{HOpType},
        ψ0::Union{Nothing, QuantumObject{StateOpType}},
        τlist::AbstractVector,
        c_ops::Union{Nothing, AbstractVector, Tuple},
        A::QuantumObject{Operator},
        B::QuantumObject{Operator},
        C::QuantumObject{Operator};
        matrix_form::Union{Val,Bool} = Val(false),
        kwargs...,
    ) where {HOpType <: Union{Operator, SuperOperator}, StateOpType <: Union{Ket, Operator}}
    # there is only a single t = 0, so the underlying mesolve_map ensemble has just one trajectory
    corr = correlation_3op_2t(H, ψ0, [0], τlist, c_ops, A, B, C; ensemblealg = EnsembleSerial(), matrix_form = makeVal(matrix_form), kwargs...)

    return corr[1, :] # 1 means tlist[1] = 0
end

@doc raw"""
    correlation_2op_2t(
        H::AbstractQuantumObject,
        ψ0::Union{Nothing,QuantumObject},
        tlist::AbstractVector,
        τlist::AbstractVector,
        c_ops::Union{Nothing,AbstractVector,Tuple},
        A::QuantumObject,
        B::QuantumObject;
        reverse::Bool=false,
        ensemblealg::EnsembleAlgorithm = EnsembleThreads(),
        matrix_form::Union{Val,Bool} = Val(false),
        kwargs...
    )

Returns the two-time correlation function of two operators ``\hat{A}`` and ``\hat{B}`` : ``\left\langle \hat{A}(t + \tau) \hat{B}(t) \right\rangle`` for a given initial state ``|\psi_0\rangle``.

# Notes

- If the initial state `ψ0` is given as `nothing`, then the [`steadystate`](@ref) will be used as the initial state. Note that this is only implemented if `H` is constant ([`QuantumObject`](@ref)).
- When `reverse=true`, the correlation function is calculated as ``\left\langle \hat{A}(t) \hat{B}(t + \tau) \right\rangle``.
- See [`correlation_3op_2t`](@ref) for the `ensemblealg` and `matrix_form` keyword arguments.
"""
function correlation_2op_2t(
        H::AbstractQuantumObject{HOpType},
        ψ0::Union{Nothing, QuantumObject{StateOpType}},
        tlist::AbstractVector,
        τlist::AbstractVector,
        c_ops::Union{Nothing, AbstractVector, Tuple},
        A::QuantumObject{Operator},
        B::QuantumObject{Operator};
        reverse::Bool = false,
        ensemblealg::EnsembleAlgorithm = EnsembleThreads(),
        matrix_form::Union{Val, Bool} = Val(false),
        kwargs...,
    ) where {HOpType <: Union{Operator, SuperOperator}, StateOpType <: Union{Ket, Operator}}
    matrix_form_val = makeVal(matrix_form)
    C = eye(get_size(A.dimensions)[1], type = Operator(), dims = A.dims) # same as qeye_like(A), use A instead of H (cause H might be SuperOperator)
    if reverse
        corr = correlation_3op_2t(H, ψ0, tlist, τlist, c_ops, A, B, C; ensemblealg = ensemblealg, matrix_form = matrix_form_val, kwargs...)
    else
        corr = correlation_3op_2t(H, ψ0, tlist, τlist, c_ops, C, A, B; ensemblealg = ensemblealg, matrix_form = matrix_form_val, kwargs...)
    end

    return corr
end

@doc raw"""
    correlation_2op_1t(
        H::AbstractQuantumObject,
        ψ0::Union{Nothing,QuantumObject},
        τlist::AbstractVector,
        c_ops::Union{Nothing,AbstractVector,Tuple},
        A::QuantumObject,
        B::QuantumObject;
        reverse::Bool=false,
        matrix_form::Union{Val,Bool} = Val(false),
        kwargs...
    )

Returns the two-time correlation function (with only one time coordinate ``\tau``) of two operators ``\hat{A}`` and ``\hat{B}`` : ``\left\langle \hat{A}(\tau) \hat{B}(0) \right\rangle`` for a given initial state ``|\psi_0\rangle``.

# Notes

- If the initial state `ψ0` is given as `nothing`, then the [`steadystate`](@ref) will be used as the initial state. Note that this is only implemented if `H` is constant ([`QuantumObject`](@ref)).
- When `reverse=true`, the correlation function is calculated as ``\left\langle \hat{A}(0) \hat{B}(\tau) \right\rangle``.
- See [`correlation_3op_2t`](@ref) for the `matrix_form` keyword argument.
"""
function correlation_2op_1t(
        H::AbstractQuantumObject{HOpType},
        ψ0::Union{Nothing, QuantumObject{StateOpType}},
        τlist::AbstractVector,
        c_ops::Union{Nothing, AbstractVector, Tuple},
        A::QuantumObject{Operator},
        B::QuantumObject{Operator};
        reverse::Bool = false,
        matrix_form::Union{Val, Bool} = Val(false),
        kwargs...,
    ) where {HOpType <: Union{Operator, SuperOperator}, StateOpType <: Union{Ket, Operator}}
    # there is only a single t = 0, so the underlying mesolve_map ensemble has just one trajectory
    corr = correlation_2op_2t(H, ψ0, [0], τlist, c_ops, A, B; reverse = reverse, ensemblealg = EnsembleSerial(), matrix_form = makeVal(matrix_form), kwargs...)

    return corr[1, :] # 1 means tlist[1] = 0
end
