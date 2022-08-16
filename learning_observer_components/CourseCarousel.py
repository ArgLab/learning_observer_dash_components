# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class CourseCarousel(Component):
    """A CourseCarousel component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:

- children (optional):
    Your carousel is vertical.

- id (optional):
    Id of the element.

- arrows (optional):
    Arrows to control carousel.

- autoplay (optional):
    If the carousel will start to play automatically.

- center_mode (optional):
    To centralize the carousel.

- center_padding (optional):
    Padding on the sides.

- class_name (optional):
    Style class of the component.

- dots (optional):
    Dots under carousel.

- infinite (optional):
    If the carousel content will repeat in a loop.

- responsive (optional):
    Settings of breakpoints.

- slides_to_scroll (optional):
    How many slides will scroll when you swipe the carousel.

- slides_to_show (optional):
    How many slides you want to show.

- speed (optional):
    Speed of autoplay.

- style (optional):
    Inline style of the component.

- swipe_to_slide (optional):
    If you can slide to scroll the slides.

- variable_width (optional):
    The slides width varies according to the screen size.

- vertical (optional):
    If your carousel is vertical."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'learning_observer_components'
    _type = 'CourseCarousel'
    @_explicitize_args
    def __init__(self, children=None, dots=Component.UNDEFINED, arrows=Component.UNDEFINED, infinite=Component.UNDEFINED, autoplay=Component.UNDEFINED, speed=Component.UNDEFINED, slides_to_show=Component.UNDEFINED, slides_to_scroll=Component.UNDEFINED, center_mode=Component.UNDEFINED, center_padding=Component.UNDEFINED, swipe_to_slide=Component.UNDEFINED, variable_width=Component.UNDEFINED, responsive=Component.UNDEFINED, vertical=Component.UNDEFINED, style=Component.UNDEFINED, class_name=Component.UNDEFINED, id=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'arrows', 'autoplay', 'center_mode', 'center_padding', 'class_name', 'dots', 'infinite', 'responsive', 'slides_to_scroll', 'slides_to_show', 'speed', 'style', 'swipe_to_slide', 'variable_width', 'vertical']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'arrows', 'autoplay', 'center_mode', 'center_padding', 'class_name', 'dots', 'infinite', 'responsive', 'slides_to_scroll', 'slides_to_show', 'speed', 'style', 'swipe_to_slide', 'variable_width', 'vertical']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(CourseCarousel, self).__init__(children=children, **args)
