import React, { Component } from 'react';
import Slider from 'react-slick';

import '../assets/styles/Carousel.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Carousel extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true
        };

        return (
            <div className="Carousel">
                <Slider {...settings}>
                    {this.props.items}
                </Slider>
            </div>

        );
    }
}
export default Carousel;