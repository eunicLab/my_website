import React from 'react';
import './App.css';
import fast from './fast.gif';

function Home (){
	return(
		<div>
			<header className="header">
				<div className="header__text-box">
            		<h1 className="heading-primary">
                      <span className="heading-primary--main">Eunice Nnaji</span>
                      <span className="heading-primary--sub">SoftWare Engineer</span>
            		</h1>
            		<a href="#projects" class="btn btn--white btn--animated smooth-goto">See Projects</a>
            	</div>
          	</header>

		</div>

	)
}

export default Home;