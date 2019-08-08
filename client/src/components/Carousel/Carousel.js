import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "/Carousel.css";

function Carousel(props) {
    return (
        <div className="carousel">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12" style="padding-top: 20px;">
                        <div className="carousel slide">
                            <ol className="carousel-indicators">
                                <li className style="margin-left: 10px;">
                                    ::before
                                    ::after
                        </li>
                                <li className style="margin-left: 10px;">
                                    ::before
                                    ::after
                        </li>
                                <li className style="margin-left: 10px;">
                                    ::before
                                    ::after
                        </li>
                                <li className="active" style="margin-left: 10px;">
                                    ::before
                                    ::after
                        </li>
                                <li className style="margin-left: 10px;">
                                    ::before
                                    ::after
                        </li>
                            </ol>
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item carousel-item-prev carousel-item-left">
                                    <div style="height: 400px;">
                                        <img src="../../images/crystal-thomas-pano.jpg" style="width: 100%; height: 100%;" />
                                        <div className="carousel-caption">Crystal Thomas</div>
                                    </div>
                                </div>
                                <div className="carousel-item carousel-item-prev carousel-item-left">
                                    <div style="height: 400px;">
                                        <img src="../../images/harold-mcmillan-pano.jpg" style="width: 100%; height: 100%;" />
                                        <div className="carousel-caption">Harold McMillan</div>
                                    </div>
                                </div>
                                <div className="carousel-item carousel-item-prev carousel-item-left">
                                    <div style="height: 400px;">
                                        <img src="../../images/jewel-brown-pano.jpg" style="width: 100%; height: 100%;" />
                                        <div className="carousel-caption">Jewel Brown</div>
                                    </div>
                                </div>
                                <div className="carousel-item active">
                                    <div style="height: 400px;">
                                        <img src="../../images/lady-tee-liljay-pano.jpg" style="width: 100%; height: 100%;" />
                                        <div className="carousel-caption">Lady Tee and Lil Jay</div>
                                    </div>
                                </div>
                                <div className="carousel-item carousel-item-next carousel-item-right">
                                    <div style="height: 400px;">
                                        <img src="../../images/ray-reed-pano.jpg" style="width: 100%; height: 100%;" />
                                        <div className="carousel-caption">Ray Reed</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <a className="left carousel-control-prev">
                                    <span className="leftControl">
                                        <i className="icon icon-chevron-left">
                                            ::before
                                        </i>
                                    </span>
                                </a>
                                <a className="right carousel-control-next">
                                    <span className="rightControl">
                                        <i className="icon icon-chevron-right">
                                            ::before
                                        </i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;