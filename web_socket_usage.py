from learning_observer_components import WebSocket
from dash import Dash, html, Output, Input, clientside_callback

# Client-side function (for performance) that updates the graph.
update_data = """
    function(msg) {
    if(!msg){return {};}
    return msg.data;}
"""
# Create small example app.
app = Dash(__name__)
app.layout = html.Div([
    WebSocket(id="ws"),
    html.Div(id="output"),
    html.Div("bruh")
])
clientside_callback(update_data, Output("output", "children"), Input("ws", "message"))

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
