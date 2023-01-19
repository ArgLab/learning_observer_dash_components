# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LOMetrics(Component):
    """A LOMetrics component.
LOMetrics creates badges for numeric values.
It takes a property, `data`, and
outputs each item as a badge.
If the id of the item is not in the property `shown`,
it will not appear.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- class_name (string; optional):
    Classes for the outer most div.

- data (dict; optional):
    Data for the metrics should be in form:  `{
    \"sentences\": {                  \"id\": \"sentences\",
    \"value\": 33,                  \"label\": \" sentences\"
    },          }`.

- shown (list; optional):
    Which ids to show."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'learning_observer_components'
    _type = 'LOMetrics'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, class_name=Component.UNDEFINED, data=Component.UNDEFINED, shown=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'class_name', 'data', 'shown']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'class_name', 'data', 'shown']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(LOMetrics, self).__init__(**args)
