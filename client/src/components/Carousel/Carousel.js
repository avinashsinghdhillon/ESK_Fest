import React from 'react';
import imgCrystal from "./images/crystal-thomas-pano.jpg";
import imgBarbara from "./images/barbara-lynn-pano.jpg";
import imgJewel from "./images/jewel-brown-pano.jpg";
import imgCLC from "./images/crystal-lucky-chuck-pano.jpg";
import imgLavelle from "./images/lavelle-barbara-pano.jpg";
import "./Carousel.css"
import { Carousel } from 'react-bootstrap';

function EskCarousel(props) {
    return (
    <Carousel style={{height:"100%", zIndex:-1}}>
        <Carousel.Item>
            <img
            className="d-block w-100 bigImg"
            src={imgCrystal}
            alt="Crystal Thomas"
            />
            <Carousel.Caption>
            <h3 className="artist-name">Crystal Thomas</h3>
            <p className="artist-caption">Gospel, soul and rhythm singer Crystal Thomas hails from Louisiana.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 bigImg"
            src={imgBarbara}
            alt="Barbara Lynn"
            />
            <Carousel.Caption>
            <h3 className="artist-name">Barbara Lynn</h3>
            <p className="artist-caption">In 2018, Lynn was one of nine artists designated to receive a National Heritage Fellowship.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 bigImg"
            src={imgJewel}
            alt="Jewel Brown"
            />
            <Carousel.Caption>
            <h3 className="artist-name">Jewel Brown</h3>
            <p className="artist-caption">Brown projects spirited energy when she performs.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 bigImg"
            src={imgCLC}
            alt="Crystal, Lucky and Chuck"
            />
            <Carousel.Caption>
            <h3 className="artist-name">Crystal, Lucky, and Chuck</h3>
            <p className="artist-caption">Recording session for the “Don’t Worry About The Blues” album.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 bigImg"
            src={imgLavelle}
            alt="Lavelle White and Barbara Lynn"
            />
            <Carousel.Caption>
            <h3 className="artist-name">Lavelle White and Barbara Lynn</h3>
            <p className="artist-caption">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>   
    )
}

export default EskCarousel;