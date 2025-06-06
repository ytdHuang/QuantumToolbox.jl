module QuantumToolboxMakieExt

using QuantumToolbox
import QuantumToolbox: _state_to_bloch

import LinearAlgebra: cross, deg2rad, normalize, size
import Makie:
    Axis,
    Axis3,
    Colorbar,
    Figure,
    GridLayout,
    heatmap!,
    surface!,
    barplot!,
    GridPosition,
    @L_str,
    Reverse,
    ylims!,
    RGBAf,
    Sphere,
    lines!,
    scatter!,
    arrows!,
    text!,
    Point3f,
    mesh!,
    RGBf,
    Vec3f,
    Point3f,
    NoShading

@doc raw"""
    plot_wigner(
        library::Val{:Makie},
        state::QuantumObject{OpType};
        xvec::Union{Nothing,AbstractVector} = nothing,
        yvec::Union{Nothing,AbstractVector} = nothing,
        g::Real = √2,
        method::WignerSolver = WignerClenshaw(),
        projection::Union{Val,Symbol} = Val(:two_dim),
        location::Union{GridPosition,Nothing} = nothing,
        colorbar::Bool = false,
        kwargs...
    ) where {OpType}

Plot the [Wigner quasipropability distribution](https://en.wikipedia.org/wiki/Wigner_quasiprobability_distribution) of `state` using the [`Makie`](https://github.com/MakieOrg/Makie.jl) plotting library.

# Arguments
- `library::Val{:Makie}`: The plotting library to use.
- `state::QuantumObject`: The quantum state for which the Wigner function is calculated. It can be either a [`Ket`](@ref), [`Bra`](@ref), or [`Operator`](@ref).
- `xvec::AbstractVector`: The x-coordinates of the phase space grid. Defaults to a linear range from -7.5 to 7.5 with 200 points.
- `yvec::AbstractVector`: The y-coordinates of the phase space grid. Defaults to a linear range from -7.5 to 7.5 with 200 points.
- `g::Real`: The scaling factor related to the value of ``\hbar`` in the commutation relation ``[x, y] = i \hbar`` via ``\hbar=2/g^2``.
- `method::WignerSolver`: The method used to calculate the Wigner function. It can be either `WignerLaguerre()` or `WignerClenshaw()`, with `WignerClenshaw()` as default. The `WignerLaguerre` method has the optional `parallel` and `tol` parameters, with default values `true` and `1e-14`, respectively.
- `projection::Union{Val,Symbol}`: Whether to plot the Wigner function in 2D or 3D. It can be either `Val(:two_dim)` or `Val(:three_dim)`, with `Val(:two_dim)` as default.
- `location::Union{GridPosition,Nothing}`: The location of the plot in the layout. If `nothing`, the plot is created in a new figure. Default is `nothing`.
- `colorbar::Bool`: Whether to include a colorbar in the plot. Default is `false`.
- `kwargs...`: Additional keyword arguments to pass to the plotting function. 

# Returns
- `fig`: The figure object.
- `ax`: The axis object.
- `hm`: Either the heatmap or surface object, depending on the projection.

!!! note "Import library first"
    [`Makie.jl`](https://github.com/MakieOrg/Makie.jl) must first be imported before using this function. This can be done by importing one of the available backends, such as [`CairoMakie.jl`](https://github.com/MakieOrg/Makie.jl/tree/master/CairoMakie), [`GLMakie.jl`](https://github.com/MakieOrg/Makie.jl/tree/master/GLMakie), or [`WGLMakie.jl`](https://github.com/MakieOrg/Makie.jl/tree/master/WGLMakie).

!!! warning "Beware of type-stability!"
    If you want to keep type stability, it is recommended to use `Val(:two_dim)` and `Val(:three_dim)` instead of `:two_dim` and `:three_dim`, respectively. Also, specify the library as `Val(:Makie)` See [this link](https://docs.julialang.org/en/v1/manual/performance-tips/#man-performance-value-type) and the [related Section](@ref doc:Type-Stability) about type stability for more details.
"""
function QuantumToolbox.plot_wigner(
    library::Val{:Makie},
    state::QuantumObject{OpType};
    xvec::Union{Nothing,AbstractVector} = LinRange(-7.5, 7.5, 200),
    yvec::Union{Nothing,AbstractVector} = LinRange(-7.5, 7.5, 200),
    g::Real = √2,
    method::WignerSolver = WignerClenshaw(),
    projection::Union{Val,Symbol} = Val(:two_dim),
    location::Union{GridPosition,Nothing} = nothing,
    colorbar::Bool = false,
    kwargs...,
) where {OpType<:Union{Bra,Ket,Operator}}
    QuantumToolbox.getVal(projection) == :two_dim ||
        QuantumToolbox.getVal(projection) == :three_dim ||
        throw(ArgumentError("Unsupported projection: $projection"))

    return _plot_wigner(
        library,
        state,
        xvec,
        yvec,
        QuantumToolbox.makeVal(projection),
        g,
        method,
        location,
        colorbar;
        kwargs...,
    )
end

function _plot_wigner(
    ::Val{:Makie},
    state::QuantumObject{OpType},
    xvec::AbstractVector,
    yvec::AbstractVector,
    projection::Val{:two_dim},
    g::Real,
    method::WignerSolver,
    location::Union{GridPosition,Nothing},
    colorbar::Bool;
    kwargs...,
) where {OpType<:Union{Bra,Ket,Operator}}
    fig, location = _getFigAndLocation(location)

    lyt = GridLayout(location)

    ax = Axis(lyt[1, 1])

    wig = wigner(state, xvec, yvec; g = g, method = method)
    wlim = maximum(abs, wig)

    kwargs = merge(Dict(:colormap => Reverse(:RdBu), :colorrange => (-wlim, wlim)), kwargs)
    hm = heatmap!(ax, xvec, yvec, transpose(wig); kwargs...)

    if colorbar
        Colorbar(lyt[1, 2], hm)
    end

    ax.xlabel = L"\textrm{Re}(\alpha)"
    ax.ylabel = L"\textrm{Im}(\alpha)"
    return fig, ax, hm
end

function _plot_wigner(
    ::Val{:Makie},
    state::QuantumObject{OpType},
    xvec::AbstractVector,
    yvec::AbstractVector,
    projection::Val{:three_dim},
    g::Real,
    method::WignerSolver,
    location::Union{GridPosition,Nothing},
    colorbar::Bool;
    kwargs...,
) where {OpType<:Union{Bra,Ket,Operator}}
    fig, location = _getFigAndLocation(location)

    lyt = GridLayout(location)

    ax = Axis3(lyt[1, 1], azimuth = 1.775pi, elevation = pi / 16, protrusions = (30, 90, 30, 30), viewmode = :stretch)

    wig = wigner(state, xvec, yvec; g = g, method = method)
    wlim = maximum(abs, wig)

    kwargs = merge(Dict(:colormap => :RdBu, :colorrange => (-wlim, wlim)), kwargs)
    surf = surface!(ax, xvec, yvec, transpose(wig); kwargs...)

    if colorbar
        Colorbar(lyt[1, 2], surf)
    end

    ax.xlabel = L"\textrm{Re}(\alpha)"
    ax.ylabel = L"\textrm{Im}(\alpha)"
    ax.zlabel = "Wigner function"
    return fig, ax, surf
end

@doc raw"""
    plot_fock_distribution(
        library::Val{:Makie},
        ρ::QuantumObject{SType};
        fock_numbers::Union{Nothing, AbstractVector} = nothing,
        unit_y_range::Bool = true,
        location::Union{GridPosition,Nothing} = nothing,
        kwargs...
    ) where {SType<:Union{Ket,Operator}}

Plot the [Fock state](https://en.wikipedia.org/wiki/Fock_state) distribution of `ρ`. 

# Arguments
- `library::Val{:Makie}`: The plotting library to use.
- `ρ::QuantumObject`: The quantum state for which the Fock state distribution is to be plotted. It can be either a [`Ket`](@ref), [`Bra`](@ref), or [`Operator`](@ref).
- `location::Union{GridPosition,Nothing}`: The location of the plot in the layout. If `nothing`, the plot is created in a new figure. Default is `nothing`.
- `fock_numbers::Union{Nothing, AbstractVector}`: list of x ticklabels to represent fock numbers, default is `nothing`.
- `unit_y_range::Bool`: Set y-axis limits [0, 1] or not, default is `true`.
- `kwargs...`: Additional keyword arguments to pass to the plotting function. 

# Returns
- `fig`: The figure object.
- `ax`: The axis object.
- `bp`: The barplot object.

!!! note "Import library first"
    [`Makie.jl`](https://github.com/MakieOrg/Makie.jl) must first be imported before using this function. This can be done by importing one of the available backends, such as [`CairoMakie.jl`](https://github.com/MakieOrg/Makie.jl/tree/master/CairoMakie), [`GLMakie.jl`](https://github.com/MakieOrg/Makie.jl/tree/master/GLMakie), or [`WGLMakie.jl`](https://github.com/MakieOrg/Makie.jl/tree/master/WGLMakie).

!!! warning "Beware of type-stability!"
    If you want to keep type stability, it is recommended to use `Val(:two_dim)` and `Val(:three_dim)` instead of `:two_dim` and `:three_dim`, respectively. Also, specify the library as `Val(:Makie)` See [this link](https://docs.julialang.org/en/v1/manual/performance-tips/#man-performance-value-type) and the [related Section](@ref doc:Type-Stability) about type stability for more details.
"""
function QuantumToolbox.plot_fock_distribution(
    library::Val{:Makie},
    ρ::QuantumObject{SType};
    fock_numbers::Union{Nothing,AbstractVector} = nothing,
    unit_y_range::Bool = true,
    location::Union{GridPosition,Nothing} = nothing,
    kwargs...,
) where {SType<:Union{Bra,Ket,Operator}}
    return _plot_fock_distribution(
        library,
        ρ;
        fock_numbers = fock_numbers,
        unit_y_range = unit_y_range,
        location = location,
        kwargs...,
    )
end

function _plot_fock_distribution(
    ::Val{:Makie},
    ρ::QuantumObject{SType};
    fock_numbers::Union{Nothing,AbstractVector} = nothing,
    unit_y_range::Bool = true,
    location::Union{GridPosition,Nothing} = nothing,
    kwargs...,
) where {SType<:Union{Bra,Ket,Operator}}
    ρ = ket2dm(ρ)
    D = prod(ρ.dims)
    isapprox(tr(ρ), 1, atol = 1e-4) || (@warn "The input ρ should be normalized.")

    xvec = 0:(D-1)
    isnothing(fock_numbers) && (fock_numbers = string.(collect(xvec)))

    fig, location = _getFigAndLocation(location)
    lyt = GridLayout(location)
    ax = Axis(lyt[1, 1])

    bp = barplot!(ax, xvec, real(diag(ρ)); kwargs...)

    ax.xticks = (xvec, fock_numbers)
    ax.xlabel = "Fock number"
    ax.ylabel = "Occupation probability"
    unit_y_range && ylims!(ax, 0, 1)

    return fig, ax, bp
end

raw"""
    _getFigAndLocation(location::Nothing)
    
    Create a new figure and return it, together with the GridPosition object pointing to the first cell.

    # Arguments
    - `location::Nothing`

    # Returns
    - `fig`: The figure object.
    - `location`: The GridPosition object pointing to the first cell.
"""
function _getFigAndLocation(location::Nothing)
    fig = Figure()
    return fig, fig[1, 1]
end

raw"""
    _getFigAndLocation(location::GridPosition)
    
    Compute which figure does the location belong to and return it, together with the location itself.

    # Arguments
    - `location::GridPosition`

    # Returns
    - `fig`: The figure object.
    - `location`: The GridPosition object.
"""
function _getFigAndLocation(location::GridPosition)
    fig = _figFromChildren(location.layout)
    return fig, location
end

raw"""
    _figFromChildren(children::GridLayout)

    Recursively find the figure object from the children layout.

    # Arguments
    - `children::GridLayout`

    # Returns
    - Union{Nothing, Figure, GridLayout}: The children's parent object.
"""
_figFromChildren(children) = _figFromChildren(children.parent)

raw"""
    _figFromChildren(fig::Figure)

    Return the figure object

    # Arguments
    - `fig::Figure`

    # Returns
    - `fig`: The figure object.
"""
_figFromChildren(fig::Figure) = fig

raw"""
    _figFromChildren(::Nothing)

    Throw an error if no figure has been found.

    # Arguments
    - `::Nothing`

    # Throws
    - `ArgumentError`: If no figure has been found.
"""
_figFromChildren(::Nothing) = throw(ArgumentError("No Figure has been found at the top of the layout hierarchy."))

function _render_bloch_makie(bloch_vec::Vector{Float64}; location = nothing, kwargs...)
    b = Bloch()
    add_vectors!(b, bloch_vec)
    fig, location = _getFigAndLocation(location)
    fig, ax = render(b; location = location, kwargs...)
    return fig, ax
end

@doc raw"""
    render(b::Bloch; location=nothing)

Render the Bloch sphere visualization from the given [`Bloch`](@ref) object `b`.

# Arguments

- `b::Bloch`: The Bloch sphere object containing states, vectors, and settings to visualize.
- `location`: Specifies where to display or save the rendered figure.
  - If `nothing` (default), the figure is displayed interactively.
  - If a file path (String), the figure is saved to the specified location.
  - Other values depend on backend support.

# Returns

- A tuple `(fig, axis)` where `fig` is the figure object and `axis` is the axis object used for plotting. These can be further manipulated or saved by the user.
"""
function QuantumToolbox.render(b::Bloch; location = nothing)
    fig, ax = _setup_bloch_plot!(b, location)
    _draw_bloch_sphere!(b, ax)
    _draw_reference_circles!(ax)
    _draw_axes!(ax)
    _plot_points!(b, ax)
    _plot_lines!(b, ax)
    _plot_arcs!(b, ax)
    _plot_vectors!(b, ax)
    _add_labels!(b, ax)
    return fig, ax
end

raw"""
    _setup_bloch_plot!(b::Bloch, location) -> (fig, ax)

Initialize the figure and `3D` axis for Bloch sphere visualization.

# Arguments
- `b::Bloch`: Bloch sphere object containing view parameters
- `location`: Figure layout position specification

# Returns
- `fig`: Created Makie figure
- `ax`: Configured Axis3 object

Sets up the `3D` coordinate system with appropriate limits and view angles.
"""
function _setup_bloch_plot!(b::Bloch, location)
    fig, location = _getFigAndLocation(location)
    bg_color = parse(RGBf, b.frame_color)
    frame_color = RGBAf(bg_color, b.frame_alpha)
    ax = Axis3(
        location;
        aspect = :data,
        limits = (-b.frame_limit, b.frame_limit, -b.frame_limit, b.frame_limit, -b.frame_limit, b.frame_limit),
        xgridvisible = false,
        ygridvisible = false,
        zgridvisible = false,
        xticklabelsvisible = false,
        yticklabelsvisible = false,
        zticklabelsvisible = false,
        xticksvisible = false,
        yticksvisible = false,
        zticksvisible = false,
        xlabel = "",
        ylabel = "",
        zlabel = "",
        backgroundcolor = frame_color,
        xypanelvisible = false,
        xzpanelvisible = false,
        yzpanelvisible = false,
        xspinesvisible = false,
        yspinesvisible = false,
        zspinesvisible = false,
        protrusions = (0, 0, 0, 0),
        perspectiveness = 0.2,
        viewmode = :fit,
    )
    length(b.view) == 2 || throw(ArgumentError("The length of `Bloch.view` must be 2."))
    ax.azimuth[] = deg2rad(b.view[1])
    ax.elevation[] = deg2rad(b.view[2])
    return fig, ax
end

raw"""
    _draw_bloch_sphere!(b, ax)

Draw the translucent sphere representing the Bloch sphere surface.
"""
function _draw_bloch_sphere!(b::Bloch, ax)
    n_lon = 4
    n_lat = 4
    radius = 1.0f0
    base_color = parse(RGBf, b.sphere_color)
    sphere_color = RGBAf(base_color, b.sphere_alpha)
    sphere_mesh = Sphere(Point3f(0), radius)
    mesh!(ax, sphere_mesh; color = sphere_color, shading = NoShading, transparency = true, rasterize = 3)
    θ_vals = range(0.0f0, 2π, length = n_lon + 1)[1:(end-1)]
    φ_curve = range(0.0f0, π, length = 600)
    line_alpha = max(0.05, b.sphere_alpha * 0.5)
    for θi in θ_vals
        x_line = [radius * sin(ϕ) * cos(θi) for ϕ in φ_curve]
        y_line = [radius * sin(ϕ) * sin(θi) for ϕ in φ_curve]
        z_line = [radius * cos(ϕ) for ϕ in φ_curve]
        lines!(ax, x_line, y_line, z_line; color = RGBAf(0.5, 0.5, 0.5, line_alpha), linewidth = 1, transparency = true)
    end
    φ_vals = range(0.0f0, π, length = n_lat + 2)
    θ_curve = range(0.0f0, 2π, length = 600)
    for ϕ in φ_vals
        x_ring = [radius * sin(ϕ) * cos(θi) for θi in θ_curve]
        y_ring = [radius * sin(ϕ) * sin(θi) for θi in θ_curve]
        z_ring = fill(radius * cos(ϕ), length(θ_curve))
        lines!(ax, x_ring, y_ring, z_ring; color = RGBAf(0.5, 0.5, 0.5, line_alpha), linewidth = 1, transparency = true)
    end
end

raw"""
    _draw_reference_circles!(ax)

Draw the three great circles `(XY, YZ, XZ planes)` on the Bloch sphere.

# Arguments
- `ax`: Makie Axis3 object for drawing

Adds faint circular guidelines representing the three principal planes.
"""
function _draw_reference_circles!(ax)
    wire_color = RGBAf(0.5, 0.5, 0.5, 0.4)
    φ = range(0, 2π, length = 100)
    # XY, YZ, XZ circles
    circles = [
        [Point3f(cos(φi), sin(φi), 0) for φi in φ],  # XY
        [Point3f(0, cos(φi), sin(φi)) for φi in φ],  # YZ
        [Point3f(cos(φi), 0, sin(φi)) for φi in φ],  # XZ
    ]
    for circle in circles
        lines!(ax, circle; color = wire_color, linewidth = 1.0)
    end
end

raw"""
    _draw_axes!(ax)

Draw the three principal axes `(x, y, z)` of the Bloch sphere.

# Arguments
- `ax`: Makie Axis3 object for drawing

Creates visible axis lines extending slightly beyond the unit sphere.
"""
function _draw_axes!(ax)
    axis_color = RGBAf(0.3, 0.3, 0.3, 0.8)
    axis_width = 0.8
    axes = [
        ([Point3f(1.0, 0, 0), Point3f(-1.0, 0, 0)], "x"),  # X-axis
        ([Point3f(0, 1.0, 0), Point3f(0, -1.0, 0)], "y"),  # Y-axis
        ([Point3f(0, 0, 1.0), Point3f(0, 0, -1.0)], "z"),  # Z-axis
    ]
    for (points, _) in axes
        lines!(ax, points; color = axis_color, linewidth = axis_width)
    end
end

raw"""
    _plot_points!(b::Bloch, ax)

Plot all quantum state points on the Bloch sphere.

# Arguments
- `b::Bloch`: Contains point data and styling information
- `ax`: Axis3 object for plotting

Handles both scatter points and line traces based on style specifications.
"""
function _plot_points!(b::Bloch, ax)
    for k in 1:length(b.points)
        pts = b.points[k]
        style = b.point_style[k]
        alpha = b.point_alpha[k]
        marker = b.point_marker[mod1(k, length(b.point_marker))]
        N = size(pts, 2)

        raw_x = pts[1, :]
        raw_y = pts[2, :]
        raw_z = pts[3, :]

        ds = vec(sqrt.(sum(abs2, pts; dims = 1)))
        if !all(isapprox.(ds, ds[1]; rtol = 1e-12))
            indperm = sortperm(ds)
        else
            indperm = collect(1:N)
        end
        this_color = b.point_color[k]
        if style == :m
            defaults = b.point_default_color
            L = length(defaults)
            times = ceil(Int, N / L)
            big_colors = repeat(b.point_default_color, times)[1:N]
            big_colors = big_colors[indperm]
            colors = big_colors
        else
            if this_color === nothing
                defaults = b.point_default_color
                colors = defaults[mod1(k, length(defaults))]
            else
                colors = this_color
            end
        end
        if style in (:s, :m)
            xs = raw_x[indperm]
            ys = raw_y[indperm]
            zs = raw_z[indperm]
            scatter!(
                ax,
                xs,
                ys,
                zs;
                color = colors,
                markersize = b.point_size[mod1(k, length(b.point_size))],
                marker = marker,
                transparency = alpha < 1.0,
                alpha = alpha,
                strokewidth = 0.0,
            )

        elseif style == :l
            xs = raw_x
            ys = raw_y
            zs = raw_z
            c = isa(colors, Vector) ? colors[1] : colors
            lines!(ax, xs, ys, zs; color = c, linewidth = 2.0, transparency = alpha < 1.0, alpha = alpha)
        end
    end
end

raw"""
    _plot_lines!(b::Bloch, ax)

Draw all connecting lines between points on the Bloch sphere.

# Arguments
- `b::Bloch`: Contains line data and formatting
- `ax`: Axis3 object for drawing

Processes line style specifications and color mappings.
"""
function _plot_lines!(b::Bloch, ax)
    color_map =
        Dict("k" => :black, "r" => :red, "g" => :green, "b" => :blue, "c" => :cyan, "m" => :magenta, "y" => :yellow)
    for (line, fmt) in b.lines
        x, y, z = line
        color_char = first(fmt)
        color = get(color_map, color_char, :black)
        linestyle = if occursin("--", fmt)
            :dash
        elseif occursin(":", fmt)
            :dot
        elseif occursin("-.", fmt)
            :dashdot
        else
            :solid
        end
        lines!(ax, x, y, z; color = color, linewidth = 1.0, linestyle = linestyle)
    end
end

raw"""
    _plot_arcs!(b::Bloch, ax)

Draw circular arcs connecting points on the Bloch sphere surface.

# Arguments
- `b::Bloch`: Contains arc data points
- `ax`: Axis3 object for drawing

Calculates great circle arcs between specified points.
"""
function _plot_arcs!(b::Bloch, ax)
    for arc_pts in b.arcs
        length(arc_pts) >= 2 || continue
        v1 = normalize(arc_pts[1])
        v2 = normalize(arc_pts[end])
        n = normalize(cross(v1, v2))
        θ = acos(clamp(dot(v1, v2), -1.0, 1.0))
        if length(arc_pts) == 3
            vm = normalize(arc_pts[2])
            dot(cross(v1, vm), n) < 0 && (θ -= 2π)
        end
        t_range = range(0, θ, length = 100)
        arc_points = [Point3f((v1 * cos(t) + cross(n, v1) * sin(t))) for t in t_range]
        lines!(ax, arc_points; color = RGBAf(0.8, 0.4, 0.1, 0.9), linewidth = 2.0, linestyle = :solid)
    end
end

raw"""
    _plot_vectors!(b::Bloch, ax)

Draw vectors from origin representing quantum states.

# Arguments
- `b::Bloch`: Contains vector data
- `ax`: Axis3 object for drawing

Scales vectors appropriately and adds `3D` arrow markers.
"""
function _plot_vectors!(b::Bloch, ax)
    isempty(b.vectors) && return
    arrowsize_vec = Vec3f(b.vector_arrowsize...)
    r = 1.0
    for (i, v) in enumerate(b.vectors)
        color = get(b.vector_color, i, RGBAf(0.2, 0.5, 0.8, 0.9))
        vec = Vec3f(v...)
        length = norm(vec)
        max_length = r * 0.90
        vec = length > max_length ? (vec/length) * max_length : vec
        arrows!(
            ax,
            [Point3f(0, 0, 0)],
            [vec],
            color = color,
            linewidth = b.vector_width,
            arrowsize = arrowsize_vec,
            arrowcolor = color,
            rasterize = 3,
        )
    end
end

raw"""
    _add_labels!(ax)

Add axis labels and state labels to the Bloch sphere.

# Arguments
- `ax`: Axis3 object for text placement

Positions standard labels `(x, y, |0⟩, |1⟩)` at appropriate locations.
"""
function _add_labels!(b::Bloch, ax)
    length(b.xlabel) == 2 || throw(ArgumentError("The length of `Bloch.xlabel` must be 2."))
    length(b.ylabel) == 2 || throw(ArgumentError("The length of `Bloch.ylabel` must be 2."))
    length(b.zlabel) == 2 || throw(ArgumentError("The length of `Bloch.zlabel` must be 2."))
    length(b.xlpos) == 2 || throw(ArgumentError("The length of `Bloch.xlpos` must be 2."))
    length(b.ylpos) == 2 || throw(ArgumentError("The length of `Bloch.ylpos` must be 2."))
    length(b.zlpos) == 2 || throw(ArgumentError("The length of `Bloch.zlpos` must be 2."))

    label_color = parse(RGBf, b.font_color)
    label_size = b.font_size
    offset_scale = b.frame_limit

    (b.xlabel[1] == "") || text!(
        ax,
        b.xlabel[1],
        position = Point3f(offset_scale * b.xlpos[1], 0, 0),
        color = label_color,
        fontsize = label_size,
        align = (:center, :center),
    )
    (b.xlabel[2] == "") || text!(
        ax,
        b.xlabel[2],
        position = Point3f(offset_scale * b.xlpos[2], 0, 0),
        color = label_color,
        fontsize = label_size,
        align = (:center, :center),
    )
    (b.ylabel[1] == "") || text!(
        ax,
        b.ylabel[1],
        position = Point3f(0, offset_scale * b.ylpos[1], 0),
        color = label_color,
        fontsize = label_size,
        align = (:center, :center),
    )
    (b.ylabel[2] == "") || text!(
        ax,
        b.ylabel[2],
        position = Point3f(0, offset_scale * b.ylpos[2], 0),
        color = label_color,
        fontsize = label_size,
        align = (:center, :center),
    )
    (b.zlabel[1] == "") || text!(
        ax,
        b.zlabel[1],
        position = Point3f(0, 0, offset_scale * b.zlpos[1]),
        color = label_color,
        fontsize = label_size,
        align = (:center, :center),
    )
    (b.zlabel[2] == "") || text!(
        ax,
        b.zlabel[2],
        position = Point3f(0, 0, offset_scale * b.zlpos[2]),
        color = label_color,
        fontsize = label_size,
        align = (:center, :center),
    )
    return nothing
end

@doc raw"""
    plot_bloch(::Val{:Makie}, state::QuantumObject; kwargs...)

Plot a pure quantum state on the Bloch sphere using the `Makie` backend.

# Arguments
- `state::QuantumObject{<:Union{Ket,Bra}}`: The quantum state ([`Ket`](@ref), [`Bra`](@ref), or [`Operator`](@ref)) to be visualized.
- `kwargs...`: Additional keyword arguments passed to `_render_bloch_makie`.

!!! note "Internal function"
    This is the `Makie`-specific implementation called by the main `plot_bloch` function.
"""
function QuantumToolbox.plot_bloch(
    ::Val{:Makie},
    state::QuantumObject{OpType};
    kwargs...,
) where {OpType<:Union{Ket,Bra,Operator}}
    bloch_vec = _state_to_bloch(state)
    return _render_bloch_makie(bloch_vec; kwargs...)
end

end
