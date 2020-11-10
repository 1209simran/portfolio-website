import React, { Component } from 'react'
import '../css/about.css'
import resume from '../Simran_Gupta.pdf'
import Typewriter from 'typewriter-effect'

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#nav-wrap" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Skills
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#work">
                  Work Experience
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Projects
                </a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1>
                Hello, <br />I am {resumeData.name}.
              </h1>
              <div className="typewriter">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    deleteSpeed: 20,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('Former Intern at WhatsurSkill')

                      .pauseFor(300)
                      .deleteChars(30)
                      .typeString('Full Stack Devloper')
                      .pauseFor(300)
                      .start()
                  }}
                />
              </div>
              <h3
                style={{
                  color: '#fff',
                  fontFamily: 'sans-serif ',
                  marginTop: '20px',
                }}
              >
                Open to Internship Opportunities
              </h3>

              <ul className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank">
                          <i className={item.className}></i>
                        </a>
                      </li>
                    )
                  })}

                <hr />
                <a
                  href="https://drive.google.com/file/d/1ki1ijCoTz2Op0FWuG_3E395K77LyqMWQ/view?usp=sharing"
                  target="_blank"
                >
                  <button className="button3">Resume</button>
                </a>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </header>
      </React.Fragment>
    )
  }
}
