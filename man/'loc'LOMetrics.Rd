% Auto-generated: do not edit by hand
\name{'loc'LOMetrics}

\alias{'loc'LOMetrics}

\title{LOMetrics component}

\description{
LOMetrics creates badges for numeric values.
}

\usage{
'loc'LOMetrics(id=NULL, class_name=NULL, data=NULL, shown=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{class_name}{Character. Classes for the outer most div.}

\item{data}{Named list. Data for the metrics should be in form:
`{
            "sentences": {
                "id": "sentences",
                "value": 33,
                "label": " sentences"
            },
        }`}

\item{shown}{Unnamed list. Which ids to show.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}
