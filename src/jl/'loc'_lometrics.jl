# AUTO GENERATED FILE - DO NOT EDIT

export 'loc'_lometrics

"""
    'loc'_lometrics(;kwargs...)

A LOMetrics component.
LOMetrics creates badges for numeric values.
It takes a property, `data`, and
outputs each item as a badge.
If the id of the item is not in the property `shown`,
it will not appear.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `class_name` (String; optional): Classes for the outer most div.
- `data` (Dict; optional): Data for the metrics should be in form:
`{
            "sentences": {
                "id": "sentences",
                "value": 33,
                "label": " sentences"
            },
        }`
- `shown` (Array; optional): Which ids to show.
"""
function 'loc'_lometrics(; kwargs...)
        available_props = Symbol[:id, :class_name, :data, :shown]
        wild_props = Symbol[]
        return Component("'loc'_lometrics", "LOMetrics", "learning_observer_components", available_props, wild_props; kwargs...)
end

