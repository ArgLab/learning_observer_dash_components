% Auto-generated: do not edit by hand
\name{'loc'LOTextHighlight}

\alias{'loc'LOTextHighlight}

\title{LOTextHighlight component}

\description{
LOTextHighlight provides breakpoints and classes to allow for later highlighting.
}

\usage{
'loc'LOTextHighlight(id=NULL, class_name=NULL, highlight_breakpoints=NULL,
text=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{class_name}{Character. Classes for the outer most div.}

\item{highlight_breakpoints}{Named list. highlight breakpoints in the form of:
`{
            "coresentences": {
                "id": "coresentences",
                "value": [
                    [
                        0,
                        13
                    ],
                    [
                        20,
                        25
                    ]
                ],
                "label": "Main ideas"
            },
        }`}

\item{text}{Character. The text to be highlighted.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}
