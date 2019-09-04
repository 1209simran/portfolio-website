import React, { Component } from "react";
import Particles from "react-particles-js";
import "../css/about.css";
class e extends Component {
  render() {
    return (
      <div>
        <Particles
          canvasClassName="example"
          height="1020px"
          width="3000px"
          params={{
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: "white",
                  blur: 10
                }
              },
              number: {
                value: 150
              },
              size: {
                value: 3
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                }
              }
            }
          }}
        />
      </div>
    );
  }
}
export default e;
