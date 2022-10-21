
module LearningObserverComponents
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("jl/'loc'_carousel.jl")
include("jl/'loc'_studentoverviewcard.jl")
include("jl/'loc'_studentoverviewcardnobars.jl")
include("jl/'loc'_websocket.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "learning_observer_components",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "learning_observer_components.min.js",
    external_url = "https://unpkg.com/learning_observer_components@0.0.1/learning_observer_components/learning_observer_components.min.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "learning_observer_components.min.js.map",
    external_url = "https://unpkg.com/learning_observer_components@0.0.1/learning_observer_components/learning_observer_components.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
