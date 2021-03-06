import React from 'react';
import '../App.css';
import { FaThumbsUp } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { RiTeamFill } from 'react-icons/ri';

class Experience extends React.Component {
  constructor() {
    super();
    this.state = { cvDisplay: 'iframe1', buttonText: ' open CV' };
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton() {
    if (this.state.cvDisplay === 'iframe1') {
      this.setState({ cvDisplay: 'iframe', buttonText: 'close CV' });
    } else {
      this.setState({ cvDisplay: 'iframe1', buttonText: 'open CV' });
    }
  }

  render() {
    return (
      <div>
        <main>
          <section className='section-about'>
            <div className='u-center-text u-margin-bottom-big'>
              <h2 className='heading-secondary'>About Eunice</h2>
            </div>

            <div className='row'>
              <div className='col-1-of-3'>
                <FaHeart
                  color='black'
                  className='icon-images'
                  alt='a heart symbol signifying passion'
                />
                <div className='textmargin'>
                  <h3 className='heading-tertiary u-margin-bottom-small'>
                    Passionate
                  </h3>
                  <p className='paragraph'>
                    I am a passionate, software developer who enjoys
                    transforming creative ideas into responsive software
                    applications and websites.
                  </p>
                </div>
              </div>

              <div className='col-1-of-3'>
                <RiTeamFill
                  color='black'
                  className='icon-images'
                  alt='teamwork icon'
                />
                <div className='textmargin'>
                  <h3 className='heading-tertiary u-margin-bottom-small'>
                    Agile Collaborator
                  </h3>
                  <p className='paragraph'>
                    An excellent team player. I enjoy working in teams, getting
                    feedback from colleagues and sharing ideas using efficient
                    collaboration tools.
                  </p>
                </div>
              </div>

              <div className='col-1-of-3'>
                <FaThumbsUp
                  color='black'
                  className='icon-images'
                  alt='thumbs up icon for excellence'
                />
                <div className='textmargin'>
                  <h3 className='heading-tertiary u-margin-bottom-small'>
                    excellent solutions
                  </h3>
                  <p className='paragraph'>
                    I always stay attuned with the newest industry tools and go
                    the extra mile to deliver excellent solutions for maximum
                    client satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
export default Experience;
