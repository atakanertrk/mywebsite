import React from 'react';
import './About.css';

function About() {
  return (
  	<div id="about">
	  	<div className="AboutDiv" >
		  	<h1 className="Header">About Me</h1>
		    <div className="About">
		    	I was born in Eskişehir and lived there until my university education. After graduating from Salih Zeki Anatolian High School in 2017, I started Trakya University Computer Engineering.
				Being able to use in real life what I have learned and creating works that others can benefit from represents my main source of motivation.
		    </div>
	    </div>
	    <div className="GoTop">
	    	<a href="#">^</a>
	    </div>
    </div>
  );
}

export default About;
