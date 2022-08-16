# AUTO GENERATED FILE - DO NOT EDIT

export 'loc'_coursecarousel

"""
    'loc'_coursecarousel(;kwargs...)
    'loc'_coursecarousel(children::Any;kwargs...)
    'loc'_coursecarousel(children_maker::Function;kwargs...)


A CourseCarousel component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `children` (optional): Your carousel is vertical
- `id` (optional): Id of the element
- `arrows` (optional): Arrows to control carousel
- `autoplay` (optional): If the carousel will start to play automatically
- `center_mode` (optional): To centralize the carousel
- `center_padding` (optional): Padding on the sides
- `class_name` (optional): Style class of the component.
- `dots` (optional): Dots under carousel
- `infinite` (optional): If the carousel content will repeat in a loop
- `responsive` (optional): Settings of breakpoints
- `slides_to_scroll` (optional): How many slides will scroll when you swipe the carousel
- `slides_to_show` (optional): How many slides you want to show
- `speed` (optional): Speed of autoplay
- `style` (optional): Inline style of the component.
- `swipe_to_slide` (optional): If you can slide to scroll the slides
- `variable_width` (optional): The slides width varies according to the screen size
- `vertical` (optional): If your carousel is vertical
"""
function 'loc'_coursecarousel(; kwargs...)
        available_props = Symbol[:children, :id, :arrows, :autoplay, :center_mode, :center_padding, :class_name, :dots, :infinite, :responsive, :slides_to_scroll, :slides_to_show, :speed, :style, :swipe_to_slide, :variable_width, :vertical]
        wild_props = Symbol[]
        return Component("'loc'_coursecarousel", "CourseCarousel", "learning_observer_components", available_props, wild_props; kwargs...)
end

'loc'_coursecarousel(children::Any; kwargs...) = 'loc'_coursecarousel(;kwargs..., children = children)
'loc'_coursecarousel(children_maker::Function; kwargs...) = 'loc'_coursecarousel(children_maker(); kwargs...)

