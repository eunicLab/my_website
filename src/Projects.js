import React from 'react';
import './App.css';
import gear from './gear.png'
import bizman from './bizman.gif'
import chat from './chat.gif'
import avo from './avo.png'
import fire from './fire.gif'
import money from './money.gif'
import Instalava from './il_demo.gif'
import paywaal from './pw_demo.gif'
import plate from './plate.gif'



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
                                    		Booking Microservice
                                		</span>
                            		</h4>
                            	<div className="card__details">
                                	<ul>
                                   	 	<li>AWS SQS</li>
                                    	<li>Docker</li>
                                    	<li>NodeJS</li>
                                   		<li>Cassandra</li>
                               		</ul>
                            	</div>
                        	</div>
                        	<div className="card__side card__side--back card__side--back-1">

                            	<div className="card__cta">

                                	<div className="card__box">
                                    	<div className="card__description">
                                        	<p>
                                            A back-end booking system, handles 1500+ requests / sec
                                        </p>
                                    </div>
                                </div>
                                <a href="https://github.com/aj-4/airbnb-booking-microsvc" className = "btn btn--white btn--github">Source Code</a>
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
                                    Elevator Live Stream
                                </span>
                            </div>
                            <div className="card__details">
                                <ul>
                                    <li>React | Redux</li>
                                    <li>CSS</li>
                                    <li>Express | NodeJS</li>
                                    <li>Tokbox API</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-6">
                            <div className="card__cta">
                                <div className="card__box">
                                    <div className="card__description">
                                        <p>
                                            Fully functional live stream app to practice elevator pitches
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
                                    Paywall Chat and Pay
                                </span>
                            </div>
                            <div className="card__details">
                                <ul>
                                    <li>React | Redux</li>
                                    <li>Socket.io</li>
                                    <li>Express | NodeJS</li>
                                    <li>PostgreSQL</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-3">
                            <div className="card__cta">
                                <div className="card__box">
                                    <div className="card__description">
                                        <p>
                                            Payment app with live messaging, notifications, friends list
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
                                        Perfect Plate
                                    </span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>React</li>
                                        <li>CSS | SASS</li>
                                        <li>Express | NodeJS</li>
                                        <li>mySQL</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-4">
                                <div className="card__cta">
                                    <div className="card__box">
                                        <div className="card__description">
                                            <p>
                                                Data populated and cached with REST API calls to USDA database
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
                                    Instalava Picture App
                                </span>
                            </div>
                            <div className="card__details">
                                <ul>
                                    <li>React | Redux</li>
                                    <li>SemanticUI</li>
                                    <li>Express | NodeJS</li>
                                    <li>PostgreSQL</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-2">
                            <div className="card__cta">
                                <div className="card__box">
                                    <div className="card__description">
                                        <p>
                                            Instagram-inspired picture app with feed, profiles, followers
                                        </p>
                                    </div>
                                </div>
                                <a href="#popup-2" className="btn btn--white btn--github">Demo</a>
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
                                        Stock Trader
                                    </span>
                                </h5>
                                <div className="card__details">
                                    <ul>
                                        <li>Django</li>
                                        <li>CSS</li>
                                        <li>Python</li>
                                        <li>Jinja</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-5">
                                <div className="card__cta">
                                    <div className="card__box">
                                        <div className="card__description">
                                            <p>
                                                Stock data pulled in real time from Yahoo Finance API
                                            </p>
                                        </div>
                                    </div>
                                    <a href="https://github.com/aj-4/stock_trader" className="btn btn--white btn--github">source code</a>
                                </div>
                            </div>
                        </div>
                    </div>


                 </div>
                 </div>


        </section>

        </main>
        


<div class="popup" id="popup-2">
        <div class="popup__content">
            <div class="popup__left">
                <a href="#projects">
                	<img src = {Instalava} alt= {"Instalava"} className= {"popup__img"}/>
                </a>
            </div>
            <div className="popup__right">
                <a href="#section-tours" className="popup__close">&times;</a>
                <h3 class="heading-secondary-sm popup__header-2">Instalava</h3>
                <h3 className="heading-tertiary u-margin-bottom-small">React, Express, PostgreSQL</h3>
                <div class="popup__text u-margin-bottom-medium">
                    <p>
                        Live feed, profile pages, followers.
                    </p>
                </div>
                <a href="https://github.com/aj-4/lawa-ig" class="btn popup__btn-2">Source Code</a>
            </div>
        </div>
    </div>

    <div class="popup" id="popup-3">
        <div class="popup__content">
            <div class="popup__left">
                <a href="#projects">
                	<img src = {paywaal} alt = {paywaal} class = {"popup__img"}/>
                </a>
            </div>
            <div className="popup__right">
                <a href="#section-tours" className="popup__close">&times;</a>
                <h3 class="heading-secondary-sm popup__header-3">Paywaal</h3>
                <h3 className="heading-tertiary u-margin-bottom-small">React, Redux, Socket.io</h3>
                <div class="popup__text u-margin-bottom-medium">
                    <p>
                        Chat, notifications, add friends. Live.
                    </p>
                </div>
                <a href="https://github.com/aj-4/hrpaymo" class="btn popup__btn-3">Source Code</a>
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
                <h3 className="heading-secondary-sm popup__header-4">Perfect Plate</h3>
                <h3 className="heading-tertiary u-margin-bottom-small">React, CSS, Express</h3>
                <div className="popup__text u-margin-bottom-medium">
                    <p>
                        Instant nutrition info for any food. Create plates.
                    </p>
                </div>
                <a href="https://github.com/aj-4/perfect-plate" className="btn popup__btn-4">Source Code</a>
            </div>
        </div>
    </div>

    <div className="popup" id="popup-5">
        <div className="popup__content">
            <div className="popup__left">
                <a href="#projects">
<img src="https://media.giphy.com/media/EBnTOYz5LFZesguqtI/giphy.gif" alt="Elevator Demo" class="popup__img"/>
                </a>
            </div>
            <div className="popup__right">
                <a href="#section-tours" className="popup__close">&times;</a>
                <h3 class="heading-secondary-sm popup__header-5">Elevator</h3>
                <h3 className="heading-tertiary u-margin-bottom-small">React, Redux, Tokbox API</h3>
                <div className="popup__text u-margin-bottom-medium">
                    <p>
                        Practice your pitch for your company or yourself. Live stream. Get immediate feedback. Watch yourself improve.
                    </p>
                </div>
                <a href="https://github.com/aj-4/elevator" class="btn popup__btn-5">Source Code</a>
            </div>
        </div>
    </div>


		</div>
	)
}

export default Projects;