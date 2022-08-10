import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class StudentOverviewCard extends Component {

    render() {
        const {id, name, setProps, data, shown, class_name} = this.props;

        const colors = ['danger', 'warning', 'success']

        const metric_badges = Object.entries(data.metrics).map(([key, metric]) => {
            return (
                <Badge
                    key={key}
                    bg='info'
                    className={shown.includes(key) ? '': 'd-none'}
                >
                    {metric.value} {metric.label}
                </Badge>
            )
        })

        const indicator_bars = Object.entries(data.indicators).map(([key, indicator]) => {
            return (
                <div
                    key={key}
                    className={shown.includes(indicator.id) ? '': 'd-none'}
                >
                    {indicator.label}
                    <ProgressBar
                        key={key}
                        max={3}
                        now={indicator.value}
                        variant={colors[(indicator.value-1)%3]}
                    />
                </div>
            )
        })

        return (
            <Card
                id={id}
                body
                className={class_name}
            >
                <h4>{name}</h4>
                <div key='metric-badges' className={shown.includes('metrics') ? '': 'd-none'}>
                    {metric_badges}
                </div>
                <div key='text' className={shown.includes('text') ? '': 'd-none'}>
                    {data.text}
                </div>
                <div key='indicators' className={shown.includes('indicators') ? '': 'd-none'}>
                    {indicator_bars}
                </div>
            </Card>
        );
    }
}

StudentOverviewCard.defaultProps = {};

StudentOverviewCard.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A name that will be printed when this component is rendered.
     */
    class_name: PropTypes.string,

    /**
     * A name that will be printed when this component is rendered.
     */
    name: PropTypes.string.isRequired,

    /**
     * The data displayed on the card.
     */
    data: PropTypes.object,

    /**
     * The shown items displayed on the card.
     */
    shown: PropTypes.array,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
