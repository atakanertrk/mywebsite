import React from 'react';
import './Projects.css';

function Projects() {
	return (
		<div id="projects">

		   <h3 className="projectsGeneralText">Click to open the related project's github page</h3>

			<div className="ProjectsDiv">
				<div className="Project">
					<h2 className="description">ReactJS + asp.net core web api</h2>
					<a href="https://github.com/atakanertrk/reactjs-basic-template" target="_blank">
						<img src={process.env.PUBLIC_URL + '/notebookreact.png'} alt="notebookproject" />
					</a>
				</div>

				<div className="Project">
					<h2 className="description">ASP.NET Core MVC product management website</h2>
					<a href="https://github.com/atakanertrk/CiftlikUrunleriSatisDemoWeb" target="_blank">
						<img src={process.env.PUBLIC_URL + '/onurshop.png'} alt="productmanagementproject" />
					</a>
				</div>

			</div>
		</div>
	);
}

export default Projects;