import React from 'react';
import './App.css';
import javascript from './javascript.png'
import react from './react.png'
import experience from './experience.png'


function Experience (){
	return(
		<div>

			<main>
        		<section className="section-about">
            		<div className="u-center-text u-margin-bottom-big">
                		<h2 className="heading-secondary">
                    		Experience 
                		</h2>
            		</div>

            		<div className="row">
               			<div className="col-1-of-2">
                    		<h3 className="heading-tertiary u-margin-bottom-small">Motivated To Produce Results</h3>
                    			<p className="paragraph">
                        		I am a passionate self-taught soft ware developer. I am always eagar to go the extra mile in delivering excellent solutions to my clients. I love what I do.<br/>
                                
                             <a href="#footer">Resume/CV</a></p>
                            <h3 className="heading-tertiary u-margin-bottom-small">An Agile Collaborator</h3>
                    			<p className="paragraph">
                        		I always stay atuned with the newest industry tools for efficient team collaboration. I enjoy working in teams, getting feedback from colleagues and sharing ideas.
                    			</p>

                		</div>
            			</div>
            	</section>

            </main>
		</div>
	)
}

export default Experience;