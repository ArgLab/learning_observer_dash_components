% Auto-generated: do not edit by hand
\name{'loc'LOIndicatorBars}

\alias{'loc'LOIndicatorBars}

\title{LOIndicatorBars component}

\description{
LOIndicatorBars provide progress bars.
}

\usage{
'loc'LOIndicatorBars(id=NULL, class_name=NULL, data=NULL, shown=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{class_name}{Character. Classes for the outer most div.}

\item{data}{Named list. Data for the metrics should be in form:
`{
            "transitions": {
                "id": "transitions",
                "value": 81,
                "label": "Transitions",
                "help": "Percentile based on total number of transitions used"
            },
        }`}

\item{shown}{Unnamed list. Which ids to show.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}
