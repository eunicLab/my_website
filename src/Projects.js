import React from 'react';
import './App.css';
import gear from './clock.gif'
import bizman from './tracker.gif'
import chat from './chat2.gif'
import avo from './treasureHunter.gif'
import fire from './weather.gif'
import money from './tic.gif'
import Instalava from './tictac.gif'
import paywaal from './time_maxima.gif'
import plate from './treasureHunt.gif'
import tracker from './weightTracker.gif'
import docsite from './docsite.gif'
import flames from './flames.gif'
import weatherApp from './weatherApp.gif'



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
                        <div className="card__side card__side--front card__side--front-2">
                            <div className="card__picture card__picture--2">
                                &nbsp;
                            </div>
                            <img src= {fire} className={"card__svg-icon card__svg-icon-2"} alt="A finely dressed princess"/>
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






                  
                        

                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front card__side--front-2">
                            <div className="card__picture card__picture--6">
                                &nbsp;
                            </div>
                            <img src= {bizman} class= {"card__svg-icon card__svg-icon-6"} alt= "A boy cycling"/>
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
                            <img src= {chat} className= {"card__svg-icon card__svg-icon-3"} alt="A doctor waving in front of a hospital"/>
                            <div className="card__heading">
                                <span className="card__heading-span--3">
                                  Hospital Website
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
                                <img src={avo} className= {"card__svg-icon card__svg-icon-4 floating"} alt="A sailor opening and closing a treasure chest"/>
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
                                <div className="card__side card__side--front card__side--front-1">
                                    <div className="card__picture card__picture--1">
                                        &nbsp;
                                    </div>
                                <img src={gear} className = {"card__svg-icon spin"} alt="a spinning clock"/>
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

















                    <div className="col-1-of-3 single-col">
                        <div className="card">
                            <div className="card__side card__side--front card__side--front-5">
                                <div className="card__picture card__picture--5">
                                    &nbsp;
                                </div>
                                <img src={money} className= {"card__svg-icon card__svg-icon-5 floating"} alt="Demo of tic-tac-toe game"/>
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
                <a href="#section-tours" className="popup__close">&times;</a>
                <h3 class="heading-secondary-sm popup__header-2">Dress for the Weather </h3>
                    <img src = {weatherApp} alt= "Demo of dress for the weather app" className= {"popup__img"}/>
                </a>
                <a href="https://github.com/eunicLab/redeem" class="btn popup__btn-2 button-Margin">Source Code</a>
                 <a href="https://eloquent-cray-a3d8c9.netlify.com" class="btn popup__btn-2">Launch App</a>
            
            </div>
        </div>
    </div>





<div class="popup" id="popup-2">
        <div class="popup__content">
            <div class="popup__left">
                <a href="#projects">
                <a href="#section-tours" className="popup__close">&times;</a>
                <h3 class="heading-secondary-sm popup__header-2">Tic Tac Toe </h3>
                    <img src = {Instalava} alt= "Demo of tic-tac-toe game" className= {"popup__img"}/>
                </a>
                <a href="https://github.com/eunicLab/tic_tac_toe" class="btn popup__btn-2 button-Margin">Source Code</a>
                 <a href="https://euniclab.github.io/tic_tac_toe" class="btn popup__btn-2">Launch App</a>
            
            </div>
        </div>
    </div>

    <div class="popup" id="popup-3">
        <div class="popup__content">
            <div class="popup__left">
            <a href="#section-tours" className="popup__close">&times;</a>
                <h3 class="heading-secondary-sm popup__header-3">Hospital Website</h3>
                <a href="#projects">
                    <img src = {docsite} alt = "Demo of Docsite" class = {"popup__img"}/>
                </a>
                 <a href="https://github.com/eunicLab/docsite" class="btn popup__btn-3 button-Margin">Source Code</a>
                  <a href="https://euniclab.github.io/docsite" class="btn popup__btn-3">Launch App</a>
            </div>
        </div>
    </div>

    <div class="popup" id="popup-4">
        <div class="popup__content">
            <div class="popup__left">
             <a href="#section-tours" className="popup__close">&times;</a>
                <h3 className="heading-secondary-sm popup__header-4">Treasure Hunt</h3>
                <a href="#projects"><img src= {plate} alt= "Demo of treasure hunt game" class= {"popup__img"}/></a>

                <a href="https://github.com/eunicLab/treasure-hunt2.0" className="btn popup__btn-4 button-Margin">Source Code</a>
                 <a href="https://euniclab.github.io/treasure-hunt2.0" class="btn popup__btn-4">Launch App</a>

            </div>
            <div className="popup__right">
               
               
            </div>
        </div>
    </div>

    <div className="popup" id="popup-5">
        <div className="popup__content">
            <div className="popup__left">
            <a href="#section-tours" className="popup__close">&times;</a>
                <h3 class="heading-secondary-sm popup__header-5">Weight Tracker</h3>
                <a href="#projects">
            <img src={tracker} alt="Demo of weight tracker app" class="popup__img"/>
                </a>
            <a href="https://github.com/eunicLab/dress_for_the_weather" class="btn popup__btn-5 button-Margin">Source Code</a>
            <a href="https://distracted-knuth-9fac7a.netlify.com" class="btn popup__btn-5">Launch App</a>
            </div>
        </div>
    </div>



<div class="popup" id="popup-6">
        <div class="popup__content">
            <div class="popup__left1">
            <a href="#section-tours" className="popup__close">&times;</a>
                <h3 class="heading-secondary-sm popup__header-3">To Do List</h3>
                <a href="#projects">
                    <img src = {paywaal} alt = "Demo of to do list app" class = {"popup__img"}/>
                </a>
            <a href="https://github.com/eunicLab/my_to_do_app" class="btn popup__btn-3 button-Margin">Source Code</a>
             <a href="https://hopeful-wing-4328cb.netlify.com" class="btn popup__btn-3">Launch App</a>
            </div>
        </div>
    </div>



        </div>
    )
}

export default Projects;
