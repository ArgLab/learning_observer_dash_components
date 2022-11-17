import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

        const indicator_colors = ['danger', 'warning', 'success'];

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

        const indicator_bars = Object.entries(data.indicators).map(([key, indicator]) => {
            return (
                <Row
                    key={key}
                    xs={2}
                    className={shown.includes(indicator.id) ? 'g-1 align-items-center': 'd-none'}
                >
                    <Col key='indicator-text' className='small'>
                        {indicator.label}:
                    </Col>
                    <Col>
                        <ProgressBar
                            key='indicator-bar'
                            now={indicator.value}
                            title={`${indicator.value}% ${indicator.help}`}
                            variant={indicator_colors[Math.floor((indicator.value) / 34)]}
                        />
                    </Col>
                </Row>
            )
        })

        // determine the text highlights we want and put them in ascending order
        const highlights = [];
        const breakpoints_set = new Set();
        breakpoints_set.add(0);
        let i = 0;
        for (let [key, value] of Object.entries(data.highlight)) {
            for (const values of value.value) {
                breakpoints_set.add(values[0]);
                breakpoints_set.add(values[0] + values[1]);
                highlights.push([values[0], values[0]+values[1], key])
            }
        }
        highlights.sort((a, b) => a[0] - b[0]);
        const breakpoints = Array.from(breakpoints_set).sort();

        // prep text data
        const text = Object.entries(data.text).map(([key, text]) => {
            const text_str = Array.isArray(text.value) ? text.value.join(', ') : text.value
            let child = <span key={'text-overall'}>
                {text_str}
            </span>;
            if (text.id === 'student_text') {
                // created highlighted text
                if (shown.includes('highlight') & highlights.length > 0) {
                    child = new Array();
                    let text_slice = '';
                    let start = 0;
                    let end = 0;
                    let classes = [];
                    for (let i = 0; i < breakpoints.length; i++) {
                        start = breakpoints[i];
                        end = (i === breakpoints.length-1 ? text.value.length : breakpoints[i+1]);
                        text_slice = text.value.slice(start, end);
                        classes = [];
                        classes = highlights.reduce((acc, [s, e, c]) => {
                            if (s <= start && e >= end)
                                acc.push(c);
                            return acc;
                        }, [])
                        child.push(
                            <span
                                key={`text-${start}-${end}`}
                                className={classes.join(' ')}
                            >
                                {text_slice}
                            </span>
                        )                        
                    }
                }
            } else {
                
            }
            return (
                <div
                    key={key}
                    className={shown.includes(text.id) ? '' : 'd-none'}
                >
                    <span key='text-label' className={text.id === 'student_text' ? 'd-none' : ''}>
                        {`${text.label}: `}
                    </span>
                    <span key='text-value'>
                        {child}
                    </span>
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
                            href={data.link || '/document'}
                            target='_blank'
                            title="Student Document (opens new tab)"
                            className='text-body'
                        >
                            <i className='fas fa-file text-body'/>
                        </Button>
                        <Button
                            key='expand-student'
                            variant='white'
                            href='/student' // TODO we might need to provide the course information to the student card to direct them to the right place OR we set a parameter for it
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
                        {text}
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
