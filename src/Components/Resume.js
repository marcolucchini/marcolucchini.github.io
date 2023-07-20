import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var resumeImageFolder = 'images/resume/';

      var education = this.props.data.education.map(function(education){
        return (
        <div key={education.school}>
          <div className="row">
            <div className="ten columns">
              <h3>{education.school}</h3>
              <p className="info">{education.degree} 
                <span>&bull;</span>
                <em className="date">
                  {education.graduated}
                </em>
              </p>
              <p>
                Major: {education.major}
                <br/>
                  Relevant Coursework: {education.relevantCoursework}
              </p>
            </div>
            <div className="two columns">
              <img src={resumeImageFolder + education.logo}/>
            </div>

          </div>
          
        </div>)
      })

      var work = this.props.data.work.map((work) => 
        (
          <div key={work.company}>
            <div className="row">
              <div className="ten columns">
                <h3>{work.company}</h3>
                <p className="info">
                  {work.title}
                  <span>&bull;</span> 
                  <em className="date">
                    {work.years}
                  </em>
                </p>
                <ul>
                  {work.description.map((point) => (
                    <li>
                      {point}
                    </li>
                  ))}           
                </ul>
              </div>
              <div className="two columns">
                <img style={{float: 'left'}} src={resumeImageFolder + work.logo}/>
              </div>
            </div>
          </div>)
        )

      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
        <div className="two columns header-col">
          <h1><span>Education</span></h1>
        </div>
        <div className="ten columns main-col">
          <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
          </div>
        </div>
      </div>


      <div className="row work">

        <div className="two columns header-col">
          <h1><span>Work</span></h1>
        </div>
        <div className="ten columns main-col">
        {work}
      </div>
    </div>



      {/* <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>
         <div className="nine columns main-col">
          <p>{skillmessage}
          </p>
          <div className="bars">
            <ul className="skills">
              {skills}
            </ul>
          </div>
			  </div>
      </div> */}
   </section>
    );
  }
}

export default Resume;
