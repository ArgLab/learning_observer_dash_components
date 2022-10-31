# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'loc'LOConnection <- function(id=NULL, data_scope=NULL, error=NULL, message=NULL, send=NULL, state=NULL, url=NULL) {
    
    props <- list(id=id, data_scope=data_scope, error=error, message=message, send=send, state=state, url=url)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'LOConnection',
        namespace = 'learning_observer_components',
        propNames = c('id', 'data_scope', 'error', 'message', 'send', 'state', 'url'),
        package = 'learningObserverComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
