import learning_observer_components as loc
import dash
from dash import html, Input, State, Output, callback
from dash.exceptions import PreventUpdate
import dash_bootstrap_components as dbc
import random

app = dash.Dash(
    __name__,
    external_stylesheets=[
        dbc.themes.MINTY,
        dbc.icons.FONT_AWESOME
    ]
)

app.layout = dbc.Container([
    loc.StudentOverviewCard(
        id='student1',
        name='John Doe',
        data={
            "text": {
                "emotionwords": {
                    "id": "emotionwords",
                    "value": [
                        "sweet",
                        "sorry",
                        "felt",
                        "wonder",
                        "hate",
                        "want",
                        "missing",
                        "worry",
                        "love"
                    ],
                    "label": "Emotion words used"
                },
                "concretedetails": {
                    "id": "contretedetails",
                    "value": [
                        "hone",
                        "yelled",
                        "stairs",
                        "daddy",
                        "package",
                        "pitch",
                        "sack",
                        "teller",
                        "envelopes",
                        "ding"
                    ],
                    "label": "Concrete details"
                },
                "transitionwords": {
                    "id": "transitionwords",
                    "value": [
                        "in two weeks",
                        "but",
                        "still",
                        "every day",
                        "yet"
                    ],
                    "label": "Transitions used"
                }
            },
            "metrics": {
                "sentences": {
                    "id": "sentences",
                    "value": 33,
                    "label": " sentences"
                }
            },
            "indicators": {
                "transitions": {
                    "id": "transitions",
                    "value": 81,
                    "label": "Transitions",
                    "help": "Percentile based on total number of transitions used"
                },
                "academiclanguage": {
                    "id": "academiclanguage",
                    "value": 8,
                    "label": "Academic Language",
                    "help": "Percentile based on percent of academic language used"
                }
            }
        },
        shown=['transitions', 'academiclanguage', 'sentences', 'text', 'metrics', 'indicators'],
        class_name='w-50'
    ),
    html.Div(id='times-clicked'),
    dbc.Button('Update data', id='btn'),
    html.Hr(className='my-5'),
])


if __name__ == '__main__':
    app.run_server(debug=True)
