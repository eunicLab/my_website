import React from 'react';
import './App.css';
import gear from './clock.gif'
import bizman from './tracker.gif'
import chat from './chat2.gif'
import avo from './treasureHunter.gif'
import fire from './weather.gif'
import money from './tic.gif'
import Instalava from './tictac.gif'
import paywaal from './ToDo.gif'
import plate from './treasureHunt.gif'
import tracker from './weightTracker.gif'
import docsite from './docsite.gif'
import flames from './flames.gif'



function Projects (){

	return(
		<div>
			<main>

			 	<section className="section-tours" id="projects">
            		<div className="u-center-text u-margin-bottom-big">
                		<h2 className="heading-secondary">
                   			 Project Portfolio
                		</h2>
            		</div>
            		<div className="row">
                		<div className="col-1-of-3">
                    		<div className="card">
                        		<div className="card__side card__side--front card__side--front-1">
                            		<div className="card__picture card__picture--1">
                                		&nbsp;
                            		</div>
                           	 	<img src={gear} className = {"card__svg-icon spin"} alt={""}/>
                            		<h4 className="card__heading">

                                		<span className="card__heading-span--1">
                                    		To Do List 
                                		</span>
                            		</h4>
                            	<div className="card__details">
                                <ul>
                                        <li>Html</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>React</li>
                                    </ul>
                            	</div>
                        	</div>
                        	<div className="card__side card__side--back card__side--back-1">

                            	<div className="card__cta">
                                <div className="card__box">
                                    <div className="card__description">
                                        <p>
                                            To Do List app helps you plan your time and get the most out of your day
                                        </p>
                                    </div>
                                </div>
                                <a href="#popup-6" className="btn btn--white btn--github">Demo</a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front card__side--front-2">
                            <div className="card__picture card__picture--6">
                                &nbsp;
                            </div>
                            <img src= {bizman} class= {"card__svg-icon card__svg-icon-6"} alt= {""}/>
                            <div className="card__heading">
                                <span className="card__heading-span--6">
                                    Weight Tracker
                                </span>
                            </div>
                            <div className="card__details">
                                <ul>
                                    <li>Html</li>
                                    <li>CSS</li>
                                    <li>React | JavaScript</li>
                                    <li>Chartjs</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-6">
                            <div className="card__cta">
                                <div className="card__box">
                                    <div className="card__description">
                                        <p>
                                            An App that helps you keep track of your weight, helping you achieve your desired weight
                                        </p>
                                    </div>
                                </div>
                                <a href="#popup-5" className="btn btn--white btn--github">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front card__side--front-3">
                            <div className="card__picture card__picture--3">
                                &nbsp;
                            </div>
                            <img src= {chat} className= {"card__svg-icon card__svg-icon-3"} alt={""}/>
                            <div className="card__heading">
                                <span className="card__heading-span--3">
                                  Hospital Website Template
                                </span>
                            </div>
                            <div className="card__details">
                                <ul>
                                        <li>Html</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>React</li>
                                    </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-3">
                            <div className="card__cta">
                                <div className="card__box">
                                    <div className="card__description">
                                        <p>
                                            A mobile friendly hospital website template
                                        </p>
                                    </div>
                                </div>
                                <a href="#popup-3" className="btn btn--white btn--github">Demo</a>
                            </div>
                        </div>
                    </div>

                </div>

               
                <div className="row">
                    <div className="col-1-of-3 single-col">
                        <div className="card">
                            <div className="card__side card__side--front card__side--front-4">
                                <div className="card__picture card__picture--4">
                                    &nbsp;
                                </div>
                                <img src={avo} className= {"card__svg-icon card__svg-icon-4 floating"} alt={""}/>
                                <h4 className="card__heading">
                                    <span className="card__heading-span--4">
                                        Treasure Hunt
                                    </span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>Html</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>React</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-4">
                                <div className="card__cta">
                                    <div className="card__box">
                                        <div className="card__description">
                                            <p>
                                                Ships are placed randomly on the board, disappear after a few seconds and player tries to find them before time out
                                            </p>
                                        </div>
                                    </div>
                                    <a href="#popup-4" className="btn btn--white btn--github">DEMO</a>
                                </div>
                            </div>
                        </div>  
                    </div>

                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front card__side--front-2">
                            <div className="card__picture card__picture--2">
                                &nbsp;
                            </div>
                            <img src= {fire} className={"card__svg-icon card__svg-icon-2"} alt={""}/>
                            <div className="card__heading">
                                <span className="card__heading-span--2">
                                   Dress for the Weather
                                </span>
                            </div>
                            <div className="card__details">
                                <ul>
                                    
                                        <li>Html</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>React</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-2">
                            <div className="card__cta">
                                <div className="card__box">
                                    <div className="card__description">
                                        <p>
                                           This app helps you dress appropriately for the weather
                                        </p>
                                    </div>
                                </div>
                                <a href="#popup-1" className="btn btn--white btn--github">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>

                    <div className="col-1-of-3 single-col">
                        <div className="card">
                            <div className="card__side card__side--front card__side--front-5">
                                <div className="card__picture card__picture--5">
                                    &nbsp;
                                </div>
                                <img src={money} className= {"card__svg-icon card__svg-icon-5 floating"} alt={""}/>
                                <h5 className="card__heading">
                                    <span className="card__heading-span--5">
                                        Tic Tac Toe
                                    </span>
                                </h5>
                                <div className="card__details">
                                    <ul>
                                        <li>Html</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>React</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-5">
                                <div className="card__cta">
                                <div className="card__box">
                                    <div className="card__description">
                                        <p>
                                            X and O game to play with friends
                                        </p>
                                    </div>
                                </div>
                                <a href="#popup-2" className="btn btn--white btn--github">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>

                 </div>
                 </div>


        </section>

        </main>
        




<div class="popup" id="popup-1">
        <div class="popup__content">
            <div class="popup__left">
                <a href="#projects">
                    <img src = {flames} alt= {"Instalava"} className= {"popup__img"}/>
                </a>
            </div>
            <div className="popup__right">
                <a href="#section-tours" className="popup__close">&times;</a>
                <h3 class="heading-secondary-sm popup__header-2">Dress for the Weather </h3>
                <h3 className="heading-tertiary u-margin-bottom-small">Html, CSS, ReactL</h3>
                <div class="popup__text u-margin-bottom-medium">
                    <p>
                      In production. Coming Soon
                    </p>
                </div>
                <a href="https://github.com/eunicLab" class="btn popup__btn-2">Source Code</a>
            </div>
        </div>
    </div>





<div class="popup" id="popup-2">
        <div class="popup__content">
            <div class="popup__left">
                <a href="#projects">
                	<img src = {Instalava} alt= {"Instalava"} className= {"popup__img"}/>
                </a>
            </div>
            <div className="popup__right">
                <a href="#section-tours" className="popup__close">&times;</a>
                <h3 class="heading-secondary-sm popup__header-2">Tic Tac Toe </h3>
                <h3 className="heading-tertiary u-margin-bottom-small">Html, CSS, ReactL</h3>
                <div class="popup__text u-margin-bottom-medium">
                    <p>
                       A fun game to play with friends.
                    </p>
                </div>
                <a href="https://github.com/eunicLab/tic_tac_toe" class="btn popup__btn-2">Source Code</a>
            </div>
        </div>
    </div>

    <div class="popup" id="popup-3">
        <div class="popup__content">
            <div class="popup__left">
                <a href="#projects">
                	<img src = {docsite} alt = {paywaal} class = {"popup__img"}/>
                </a>
            </div>
            <div className="popup__right">
                <a href="#section-tours" className="popup__close">&times;</a>
                <h3 class="heading-secondary-sm popup__header-3">Hospital Website Template</h3>
                <h3 className="heading-tertiary u-margin-bottom-small">Html, CSS, React</h3>
                <div class="popup__text u-margin-bottom-medium">
                    <p>
                        A mobile responsive hospital website template 
                    </p>
                </div>
                <a href="https://github.com/eunicLab/docsite" class="btn popup__btn-3">Source Code</a>
            </div>
        </div>
    </div>

    <div class="popup" id="popup-4">
        <div class="popup__content">
            <div class="popup__left">
                <a href="#projects"><img src= {plate} alt= {"Perfect Plate Demo"} class= {"popup__img"}/></a>
            </div>
            <div className="popup__right">
                <a href="#section-tours" className="popup__close">&times;</a>
                <h3 className="heading-secondary-sm popup__header-4">Treasure Hunt</h3>
                <h3 className="heading-tertiary u-margin-bottom-small">Html, CSS, React</h3>
                <div className="popup__text u-margin-bottom-medium">
                    <p>
                        Test your brain's ability to remember while playing a fun treasure hunt game.
                    </p>
                </div>
                <a href="https://github.com/eunicLab/treasure-hunt2.0" className="btn popup__btn-4">Source Code</a>
            </div>
        </div>
    </div>

    <div className="popup" id="popup-5">
        <div className="popup__content">
            <div className="popup__left">
                <a href="#projects">
<img src={tracker} alt="Elevator Demo" class="popup__img"/>
                </a>
            </div>
            <div className="popup__right">
                <a href="#section-tours" className="popup__close">&times;</a>
                <h3 class="heading-secondary-sm popup__header-5">Weight Tracker</h3>
                <h3 className="heading-tertiary u-margin-bottom-small">Html, CSS, React, Chartjs</h3>
                <div className="popup__text u-margin-bottom-medium">
                    <p>
                        Set a goal for your desired weight, input your current weight daily. This app plots the graph of your progress, motivating you to achieve your goal
                    </p>
                </div>
                <a href="https://github.com/eunicLab/weight-tracker2" class="btn popup__btn-5">Source Code</a>
            </div>
        </div>
    </div>



<div class="popup" id="popup-6">
        <div class="popup__content">
            <div class="popup__left">
                <a href="#projects">
                    <img src = {paywaal} alt = {paywaal} class = {"popup__img"}/>
                </a>
            </div>
            <div className="popup__right">
                <a href="#section-tours" className="popup__close">&times;</a>
                <h3 class="heading-secondary-sm popup__header-3">To Do List</h3>
                <h3 className="heading-tertiary u-margin-bottom-small">Html, CSS, React</h3>
                <div class="popup__text u-margin-bottom-medium">
                    <p>
                       Plan your activities with this to do app to get the most out of your time
                    </p>
                </div>
                <a href="https://github.com/eunicLab/my_to_do_app" class="btn popup__btn-3">Source Code</a>
            </div>
        </div>
    </div>



		</div>
	)
}

export default Projects;