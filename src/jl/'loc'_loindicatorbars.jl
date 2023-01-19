# AUTO GENERATED FILE - DO NOT EDIT

export 'loc'_loindicatorbars

"""
    'loc'_loindicatorbars(;kwargs...)

A LOIndicatorBars component.
LOIndicatorBars provide progress bars.
It takes a property, `data`, and
outputs each item as a label/progress bar pair.
If the id of the item is not in the property `shown`,
it will not appear.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `class_name` (String; optional): Classes for the outer most div.
- `data` (Dict; optional): Data for the metrics should be in form:
`{
            "transitions": {
                "id": "transitions",
                "value": 81,
                "label": "Transitions",
                "help": "Percentile based on total number of transitions used"
            },
        }`
- `shown` (Array; optional): Which ids to show.
"""
function 'loc'_loindicatorbars(; kwargs...)
        available_props = Symbol[:id, :class_name, :data, :shown]
        wild_props = Symbol[]
        return Component("'loc'_loindicatorbars", "LOIndicatorBars", "learning_observer_components", available_props, wild_props; kwargs...)
end

