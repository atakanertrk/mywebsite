import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import About from './Components/About'
import Links from './Components/Links'
import Skills from './Components/Skills'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Links/>
     <About/>
     <Skills/>
     <Projects/>
     
    </div>
  );
}

export default App;
