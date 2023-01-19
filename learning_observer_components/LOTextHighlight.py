# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LOTextHighlight(Component):
    """A LOTextHighlight component.
LOTextHighlight provides breakpoints and classes to allow for later highlighting.
It takes a property, `text`, and
and breaks it up based on all possible breakpoints in property `highlight_breakpoints`.
The text is output as a variety of spans with classnames corresponding to ids.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- class_name (string; optional):
    Classes for the outer most div.

- highlight_breakpoints (dict; optional):
    highlight breakpoints in the form of:  `{
    \"coresentences\": {                  \"id\": \"coresentences\",
    \"value\": [                      [                          0,
    13                      ],                      [
    20,                          25                      ]
    ],                  \"label\": \"Main ideas\"              },
    }`.

- text (string; default ''):
    The text to be highlighted."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'learning_observer_components'
    _type = 'LOTextHighlight'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, class_name=Component.UNDEFINED, text=Component.UNDEFINED, highlight_breakpoints=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'class_name', 'highlight_breakpoints', 'text']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'class_name', 'highlight_breakpoints', 'text']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(LOTextHighlight, self).__init__(**args)
