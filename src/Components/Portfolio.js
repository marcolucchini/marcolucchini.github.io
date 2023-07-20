import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(project){
        var projectImage = 'images/portfolio/'+project.image;
        return (
          <div key={project.title} className="row">
            <div className="four columns">
              <img alt={project.title} src={projectImage}/>
            </div>
            <div className="eight columns main-col">
              <a href={project.url}><h4>{project.title}</h4></a>
              <ul>
                {project.description.map((desc) => <li>{desc}</li>)}
              </ul>
              Tech Stack: {project.stack.map((tech) => <div className="pill" style={{marginLeft: "1em"}}>{tech}</div>)}
            </div>
          </div>
        )
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Projects</h1>

            <div id="portfolio-wrapper">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
