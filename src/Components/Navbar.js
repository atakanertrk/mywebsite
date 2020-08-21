import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
  	<div>
	    <div className="Navbar">
			<a href="#about" className="Links">About</a>
			<a href="#skillsSection" className="Links">Skills</a>
	    	<a href="#projects" className="Links">Projects</a>
	    </div>
    </div>
  );
}

export default Navbar;