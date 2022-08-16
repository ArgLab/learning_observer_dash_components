# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'loc'Carousel <- function(children=NULL, id=NULL, arrows=NULL, autoplay=NULL, center_mode=NULL, center_padding=NULL, class_name=NULL, dots=NULL, infinite=NULL, responsive=NULL, slides_to_scroll=NULL, slides_to_show=NULL, speed=NULL, style=NULL, swipe_to_slide=NULL, variable_width=NULL, vertical=NULL) {
    
    props <- list(children=children, id=id, arrows=arrows, autoplay=autoplay, center_mode=center_mode, center_padding=center_padding, class_name=class_name, dots=dots, infinite=infinite, responsive=responsive, slides_to_scroll=slides_to_scroll, slides_to_show=slides_to_show, speed=speed, style=style, swipe_to_slide=swipe_to_slide, variable_width=variable_width, vertical=vertical)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Carousel',
        namespace = 'learning_observer_components',
        propNames = c('children', 'id', 'arrows', 'autoplay', 'center_mode', 'center_padding', 'class_name', 'dots', 'infinite', 'responsive', 'slides_to_scroll', 'slides_to_show', 'speed', 'style', 'swipe_to_slide', 'variable_width', 'vertical'),
        package = 'learningObserverComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
