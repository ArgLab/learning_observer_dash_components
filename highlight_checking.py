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

text = "The United States should invade Mexico. Mexico is a country that is rife with corruption and violence. The Mexican government is unable to control the drug cartels, and as a result, drug-related violence is out of control.\n\nThe drug cartels are also responsible for smuggling drugs into the United States. This has led to a rise in drug addiction and crime in the United States.\n\nThe Mexican government is also failing to protect it"
data={
    "text": {
        "student_text": {
            "id": "studenttext",
            "value": text,
            "label": "Student text"
        }
    },
    'highlight': {
        "transition_words": {
            "id": "transition_words",
            "value": [
                [60, 8],
                [169, 13],
                [222, 2],
                [245, 5],
                [378, 2],
                [406, 5]
            ],
            "label": "Transition Words"
        },
    },
    "metrics": {},
    "indicators": {}
}
shown = ['transition_words', 'highlight']
app.layout = dbc.Container(
    [
        loc.LOTextHighlight(
            id='highlight',
            text=text,
            highlight_breakpoints=data["highlight"],
        ),
    ],
    fluid=True
)

if __name__ == '__main__':
    app.run_server(debug=True)
