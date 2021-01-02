import React, { Component } from 'react';
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'

class MyCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={img1} alt="img"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} alt="img"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} alt="img"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default MyCarousel