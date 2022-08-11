import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class StudentOverviewCard extends Component {

    render() {
        const {id, name, setProps, data, shown, class_name, border} = this.props;

        const colors = ['danger', 'warning', 'success']

        const metric_badges = Object.entries(data.metrics).map(([key, metric]) => {
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

        const levels = ['Poor', 'Average', 'Good'];
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
                        title={`Proficiency in ${indicator.label}: ${levels[(indicator.value-1)%3]}`}
                    />
                </div>
            )
        })

        return (
            <Card
                id={id}
                className={class_name || ''}
                border={border || ''}
            >
                <Card.Body>
                    <h4>{name}</h4>
                    <ButtonGroup
                        size='sm'
                        className='position-absolute end-0 top-0'
                    >
                        <Button
                            key='open-document'
                            variant='white'
                            href={data.link || ''}
                            target='_blank'
                            title="Student Document (opens new tab)"
                            className='text-body'
                        >
                            <i className='fas fa-file text-body'/>
                        </Button>
                        <Button
                            key='expand-student'
                            variant='white'
                            href={`/student/${id}`} // TODO we might need to provide the course information to the student card to direct them to the right place OR we set a parameter for it
                            target='_blank'
                            title="Student Details (opens new tab)"
                            className='text-body'
                        >
                            <i className='fas fa-up-right-and-down-left-from-center'/>
                        </Button>
                    </ButtonGroup>
                    <div
                        key='metric-badges'
                        className={shown.includes('metrics') ? 'student-card-metrics': 'd-none'}
                    >
                        {metric_badges}
                    </div>
                    <div key='text' className={shown.includes('text') ? 'student-card-text': 'd-none'}>
                        {data.text}
                    </div>
                    <div key='indicators' className={shown.includes('indicators') ? 'student-card-indicators': 'd-none'}>
                        {indicator_bars}
                    </div>
                </Card.Body>
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
     * Classes for the outer most card.
     */
    class_name: PropTypes.string,

    /**
     * Border of the card.
     */
    border: PropTypes.string,

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
