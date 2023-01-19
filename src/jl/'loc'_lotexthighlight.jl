# AUTO GENERATED FILE - DO NOT EDIT

export 'loc'_lotexthighlight

"""
    'loc'_lotexthighlight(;kwargs...)

A LOTextHighlight component.
LOTextHighlight provides breakpoints and classes to allow for later highlighting.
It takes a property, `text`, and
and breaks it up based on all possible breakpoints in property `highlight_breakpoints`.
The text is output as a variety of spans with classnames corresponding to ids.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `class_name` (String; optional): Classes for the outer most div.
- `highlight_breakpoints` (Dict; optional): highlight breakpoints in the form of:
`{
            "coresentences": {
                "id": "coresentences",
                "value": [
                    [
                        0,
                        13
                    ],
                    [
                        20,
                        25
                    ]
                ],
                "label": "Main ideas"
            },
        }`
- `text` (String; optional): The text to be highlighted.
"""
function 'loc'_lotexthighlight(; kwargs...)
        available_props = Symbol[:id, :class_name, :highlight_breakpoints, :text]
        wild_props = Symbol[]
        return Component("'loc'_lotexthighlight", "LOTextHighlight", "learning_observer_components", available_props, wild_props; kwargs...)
end

