# AUTO GENERATED FILE - DO NOT EDIT

export 'loc'_loconnection

"""
    'loc'_loconnection(;kwargs...)

A LOConnection component.
A simple interface to
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `data_scope` (Dict; optional): Supported websocket key (optional).
- `error` (Dict | String; optional): This property is set with the content of the onerror event.
- `message` (Dict | String; optional): When messages are received, this property is updated with the message content.
- `send` (Dict | String; optional): When this property is set, a message is sent with its content.
- `state` (Dict | String; optional): This websocket state (in the readyState prop) and associated information.
- `url` (String; optional): The websocket endpoint (e.g. wss://echo.websocket.org).
"""
function 'loc'_loconnection(; kwargs...)
        available_props = Symbol[:id, :data_scope, :error, :message, :send, :state, :url]
        wild_props = Symbol[]
        return Component("'loc'_loconnection", "LOConnection", "learning_observer_components", available_props, wild_props; kwargs...)
end

