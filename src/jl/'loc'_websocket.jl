# AUTO GENERATED FILE - DO NOT EDIT

export 'loc'_websocket

"""
    'loc'_websocket(;kwargs...)

A WebSocket component.
A simple interface to
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `error` (Dict | String; optional): This property is set with the content of the onerror event.
- `key` (Dict; optional): Supported websocket key (optional).
- `message` (Dict | String; optional): When messages are received, this property is updated with the message content.
- `send` (Dict | String; optional): When this property is set, a message is sent with its content.
- `state` (Dict | String; optional): This websocket state (in the readyState prop) and associated information.
- `url` (String; optional): The websocket endpoint (e.g. wss://echo.websocket.org).
"""
function 'loc'_websocket(; kwargs...)
        available_props = Symbol[:id, :error, :key, :message, :send, :state, :url]
        wild_props = Symbol[]
        return Component("'loc'_websocket", "WebSocket", "learning_observer_components", available_props, wild_props; kwargs...)
end

