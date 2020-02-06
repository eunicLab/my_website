import React from 'react';
import './App.css';



class Home extends React.Component{
  constructor(){
    super()
    this.handleButton=this.handleButton.bind(this)
  }


handleButton(){
}


render(){


	return(
		<div>
			<header className="header">
				<div className="header__text-box">
            		<h1 className="heading-primary">
                      <span className="heading-primary--main">Eunice Nnaji</span>
                      <span className="heading-primary--sub">Web Developer</span>
                </h1>
                <a href="#projects" className="btn btn--white btn--animated smooth-goto">See Projects</a>
              </div>
            </header>

    </div>
	)
}

}
export default Home;