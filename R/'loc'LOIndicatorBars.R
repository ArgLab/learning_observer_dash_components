# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'loc'LOIndicatorBars <- function(id=NULL, class_name=NULL, data=NULL, shown=NULL) {
    
    props <- list(id=id, class_name=class_name, data=data, shown=shown)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'LOIndicatorBars',
        namespace = 'learning_observer_components',
        propNames = c('id', 'class_name', 'data', 'shown'),
        package = 'learningObserverComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
