import React from 'react';
// import "bootstrap/dist/css/bootstrap.css";
// import "/Carousel.css";
import imgCrystal from "./images/crystal-thomas-pano.jpg";
import imgBarbara from "./images/barbara-lynn-pano.jpg";
import imgJewel from "./images/jewel-brown-pano.jpg";
import imgLadyTee from "./images/lady-tee-liljay-pano.jpg";
import imgLavelle from "./images/lavelle-barbara-pano.jpg";
import "./Carousel.css"
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
            src={imgBarbara}
            alt="Barbara Lynn"
            />
            <Carousel.Caption>
            <h3>Barbara Lynn</h3>
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
            src={imgLavelle}
            alt="Lavelle White and Barbara Lynn"
            />
            <Carousel.Caption>
            <h3>Lavelle White and Barbara Lynn</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>   
    )
}

export default EskCarousel;