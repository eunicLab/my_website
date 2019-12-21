import React from 'react';
import './App.css';
import nodejs from './nodejs.png'
import javascript from './javascript.png'
import react from './react.png'

function Experience (){
	return(
		<div>

			<main>
        		<section className="section-about">
            		<div className="u-center-text u-margin-bottom-big">
                		<h2 className="heading-secondary">
                    		Front End Focused
                   		 <br/>With Full Stack Experience
                		</h2>
            		</div>

            		<div className="row">
               			<div className="col-1-of-2">
                    		<h3 className="heading-tertiary u-margin-bottom-small">Motivated To Produce Results</h3>
                    			<p className="paragraph">
                        		As a tenacious self-taught programmer, I use continuous iteration to produce results quickly and continuously improve products.
                    			</p>
                    		<h3 className="heading-tertiary u-margin-bottom-small">An Agile Collaborator</h3>
                    			<p className="paragraph">
                        		I have contributed to open source projects, worked on engineering teams, and always stay attuned to the newest frameworks.
                    			</p>

                		</div>
                			<div className="col-1-of-2">
                    			<div className="composition">
                        			<img src={javascript} alt="JS" className= {"composition__photo composition__photo--p1"}/>
                       				<img src={nodejs} alt="Node" className= {"composition__photo composition__photo--p3"}/>
                        			<img src={react} alt="React" className={"composition__photo composition__photo--p2"}/>
                    			</div>
                			</div>
            			</div>
            	</section>
            </main>
		</div>
	)
}

export default Experience;