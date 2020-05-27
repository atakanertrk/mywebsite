import React from 'react';
import './Projects.css';

function Projects() {
  return (
  	<div id="projects">
	    <div className="ProjectsDiv">

		    <div className="Project">
		    <h2 className="description">ReactJS + asp.net core web api</h2>
		    <a href="https://github.com/atakanertrk/reactjs-basic-template" target="_blank">
		    <img src={process.env.PUBLIC_URL + '/notebookreact.png'} alt="notebookproject"/>
		    </a>
		    </div>

	    </div>
    </div>
  );
}

export default Projects;