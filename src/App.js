import React from 'react';
import './App.css';
import Home from './Home'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import Footer from './Footer'

class App extends React.Component{
  constructor(){
    super()
    this.state={navbarName:"navbar"}
    this.myFunction=this.myFunction.bind(this)
    this.myFunction2=this.myFunction2.bind(this)
  


  }

myFunction(){
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }

}

myFunction2(){
  var x = document.getElementById("myTopnav");
    x.className = "navbar";
}


  render(){

  return (
  
    <div>
    		<div className="navbar" id= "myTopnav">
          <ul>
  				<a href="#home" onClick={this.myFunction2}>Home</a>
  				<a href="#about" onClick={this.myFunction}>About</a>
  				<a href="#skills" onClick={this.myFunction}>Skills</a>
  				<a href="#projects"onClick={this.myFunction}>Projects</a>
  				<a href="#connect" onClick={this.myFunction}>Connnect</a>
          <a href="javascript:void(0);" class="icon" onClick={this.myFunction}>&#9776;</a>
          </ul>
			</div>

		<div className ="main">
			<div id="home">
        		<Home images/>
        	</div>
        	<div id="about">
        		<Experience/>
        	</div>
        	<div id ="skills">
        		<Skills/>
        	</div>
        	<div id ="projects">
        	<Projects/>
        	</div>
        	<div id="connect">
        	<Footer/>
        	</div>

  		</div>
    </div>
   
  );
}
}

export default App;
