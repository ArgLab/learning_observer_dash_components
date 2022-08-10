# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class StudentOverviewCard(Component):
    """A StudentOverviewCard component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- class_name (string; optional):
    A name that will be printed when this component is rendered.

- data (dict; optional):
    The data displayed on the card.

- name (string; required):
    A name that will be printed when this component is rendered.

- shown (list; optional):
    The shown items displayed on the card."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'learning_observer_components'
    _type = 'StudentOverviewCard'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, class_name=Component.UNDEFINED, name=Component.REQUIRED, data=Component.UNDEFINED, shown=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'class_name', 'data', 'name', 'shown']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'class_name', 'data', 'name', 'shown']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['name']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(StudentOverviewCard, self).__init__(**args)
