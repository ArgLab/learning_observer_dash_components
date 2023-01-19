% Auto-generated: do not edit by hand
\name{'loc'LOMetrics}

\alias{'loc'LOMetrics}

\title{LOMetrics component}

\description{
LOMetrics creates badges for numeric values. It takes a property, `data`, and outputs each item as a badge. If the id of the item is not in the property `shown`, it will not appear.
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

