import React from 'react';
import '../App.css';

function Skills() {
  return (
    <div>
      <main>
        <section className='section-features'>
          <div className='row'>
            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon icon-basic-webpage'></i>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Front End
                </h3>
                <p className='feature-box__text'>
                  <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>React</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon icon-basic-share'></i>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Back End
                </h3>
                <p className='feature-box__text'>
                  <ul>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>SQLite</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon icon-basic-server2'></i>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Deployment
                </h3>
                <p className='feature-box__text'>
                  <ul>
                    <li>Git</li>
                    <li>AWS</li>
                    <li>Netlify</li>
                    <li>Heroku</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon icon-basic-cloud'></i>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Others
                </h3>
                <p className='feature-box__text'>
                  <ul>
                    <li>System Design</li>
                    <li>Redux</li>
                    <li>graphQL</li>
                    <li>Agile</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Skills;
