import learning_observer_components as loc
import dash
from dash import html, callback, Output, Input
from dash.exceptions import PreventUpdate
import dash_bootstrap_components as dbc

app = dash.Dash(
    __name__,
    external_stylesheets=[
        dbc.themes.MINTY,
        dbc.icons.FONT_AWESOME
    ]
)

text = "Election second heart official. Source focus pay sit daughter.\nUnderstand career staff ground choose. Describe carry probably political.\nContinue require reduce piece front floor cell executive. Republican American religious would put. Maintain meet garden white value simple feel.\nHigh outside happen sing. Store car PM house around.\nSpecial west tree bed support. Trade buy dark focus situation they.\nMethod want country. Well remember across save message me. Wait miss theory head she debate from.\nMention painting art buy. Personal score explain ask sense behavior. Value really success claim dark member.\nWe apply camera. Or short you collection seat. Truth create fire remember.\nPart wish agree activity day place quality cost.\nTreat already explain day many. Require task political. Kitchen service fish physical partner analysis reach.\nWho increase action many. Per result professor cold born at.\nMiss but reality. Hit everyone why responsibility different when. Throw woman onto trial suggest.\nImage might character friend relate treatment. Mr court myself inside speak. Radio tree actually degree total stop manager.\nLittle none school you whether statement yard edge. Court tell real American."
data={
    "text": {
        "student_text": {
            "id": "studenttext",
            "value": text,
            "label": "Student text"
        }
    },
    'highlight': {
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
        "extendedcoresentences": {
            "id": "extendedcoresentences",
            "value": [
                [
                    16,
                    19
                ],
                [
                    30,
                    53
                ],
            ],
            "label": "Supporting ideas"
        },
        "contentsegments": {
            "id": "contentsegments",
            "value": [
                [
                    55,
                    72
                ],
            ],
            "label": "Supporting ideas"
        },
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
        },
        "sentences": {
            "id": "sentences",
            "value": 42,
            "label": "# Sentences",
            "help": "Percentile based on number of sentences"
        },
        "nominalreferences": {
            "id": "nominalreferences",
            "value": 93,
            "label": "Nominal References",
            "help": "Percentile based on use of nominal references"
        }
    }
}
shown = ['transitions', 'academiclanguage', 'sentences', 'nominalreferences', 'studenttext', 'transitionwords', 'text', 'metrics', 'indicators', 'coresentences', 'extendedcoresentences', 'highlight', 'contentsegments']
app.layout = dbc.Container(
    [
        # loc.StudentOverviewCard(
        #     id='student1',
        #     name='John Doe',
        #     data=data,
        #     shown=shown,
        #     class_name='w-50'
        # ),
        loc.LOMetrics(
            id='metrics',
            data=data["metrics"]
        ),
        loc.LOIndicatorBars(
            id='indicators',
            data=data["indicators"],
            shown=shown
        ),
        loc.LOTextHighlight(
            id='highlight',
            text=text,
            highlight_breakpoints=data["highlight"]
        ),
        html.Div(id='times-clicked'),
        dbc.Button('Update data', id='btn'),
        html.Hr(className='my-5'),
    ],
    fluid=True
)

@callback(
    Output('metrics', 'shown'),
    Input('btn', 'n_clicks')
)
def update(n):
    if n is None:
        raise PreventUpdate
    if n % 2 == 1:
        return ['sentences']
    else:
        return []


if __name__ == '__main__':
    app.run_server(debug=True)
