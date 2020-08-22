import React, { Component } from 'react'
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{' '}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p className="info1">{item.Achievements}</p>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
        <section id="skills">
          <div className="row">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="contain">
                <div className="columns-skills">
                  {resumeData.skills &&
                    resumeData.skills.map((item) => {
                      return (
                        <img
                          className="grid-item"
                          src={`${item.imgurl}`}
                          style={{ width: '110px', height: '110px' }}
                        />
                      )
                    })}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="row work">
          <div className="three columns header-col">
            <h1>
              Position of <span>Responsibilities</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.responsibilities &&
              resumeData.responsibilities.map(item => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <p className="info">
                        <span>&bull;</span> {item.name}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div> */}

        {/* <div className="row ">
            <div className="three columns header-col">
              <h1>
                <span>Additional Details</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              {resumeData.details &&
                resumeData.details.map(item => {
                  return (
                    <div className="row item">
                      <div className="twelve columns">
                        <p className="info">
                          <span>&bull;</span> {item.name}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div> */}
      </section>
    )
  }
}
