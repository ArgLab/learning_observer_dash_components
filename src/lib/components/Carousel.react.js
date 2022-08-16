import React, { Component } from "react";
import Slider from "react-slick";

/**
 * Carosel is used to make pretty carousels
 * Need to include some extra css when using this
 */
export default class Carousel extends Component {
    render() {
        const {
            dots,
            arrows,
            infinite,
            autoplay,
            speed,
            slides_to_show,
            slides_to_scroll,
            center_mode,
            center_padding,
            swipe_to_slide,
            variable_width,
            responsive,
            vertical,
            class_name,
            style,
            id,
            children
        } = this.props;

        const settings = {
            dots: (typeof dots !== 'undefined') ? dots : false,
            arrows: (typeof arrows !== 'undefined') ? arrows : true,
            infinite: (typeof infinite !== 'undefined') ? infinite : true,
            autoplay: (typeof autoplay !== 'undefined') ? autoplay : false,
            speed: speed || 1000,
            slidesToShow: slides_to_show || 3,
            slidesToScroll: slides_to_scroll || 1,
            centerMode: (typeof center_mode !== 'undefined') ? center_mode : false,
            centerPadding: center_padding || '50px',
            swipeToSlide: (typeof swipe_to_slide !== 'undefined') ? swipe_to_slide : true,
            variableWidth: (typeof variable_width !== 'undefined') ? variable_width : false,
            responsive: responsive || null,
            vertical: (typeof vertical !== 'undefined') ? vertical : false,
        };
        return (
            <div className={class_name} id={id} style={style}>
                <Slider {...settings}>
                    {children}
                </Slider>
            </div>
        );
    }
}
Carousel.defaultProps = {};

Carousel.propTypes = {
    /**
     * Dots under carousel
     */
    dots: PropTypes.bool,

    /**
     * Arrows to control carousel
     */
    arrows: PropTypes.bool,

    /**
     * If the carousel content will repeat in a loop
     */
    infinite: PropTypes.bool,

    /**
     * If the carousel will start to play automatically
     */
    autoplay: PropTypes.bool,

    /**
     * Speed of autoplay
     */
    speed: PropTypes.number,

    /**
     * How many slides you want to show
     */
    slides_to_show: PropTypes.number,

    /**
     * How many slides will scroll when you swipe the carousel
     */
    slides_to_scroll: PropTypes.number,

    /**
     * To centralize the carousel
     */
    center_mode: PropTypes.bool,

    /**
     * Padding on the sides
     */
    center_padding: PropTypes.string,

    /**
     * If you can slide to scroll the slides
     */
    swipe_to_slide: PropTypes.bool,

    /**
     * The slides width varies according to the screen size
     */
    variable_width: PropTypes.bool,

    /**
     * Settings of breakpoints
     */
    responsive: PropTypes.array,

    /**
     * If your carousel is vertical
     */
    vertical: PropTypes.bool,

    /**
     * Your carousel is vertical
     */
    children: PropTypes.node,

    /**
     * Inline style of the component.
     */
    style: PropTypes.object,

    /**
     * Style class of the component.
     */
     class_name: PropTypes.string,

    /**
     * Id of the element
     */
    id: PropTypes.string
};
