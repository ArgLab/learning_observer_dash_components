import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ProgressBar from 'react-bootstrap/ProgressBar';

/**
 * LOIndicatorBars provide progress bars.
 *
 * A React component that renders a set of indicator bars, each showing a label, a value, and a help text.
 * The component expects the following props:
 * - id (string): the HTML id of the top-level element.
 * - setProps (function): a function to update the component props.
 * - data (object): a dictionary of indicators, where each key is an indicator ID and each value is an object
 *   with the following keys:
 *   - id (string): the indicator ID.
 *   - label (string): the label to show before the indicator bar.
 *   - value (number): the value of the indicator bar (between 0 and 100).
 *   - help (string): a help text to show when hovering over the indicator bar.
 * - shown (array): an array of indicator IDs that should be shown (all other indicators will be hidden).
 * - class_name (string): a CSS class name to add to the top-level element.
 *
 * The component renders a `div` element with the specified id and class name, and a set of child `div` elements,
 * each representing an indicator bar. The bars are sorted in the order of their keys in the `data` prop. Each bar
 * shows the label and a progress bar with the value and help text. The progress bar color is based on the value
 * (red for values below 34, yellow for values between 34 and 67, and green for values above 67). The bars are
 * hidden or shown based on the `shown` prop.
 */
export default class LOIndicatorBars extends Component {

    render() {
        const {id, setProps, data, shown, class_name} = this.props;

        const indicator_colors = ['danger', 'warning', 'success'];

        const indicator_bars = Object.entries(data).map(([key, indicator]) => {
            return (
                <div
                    key={key}
                    className={shown.includes(indicator.id) ? 'd-table-row': 'd-none'}
                >
                    <div key='indicator-text' className='small d-table-cell text-nowrap'>
                        {indicator.label}:
                    </div>
                    <div
                        className='d-table-cell w-100 align-middle '
                    >
                        <ProgressBar
                            key='indicator-bar'
                            now={indicator.value}
                            title={`${indicator.value}% ${indicator.help}`}
                            variant={indicator_colors[Math.floor((indicator.value) / 34)]}
                        />
                    </div>
                </div>
            )
        })

        return (
            <div
                key='indicator-bars'
                className={`${class_name} d-table`}
                id={id}
            >
                {indicator_bars}
            </div>
        );
    }
}

LOIndicatorBars.defaultProps = {
    shown: [],
    data: {}
};

LOIndicatorBars.propTypes = {
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
            "transitions": {
                "id": "transitions",
                "value": 81,
                "label": "Transitions",
                "help": "Percentile based on total number of transitions used"
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
