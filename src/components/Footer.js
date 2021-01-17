import React from 'react';
import '../App.css';
import { AiOutlineMail } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

function Footer() {
  return (
    <div>
      <footer className='footer'>
        <div className='footer__logo-box'>
          <a href='#top'>
            <img
              src={
                'https://drive.google.com/uc?export=view&id=16bydpZgkSO6SJvlzmE-Tz5FXxvYIY7sZ'
              }
              alt='Logo for Eunice Nnaji'
              className={'footer__logo smooth-goto'}
            />
          </a>
        </div>
        <div className='row'>
          <div className='col-1-of-2'>
            <div className='footer__navigation'>
              <ul className='footer__list'>
                <li className='footer__item'>
                  <a
                    href='mailto:eunicennaji@hotmail.co.uk'
                    className='footer__link'>
                    <AiOutlineMail className='icon' alt='email icon' />
                  </a>
                </li>

                <li className='footer__item'>
                  <a
                    href='https://www.linkedin.com/in/eunice-nnaji-7b8090122/'
                    className='footer__link'>
                    <AiFillLinkedin className='icon' alt='Linkedin icon' />
                  </a>
                </li>
                <li className='footer__item'>
                  <a
                    href='https://github.com/eunicLab'
                    className='footer__link'>
                    <AiFillGithub className='icon' alt='github icon' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class='col-1-of-2'>
            <p class='footer__copyright'>
              Powered By
              <a href='https://github.com/eunicLab' className='designerText'>
                {' '}
                eunicLab
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
