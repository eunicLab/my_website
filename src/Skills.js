import React from 'react';
import './App.css';

function Skills (){
	return(
		<div>
		  <main>

			<section className="section-features">
            <div className="row">
                <div className="col-1-of-4">
                    <div className="feature-box">
                        <i className="feature-box__icon icon-basic-webpage"></i>
                        <h3 className="heading-tertiary u-margin-bottom-small">Front End</h3>
                        <p className="feature-box__text">
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3 | SASS</li>
                                <li>JavaScript</li>
                                <li>React | Redux</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="feature-box">
                        <i className="feature-box__icon icon-basic-share"></i>
                        <h3 className="heading-tertiary u-margin-bottom-small">Server</h3>
                        <p className="feature-box__text">
                            <ul>
                                <li>NodeJS</li>
                                <li>Express</li>
                                <li>Koa</li>
                                <li>Python</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="feature-box">
                        <i className="feature-box__icon icon-basic-server2"></i>
                        <h3 className="heading-tertiary u-margin-bottom-small">Database</h3>
                        <p className="feature-box__text">
                            <ul>
                                <li>PostgreSQL</li>
                                <li>mySQL</li>
                                <li>MongoDB</li>
                                <li>Cassandra</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="feature-box">
                        <i className="feature-box__icon icon-basic-cloud"></i>
                        <h3 className="heading-tertiary u-margin-bottom-small">Deployment</h3>
                        <p className="feature-box__text">
                            <ul>
                                <li>System Design</li>
                                <li>AWS ECS | SQS</li>
                                <li>Docker</li>
                                <li>Git</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </section>
      </main>

		</div>
		)
}

export default Skills;