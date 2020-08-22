import React, { Component } from 'react'
import '../css/experience.css'
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData
    return (
      <section id="work">
        <div className="row">
          <div className="three columns header-col">
            <h1>
              <span>Work Experience</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <ul class="timeline">
              <li class="event">
                <div className="text">
                  Web Development Intern - WhatsurSkill
                </div>
                <div style={{ marginBottom: '20px' }}>
                  February 2020 – April 2020
                </div>
                <div style={{ marginBottom: '15px' }}>
                  - Collaborated with UI designers to build interactive and
                  responsive web products using ReactJs, Redux and MaterialUI
                </div>
                <div style={{ marginBottom: '15px' }}>
                  - Built stable, maintainable and reusable ReactJS components
                  for internal use, implemented Redux flow in existing codebase
                  and integrated the REST APIs
                </div>
                <div style={{ marginBottom: '15px' }}>
                  - Deployed Progressive Web Application and pushed to
                  production
                </div>
              </li>
              <li class="event">
                <div className="text">
                  Full Stack Developer Intern - Trybotics
                </div>
                <div style={{ marginBottom: '20px' }}>
                  October 2019 – December 2019
                </div>
                <div style={{ marginBottom: '15px' }}>
                  - Refactored the code for server side rendering, improving the
                  performance by upto 90%, implemented REST APIs
                </div>
                <div style={{ marginBottom: '15px' }}>
                  - Integrated OAuth for social-login and added functionality to
                  auto-detect location using Google GeoCoding API
                </div>
                <div style={{ marginBottom: '15px' }}>
                  - Technologies Used: ReactJS, NodeJS, MongoDB, ReduxJS,
                  MaterialUI, Git, BitBucket
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}
