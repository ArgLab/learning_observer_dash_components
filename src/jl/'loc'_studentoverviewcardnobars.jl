# AUTO GENERATED FILE - DO NOT EDIT

export 'loc'_studentoverviewcardnobars

"""
    'loc'_studentoverviewcardnobars(;kwargs...)

A StudentOverviewCardNoBars component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `border` (String; optional): Border of the card.
- `class_name` (String; optional): Classes for the outer most card.
- `data` (Dict; optional): The data displayed on the card.
- `name` (String; required): A name that will be printed when this component is rendered.
- `shown` (Array; optional): The shown items displayed on the card.
"""
function 'loc'_studentoverviewcardnobars(; kwargs...)
        available_props = Symbol[:id, :border, :class_name, :data, :name, :shown]
        wild_props = Symbol[]
        return Component("'loc'_studentoverviewcardnobars", "StudentOverviewCardNoBars", "learning_observer_components", available_props, wild_props; kwargs...)
end

