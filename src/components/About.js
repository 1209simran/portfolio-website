import React, { Component } from "react";
// import Particle from "../components/particle";

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
       
        <div className="row">
          {/* <div className="three columns hover01">
            <figure>
              <img className="profile-pic" src="images/profilepic.jpg" alt="" />
            </figure>
          </div> */}

          <div className="twelve columns main-col">
          {/* <Particle /> */}
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br></br>
                  <span>{resumeData.address}</span>
                  <br></br>
                  <span>
                    <a
                      href="https://portfolio-simran.herokuapp.com/"
                      style={{ color: "#7a7a7a" }}
                    >
                      {resumeData.website}
                    </a>
                  </span>
                  <br></br>
                  <span>{resumeData.Phone}</span>
                </p>
              </div>
              <div className="columns contact-details">
                <h2>Programming Handles</h2>
                <p className="address">
                  <span>Codeforces: <a
                      href="https://codeforces.com/profile/simran12"
                      style={{ color: "#7a7a7a" }}
                    >
                       codeforces.com/profile/simran12
                    </a></span>
                  <br></br>
                  <span>
                    Codechef: <a
                      href="https://www.codechef.com/users/simran72"
                      style={{ color: "#7a7a7a" }}
                    >
                     codechef.com/users/simran72
                    </a>
                  </span>
                  <br></br>
                  <span>Leetcode: <a
                      href="https://leetcode.com/1209simran/"
                      style={{ color: "#7a7a7a" }}
                    >
                      leetcode.com/1209simran
                    </a></span>
                  <br></br>
                  <span>HackerRank: <a
                      href="https://www.hackerrank.com/1209simran"
                      style={{ color: "#7a7a7a" }}
                    >
                      hackerrank.com/1209simran
                    </a></span>
                  <br></br>
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
