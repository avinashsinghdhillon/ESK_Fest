import React from 'react';
// import "bootstrap/dist/css/bootstrap.css";
// import "/Carousel.css";
import imgCrystal from "./images/crystal-thomas-pano.jpg";
import imgHarold from "./images/harold-mcmillan-pano.jpg";
import imgJewel from "./images/jewel-brown-pano.jpg";
import imgLadyTee from "./images/lady-tee-liljay-pano.jpg";
import imgRay from "./images/ray-reed-pano.jpg";
import "./carousel.css"
import { Carousel } from 'react-bootstrap';

function EskCarousel(props) {
    return (
    <Carousel style={{height:"100%"}}>
        <Carousel.Item>
            <img
            className="d-block w-100 bigImg"
            src={imgCrystal}
            alt="Crystal Thomas"
            />
            <Carousel.Caption>
            <h3>Crystal Thomas</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 bigImg"
            src={imgHarold}
            alt="Harold McMillan"
            />
            <Carousel.Caption>
            <h3>Harold McMillan</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 bigImg"
            src={imgJewel}
            alt="Jewel Brown"
            />
            <Carousel.Caption>
            <h3>Jewel Brown</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 bigImg"
            src={imgLadyTee}
            alt="Lady Tee and Lil Jay"
            />
            <Carousel.Caption>
            <h3>Lady Tee and Lil Jay</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 bigImg"
            src={imgRay}
            alt="Ray Reed"
            />
            <Carousel.Caption>
            <h3>Ray Reed</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>   
    )
}

export default EskCarousel;