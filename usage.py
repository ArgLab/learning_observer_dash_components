import learning_observer_components as loc
import dash
from dash import html
import dash_bootstrap_components as dbc

app = dash.Dash(
    __name__,
    external_stylesheets=[
        dbc.themes.MINTY,
        dbc.icons.FONT_AWESOME
    ]
)

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
        },
        "studenttext": {
            "id": "studenttext",
            "value": "Election second heart official. Source focus pay sit daughter.\nUnderstand career staff ground choose. Describe carry probably political.\nContinue require reduce piece front floor cell executive. Republican American religious would put. Maintain meet garden white value simple feel.\nHigh outside happen sing. Store car PM house around.\nSpecial west tree bed support. Trade buy dark focus situation they.\nMethod want country. Well remember across save message me. Wait miss theory head she debate from.\nMention painting art buy. Personal score explain ask sense behavior. Value really success claim dark member.\nWe apply camera. Or short you collection seat. Truth create fire remember.\nPart wish agree activity day place quality cost.\nTreat already explain day many. Require task political. Kitchen service fish physical partner analysis reach.\nWho increase action many. Per result professor cold born at.\nMiss but reality. Hit everyone why responsibility different when. Throw woman onto trial suggest.\nImage might character friend relate treatment. Mr court myself inside speak. Radio tree actually degree total stop manager.\nLittle none school you whether statement yard edge. Court tell real American.",
            "label": "Student text"
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
shown = ['transitions', 'academiclanguage', 'sentences', 'nominalreferences', 'studenttext', 'transitionwords', 'text', 'metrics', 'indicators']
app.layout = dbc.Container(
    [
        loc.StudentOverviewCard(
            id='student1',
            name='John Doe',
            data=data,
            shown=shown,
            class_name='w-50'
        ),
        loc.StudentOverviewCardNoBars(
            id='student2',
            name='Jane Doe',
            data=data,
            shown=shown,
            class_name='w-50'
        ),
        html.Div(id='times-clicked'),
        dbc.Button('Update data', id='btn'),
        html.Hr(className='my-5'),
    ],
    fluid=True
)


if __name__ == '__main__':
    app.run_server(debug=True)
