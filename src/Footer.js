import React from 'react';
import './App.css';
import Logo from './logo-white.png'

function Footer (){
	return(
		<div>

		<footer className="footer">
        <div className="footer__logo-box">
            <a href="#top">
                <img src= {Logo} alt= {"Logo"} className= {"footer__logo smooth-goto"}/>
            </a>
        </div>
        <div className="row">
            <div className="col-1-of-2">
                <div className="footer__navigation">
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href="#" className="footer__link">GitHub</a>
                        </li>
                        <li className="footer__item">
                            <a href="https://www.linkedin.com/in/eunice-nnaji-7b8090122/" className="footer__link">LinkedIn</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-1-of-2">
                <p class="footer__copyright">
                    Site by
                    <a href= "#" class="footer__link"> Eunice NnJI </a>
                </p>
            </div>
        </div>
    </footer>

		</div>
		)
}

export default Footer