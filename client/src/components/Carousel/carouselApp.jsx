import React from "react";
import ReactDOM from "react-dom";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
// import Carousel from "react-bootstrap-carousel";

const styles = { height: 400, width: "100%" };

class Carousel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
  }
  onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  visibleOnSelect = active => {
    console.log(`visible onSelect active=${active}`);
  };
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide = () => {
    this.slider.goToSlide(4);
  };
  autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
//   _changeIcon = () => {
//     let { leftIcon, rightIcon } = this.state;
//     leftIcon = leftIcon ? undefined : <span className="fa fa-glass" />;
//     rightIcon = rightIcon ? undefined : <span className="fa fa-music" />;
//     this.setState({ leftIcon, rightIcon });
//   };
  render() {
    let { leftIcon, rightIcon } = this.state;
    return (
      <div className="container-fluid">
        <Row>
          {/* <Col span={12} style={{ paddingTop: "20px" }}>
            <div className="btn-group">
              <Button bsStyle="primary" onClick={this._changeIcon}>
                Change Icon
              </Button>
              <Button bsStyle="primary" onClick={this.slidePrev}>
                Slider prev
              </Button>
              <Button bsStyle="primary" onClick={this.slideNext}>
                Slider next
              </Button>
              <Button bsStyle="primary" onClick={this.goToSlide}>
                Go to slide 4
              </Button>
              <Button bsStyle="primary" onClick={this.autoplay}>
                {this.state.autoplay ? "Stop Autoplay" : "Start Autoplay"}
              </Button>
            </div>
          </Col> */}
          <Col span={12} style={{ paddingTop: "20px" }}>
            <Carousel
              animation={true}
              autoplay={this.state.autoplay}
              slideshowSpeed={2000}
              leftIcon={leftIcon}
              rightIcon={rightIcon}
              onSelect={this.onSelect}
              ref={r => (this.slider = r)}
              version={4}
            >
              <div style={{ height: 400 }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="../../images/crystal-thomas-pano.jpg"
                />
                <div className="carousel-caption">Crystal Thomas</div>
              </div>
              <div style={{ height: 400 }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="../../images/harold-mcmillan-pano.jpg"
                />
                <div className="carousel-caption">Harold McMillan</div>
              </div>
              <div style={{ height: 400 }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="../../images/jewel-brown-pano.jpg"
                />
                <div className="carousel-caption">Jewel Brown</div>
              </div>
              <div style={{ height: 400 }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="../../images/lady-tee-liljay-pano.jpg"
                />
                <div className="carousel-caption">Lady Tee and Lil Jay</div>
              </div>
              <div style={{ height: 400 }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="../../images/ray-reed-pano.jpg"
                />
                <div className="carousel-caption">Ray Reed</div>
              </div>
            </Carousel>
          </Col>
        </Row>
      </div>
    );
  }
}

/**
 *  Boostrap Component
 */
const Row = props => <div className="row">{props.children}</div>;
const Col = props => (
  <div className={`col-${props.span}`} style={props.style}>
    {props.children}
  </div>
);

ReactDOM.render(<Demo />, document.getElementById("Demo"));