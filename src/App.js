import React from 'react';
import './App.css';
import Home from './Home'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import Footer from './Footer'

function App() {
  return (
  
    <div>
    		<div className="navbar">
  				<a href="#home">Home</a>
  				<a href="#experience">Experience</a>
  				<a href="#skills">Skills</a>
  				<a href="#projects">Projects</a>
  				<a href="#footer">Connnect</a>
			</div>

		<div className ="main">
			<div id="home">
        		<Home images/>
        	</div>
        	<div id="experience">
        		<Experience/>
        	</div>
        	<div id ="skills">
        		<Skills/>
        	</div>
        	<div id ="projects">
        	<Projects/>
        	</div>
        	<div id="footer">
        	<Footer/>
        	</div>

  		</div>
    </div>
   
  );
}

export default App;
