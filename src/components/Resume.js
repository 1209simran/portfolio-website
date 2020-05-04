import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
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
              resumeData.education.map(item => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row work">
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
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>
              <h3>
                <center>{resumeData.skillsDescription}</center>
              </h3>
            </p>

            <div className="bars">
              <ul className="skills">
                {resumeData.skills &&
                  resumeData.skills.map(item => {
                    return (
                      <li>
                        <span
                          className={`bar-expand ${item.skillname.toLowerCase()}`}
                        ></span>
                        <em>{item.skillname}</em>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <p>
              <h3>
                <center>{resumeData.skillsDescription1}</center>
              </h3>
            </p>
            <div className="bars">
              <ul className="skills">
                {resumeData.skills1 &&
                  resumeData.skills1.map(item => {
                    return (
                      <li>
                        <span
                          className={`bar-expand ${item.skillname.toLowerCase()}`}
                        ></span>
                        <em>{item.skillname}</em>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <p>
              <h3>
                <center>{resumeData.skillsDescription2}</center>
              </h3>
            </p>
            <div className="bars">
              <ul className="skills">
                {resumeData.skills2 &&
                  resumeData.skills2.map(item => {
                    return (
                      <li>
                        <span
                          className={`bar-expand ${item.skillname.toLowerCase()}`}
                        ></span>
                        <em>{item.skillname}</em>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>

          <div className="row ">
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
          </div>
        </div>
      </section>
    );
  }
}
