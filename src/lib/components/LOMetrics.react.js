import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';

/**
 * A React / dash / LO component that creates badges for numeric
 * values. It takes a set of properties and outputs each item as a
 * badge. If the ID of the item is not in the property `shown`, it
 * will not appear.
 *
 * @param {string} id - The ID of the component.
 * @param {function} setProps - A function that can be called to set the properties of the component.
 * @param {Object} data - An object containing the data to be displayed as badges. The keys are the IDs of the metrics
 * and the values are objects containing the following properties:
 *    - value: the numeric value of the metric
 *    - label: a label to be displayed next to the value
 *    - help: (optional) additional information to be displayed as a tooltip
 * @param {Array<string>} shown - An array of metric IDs to be displayed as badges.
 * @param {string} class_name - An optional CSS class to be added to the component.
 *
 * @returns {ReactNode} A React component that displays the metrics as badges.
 */
export default class LOMetrics extends Component {

    render() {
        const {id, setProps, data, shown, class_name} = this.props;

        const metric_badges = Object.entries(data).map(([key, metric]) => {
            return (
                <Badge
                    key={key}
                    bg='info'
                    pill
                    className={shown.includes(key) ? 'm-1': 'd-none'}
                    title={metric.help || metric.value}
                >
                    {metric.value} {metric.label}
                </Badge>
            )
        })

        return (
            <div
                key='metric-badges'
                className={class_name || ''}
                id={id}
            >
                {metric_badges}
            </div>
        );
    }
}

LOMetrics.defaultProps = {
    shown: [],
    data: {}
};

LOMetrics.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Classes for the outer most div.
     */
    class_name: PropTypes.string,

    /**
     * Data for the metrics should be in form:
     * `{
            "sentences": {
                "id": "sentences",
                "value": 33,
                "label": " sentences"
            },
        }`
     */
    data: PropTypes.object,

    /**
     * Which ids to show.
     */
    shown: PropTypes.array,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
