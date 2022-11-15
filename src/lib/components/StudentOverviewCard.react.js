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
        const highlight_colors = ['success', 'danger', 'warning', 'info'];

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
        let i = 0;
        for (let [key, value] of Object.entries(data.highlight)) {
            if (shown.includes(value.id)) {
                for (const values of value.value) {
                    highlights.push(
                        {
                            'start': values[0],
                            'end': values[0] + values[1],
                            'color': highlight_colors[i % highlight_colors.length]
                        }
                    );
                }
            }
            i += 1;
        }
        highlights.sort((a, b) => a.start - b.start);

        // prep text data
        const text = Object.entries(data.text).map(([key, text]) => {
            let child = Array.isArray(text.value) ? text.value.join(', ') : text.value;
            if (text.id === 'student_text') {
                // created highlighted text
                if (shown.includes('highlight') & highlights.length > 0) {
                    child = [];
                    let start = 0;
                    let end = 0;
                    highlights.forEach(high => {
                        start = high.start;
                        if (start > end + 1) {
                            child.push(
                                <span key={`text-${end}-${start}`}>{text.value.slice(end, start)}</span>
                            )
                        }
                        end = high.end;
                        child.push(
                            <span
                                key={`text-${start}-${end}`}
                                className={`bg-${high.color} bg-opacity-50`}
                            >
                                {text.value.slice(start,end+1)}
                            </span>
                        )
                    })
                    child.push(
                        <span key='text-end'>{text.value.slice(end)}</span>
                    )
                }
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
