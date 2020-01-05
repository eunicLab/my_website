import React from 'react';
import './App.css';
import Logo from './EN-logo.png'
import linkedin from './linkedin.png'
import github from './github.png'
import mail from './Mail-icon.png'

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
                       <a href="mailto:eunicenaija2015@gmail.com" className="footer__link"><img src={mail} className="icon"/></a>
                         </li>

                        <li className="footer__item">
                            <a href="https://www.linkedin.com/in/eunice-nnaji-7b8090122/" className="footer__link"><img src={linkedin} className="icon"/></a>
                        </li>
                        <li className="footer__item">
                            <a href="https://github.com/eunicLab" className="footer__link"><img src={github} className="icon2"/></a>
                        </li>

                         

                    </ul>
                </div>
            </div>
            <div class="col-1-of-2">
                <p class="footer__copyright">
                    Powered By 
                    <a href="https://github.com/eunicLab" className="designerText"> EunicLab</a>
                </p>
            </div>
        </div>
    </footer>

		</div>
		)
}

export default Footer