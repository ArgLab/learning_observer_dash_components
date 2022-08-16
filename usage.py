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
            'indicators': {
                'transition_words': {'id': 'transition_words', 'label': 'Transitions', 'value': 3},
                'other_one': {'id': 'other_one', 'label': 'Other', 'value': 1}
            },
            'metrics': {
                'since_last_edit': {'id': 'since_last_edit', 'label': ' minutes since last edit', 'value': 100, 'help': 'Total number of minutes since last edit was made'},
                'sentences': {'id': 'sentences', 'label': ' sentences', 'value': 50, 'help': 'Total number of sentences'}
            },
            'text': 'This is some text, dont miss out on the Manwich Monday'
        },
        shown=['transition_words', 'other_one', 'since_last_edit', 'sentences', 'text', 'metrics', 'indicators'],
        class_name='w-50'
    ),
    html.Div(id='times-clicked'),
    dbc.Button('Update data', id='btn'),
    html.Hr(className='my-5'),
    loc.Carousel(
        [
            dbc.Card(f'bruh {i}', body=True, class_name='m-1')
            for i in range(10)
        ],
        id='carousel',
        slides_to_show=6,
        slides_to_scroll=5,
        infinite=False
    )
])

@callback(
    Output('student1', 'data'),
    Output('times-clicked', 'children'),
    Input('btn', 'n_clicks'),
    State('student1', 'data')
)
def test(clicks, data):
    if not clicks:
        raise PreventUpdate
    data['indicators']['transition_words']['value'] = random.randint(1, 3)
    data['metrics']['since_last_edit']['value'] += random.randint(0, 15)
    return data, clicks


if __name__ == '__main__':
    app.run_server(debug=True)
