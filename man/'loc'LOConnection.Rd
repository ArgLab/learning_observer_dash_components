% Auto-generated: do not edit by hand
\name{'loc'LOConnection}

\alias{'loc'LOConnection}

\title{LOConnection component}

\description{
A simple interface to
}

\usage{
'loc'LOConnection(id=NULL, data_scope=NULL, error=NULL, message=NULL,
send=NULL, state=NULL, url=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{data_scope}{Named list. Supported websocket key (optional).}

\item{error}{Named list | character. This property is set with the content of the onerror event.}

\item{message}{Named list | character. When messages are received, this property is updated with the message content.}

\item{send}{Named list | character. When this property is set, a message is sent with its content.}

\item{state}{Named list | character. This websocket state (in the readyState prop) and associated information.}

\item{url}{Character. The websocket endpoint (e.g. wss://echo.websocket.org).}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

