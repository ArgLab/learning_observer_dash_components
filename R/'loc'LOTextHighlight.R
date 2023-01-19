# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'loc'LOTextHighlight <- function(id=NULL, class_name=NULL, highlight_breakpoints=NULL, text=NULL) {
    
    props <- list(id=id, class_name=class_name, highlight_breakpoints=highlight_breakpoints, text=text)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'LOTextHighlight',
        namespace = 'learning_observer_components',
        propNames = c('id', 'class_name', 'highlight_breakpoints', 'text'),
        package = 'learningObserverComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
