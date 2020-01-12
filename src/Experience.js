import React from 'react';
import './App.css';
import resume from './EN.pdf'
import teamwork from './team-work.png'
import passionate from './passion-icon.png'
import excellent from './excellent.png'


class Experience extends React.Component{
  constructor(){
    super()
    this.state={cvDisplay:"iframe1", buttonText:" open CV"}
    this.handleButton=this.handleButton.bind(this)
  }


handleButton(){
    if (this.state.cvDisplay==="iframe1"){
    this.setState({cvDisplay:"iframe", buttonText:"close CV"})
}

else {
        this.setState({cvDisplay:"iframe1", buttonText:"open CV"})
}

}






render(){
	return(
		<div>

			<main>
        		<section className="section-about">
            		<div className="u-center-text u-margin-bottom-big">
                		<h2 className="heading-secondary">
                    		About Eunice
                		</h2>
            		</div>

            		<div className="row">
               			<div className="col-1-of-3">
                                <img src={passionate} className="icon-images"/>
                                <div className= "textmargin">
                                 <h3 className="heading-tertiary u-margin-bottom-small">Passionate</h3>
                                 <p className="paragraph">
                                I am a passionate, front end web developer 
                                who enjoys  transforming creative ideas
                                into responsive web applications and websites.
                                </p>
                                </div>
                            </div>


                            <div className="col-1-of-3">
                                <img src={teamwork} className="icon-images"/>
                                <div className= "textmargin">
                                <h3 className="heading-tertiary u-margin-bottom-small">Agile Collaborator</h3>
                                 <p className="paragraph">
                                An excellent team player. I enjoy working in teams, getting feedback from colleagues and sharing ideas using efficient collaboration tools.
                                </p>
                                 </div>
                                </div>


                                <div className="col-1-of-3">
                                <img src={excellent} className="icon-images2"/>
                                <div className= "textmargin">
                                <h3 className="heading-tertiary u-margin-bottom-small">excellent solutions</h3>
                                 <p className="paragraph">
                                    I always stay atuned with the newest industry tools and go the extra mile to deliver excellent solutions for maximum client satisfaction.</p>
                                  </div>
                                   </div>

                                <div>
                              
                               <div className="u-center-text u-margin-bottom-big">
                              
                              <button className="btn2" onClick={this.handleButton}>{this.state.buttonText}</button>
                              
                              </div>
                              <iframe id ="mycv" className={this.state.cvDisplay} src= {resume}></iframe>
                            
                          

                            
                		</div>
            			</div>
            	</section>

            </main>
		</div>
	   )
}

}
export default Experience;