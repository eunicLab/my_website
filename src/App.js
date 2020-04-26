import React from 'react';
import './App.css';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import resume from './euniceNnajiResume.pdf';

class App extends React.Component {
  constructor() {
    super();
    this.state = { navbarName: 'navbar' };
    this.myFunction = this.myFunction.bind(this);
    this.myFunction2 = this.myFunction2.bind(this);
    this.downloadFunction = this.downloadFunction.bind(this);
  }

  myFunction() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'navbar') {
      x.className += ' responsive';
    } else {
      x.className = 'navbar';
    }
  }

  myFunction2() {
    var x = document.getElementById('myTopnav');
    x.className = 'navbar';
  }

  downloadFunction() {}

  render() {
    return (
      <div>
        <div className='navbar' id='myTopnav'>
          <div>
            <a href='#home' onClick={this.myFunction2}>
              Home
            </a>
            <a href='#about' onClick={this.myFunction}>
              About
            </a>
            <a href='#skills' onClick={this.myFunction}>
              Skills
            </a>
            <a href='#project' onClick={this.myFunction}>
              Projects
            </a>
            <a href='#connect' onClick={this.myFunction}>
              Connnect
            </a>
            <a href={resume} download='euniceNnajiResume'>
              Download CV
            </a>
            <a
              href='javascript:void(0);'
              class='icon'
              onClick={this.myFunction}>
              &#9776;
            </a>
          </div>
        </div>

        <div className='main'>
          <div id='home'>
            <Home images />
          </div>
          <div id='about'>
            <Experience />
          </div>
          <div id='skills'>
            <Skills />
          </div>
          <div id='project'>
            <Projects />
          </div>
          <div id='connect'>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
