import React from 'react';
import './Skills.css';

function Skills() {
    return (
        <div id="skillsSection" className="CoverSkills">
            <h1 className="skillsHader">Programming Skills</h1>
            <div className="container">
                <h4 className="skillHeader">C# .NET</h4>
                <div className="skills a">ASP.NET Core MVC,   WEB APIs,   ClassLibrarys,   WPF</div>
            </div>
            <div className="container">
                <h4 className="skillHeader">Data Access</h4>
                <div className="skills b">Plain SQL,   Stored Procedures,   Transactions</div>
            </div>
            <div className="container">
                <h4 className="skillHeader">Web - Hosting</h4>
                <div className="skills a">ReactJS,   IIS,   Web Protocols,   Network-port Management,   Hosting</div>
            </div>
            <div className="container">
                <h4 className="skillHeader">Source Control</h4>
                <div className="skills b">Git,   Documenting</div>
            </div>
        </div>
    );
}

export default Skills;