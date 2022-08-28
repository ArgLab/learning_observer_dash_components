# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'loc'StudentOverviewCardNoBars <- function(id=NULL, border=NULL, class_name=NULL, data=NULL, name=NULL, shown=NULL) {
    
    props <- list(id=id, border=border, class_name=class_name, data=data, name=name, shown=shown)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'StudentOverviewCardNoBars',
        namespace = 'learning_observer_components',
        propNames = c('id', 'border', 'class_name', 'data', 'name', 'shown'),
        package = 'learningObserverComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
