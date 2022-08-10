# AUTO GENERATED FILE - DO NOT EDIT

export 'loc'_studentoverviewcard

"""
    'loc'_studentoverviewcard(;kwargs...)

A StudentOverviewCard component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `class_name` (String; optional): A name that will be printed when this component is rendered.
- `data` (Dict; optional): The data displayed on the card.
- `name` (String; required): A name that will be printed when this component is rendered.
- `shown` (Array; optional): The shown items displayed on the card.
"""
function 'loc'_studentoverviewcard(; kwargs...)
        available_props = Symbol[:id, :class_name, :data, :name, :shown]
        wild_props = Symbol[]
        return Component("'loc'_studentoverviewcard", "StudentOverviewCard", "learning_observer_components", available_props, wild_props; kwargs...)
end

