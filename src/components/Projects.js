import React from 'react';
import '../App.css';
import shop from '../images/shop.gif';
import bizman from '../images/tracker.gif';
import chat from '../images/chat2.gif';
import avo from '../images/treasureHunter.gif';
import fire from '../images/weather.gif';
import tictac from '../images/tic.gif';
import tictactoe from '../images/tictac.gif';
import shopsmart from '../images/shopsmart.gif';
import treasureHunt from '../images/treasureHunt.gif';
import tracker from '../images/weightTracker.gif';
import docsite from '../images/docsite.gif';
import weatherApp from '../images/weatherApp.gif';

function Projects() {
  return (
    <div>
      <main>
        <section className='section-tours' id='projects'>
          <div className='u-center-text u-margin-bottom-big'>
            <h2 className='heading-secondary'>Project Portfolio</h2>
          </div>

          <div className='row'>
            <div className='col-1-of-3'>
              <div className='card'>
                <div className='card__side card__side--front card__side--front-2'>
                  <div className='card__picture card__picture--2'>&nbsp;</div>
                  <img
                    src={fire}
                    className={'card__svg-icon card__svg-icon-2'}
                    alt='A finely dressed princess'
                  />
                  <div className='card__heading'>
                    <span className='card__heading-span--2'>
                      Dress for the Weather
                    </span>
                  </div>
                  <div className='card__details'>
                    <ul>
                      <li>Html</li>
                      <li>CSS</li>
                      <li>Javascript | React</li>
                    </ul>
                  </div>
                </div>
                <div className='card__side card__side--back card__side--back-2'>
                  <div className='card__cta'>
                    <div className='card__box'>
                      <div className='card__description'>
                        <p>
                          This app helps you dress appropriately for the weather
                        </p>
                      </div>
                    </div>
                    <a href='#popup-1' className='btn btn--white btn--github'>
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-1-of-3'>
              <div className='card'>
                <div className='card__side card__side--front card__side--front-2'>
                  <div className='card__picture card__picture--6'>&nbsp;</div>
                  <img
                    src={bizman}
                    class={'card__svg-icon card__svg-icon-6'}
                    alt='A boy cycling'
                  />
                  <div className='card__heading'>
                    <span className='card__heading-span--6'>
                      Weight Tracker
                    </span>
                  </div>
                  <div className='card__details'>
                    <ul>
                      <li>Html</li>
                      <li>CSS</li>
                      <li>Javascript | React</li>
                    </ul>
                  </div>
                </div>
                <div className='card__side card__side--back card__side--back-6'>
                  <div className='card__cta'>
                    <div className='card__box'>
                      <div className='card__description'>
                        <p>
                          An App that helps you keep track of your weight,
                          helping you achieve your desired weight
                        </p>
                      </div>
                    </div>
                    <a href='#popup-5' className='btn btn--white btn--github'>
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-1-of-3'>
              <div className='card'>
                <div className='card__side card__side--front card__side--front-3'>
                  <div className='card__picture card__picture--3'>&nbsp;</div>
                  <img
                    src={chat}
                    className={'card__svg-icon card__svg-icon-3'}
                    alt='A doctor waving in front of a hospital'
                  />
                  <div className='card__heading'>
                    <span className='card__heading-span--3'>
                      Hospital Website
                    </span>
                  </div>
                  <div className='card__details'>
                    <ul>
                      <li>Html</li>
                      <li>CSS</li>
                      <li>Javascript | React</li>
                    </ul>
                  </div>
                </div>
                <div className='card__side card__side--back card__side--back-3'>
                  <div className='card__cta'>
                    <div className='card__box'>
                      <div className='card__description'>
                        <p>A cool hospital website </p>
                      </div>
                    </div>
                    <a href='#popup-3' className='btn btn--white btn--github'>
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-1-of-3 single-col'>
                <div className='card'>
                  <div className='card__side card__side--front card__side--front-4'>
                    <div className='card__picture card__picture--4'>&nbsp;</div>
                    <img
                      src={avo}
                      className={'card__svg-icon card__svg-icon-4 floating'}
                      alt='A sailor opening and closing a treasure chest'
                    />
                    <h4 className='card__heading'>
                      <span className='card__heading-span--4'>
                        Treasure Hunt
                      </span>
                    </h4>
                    <div className='card__details'>
                      <ul>
                        <li>Html</li>
                        <li>CSS</li>
                        <li>Javascript | React</li>
                      </ul>
                    </div>
                  </div>
                  <div className='card__side card__side--back card__side--back-4'>
                    <div className='card__cta'>
                      <div className='card__box'>
                        <div className='card__description'>
                          <p>find all the ships before before time out</p>
                        </div>
                      </div>
                      <a href='#popup-4' className='btn btn--white btn--github'>
                        DEMO
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-1-of-3'>
                <div className='card'>
                  <div className='card__side card__side--front card__side--front-1'>
                    <div className='card__picture card__picture--1'>&nbsp;</div>
                    <img
                      src={shop}
                      className={'card__svg-icon card__svg-icon-4 floating'}
                      alt='a spinning clock'
                    />
                    <h4 className='card__heading'>
                      <span className='card__heading-span--1'>ShopSmart</span>
                    </h4>
                    <div className='card__details'>
                      <ul>
                        <li>Html</li>
                        <li>CSS</li>
                        <li>React | Redux</li>
                      </ul>
                    </div>
                  </div>
                  <div className='card__side card__side--back card__side--back-1'>
                    <div className='card__cta'>
                      <div className='card__box'>
                        <div className='card__description'>
                          <p>An App for managing your shopping Lists</p>
                        </div>
                      </div>
                      <a href='#popup-6' className='btn btn--white btn--github'>
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-1-of-3 single-col'>
                <div className='card'>
                  <div className='card__side card__side--front card__side--front-5'>
                    <div className='card__picture card__picture--5'>&nbsp;</div>
                    <img
                      src={tictac}
                      className={'card__svg-icon card__svg-icon-5 floating'}
                      alt='Demo of tic-tac-toe game'
                    />
                    <h5 className='card__heading'>
                      <span className='card__heading-span--5'>Tic Tac Toe</span>
                    </h5>
                    <div className='card__details'>
                      <ul>
                        <li>Html</li>
                        <li>CSS</li>
                        <li>Javascript | React</li>
                      </ul>
                    </div>
                  </div>
                  <div className='card__side card__side--back card__side--back-5'>
                    <div className='card__cta'>
                      <div className='card__box'>
                        <div className='card__description'>
                          <p>X and O game to play with friends</p>
                        </div>
                      </div>
                      <a href='#popup-2' className='btn btn--white btn--github'>
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div class='popup' id='popup-1'>
        <div class='popup__content'>
          <div class='popup__left'>
            <a href='#projects'>
              <a href='#section-tours' className='popup__close'>
                &times;
              </a>
              <h3 class='heading-secondary-sm popup__header-2'>
                Dress for the Weather{' '}
              </h3>
              <img
                src={weatherApp}
                alt='Demo of dress for the weather app'
                className={'popup__img'}
              />
            </a>
            <a
              href='https://github.com/eunicLab/dress_for_the_weather'
              class='btn popup__btn-2 button-Margin'>
              Source Code
            </a>
            <a
              href='https://eloquent-cray-a3d8c9.netlify.com'
              class='btn popup__btn-2'>
              Launch App
            </a>
          </div>
        </div>
      </div>

      <div class='popup' id='popup-2'>
        <div class='popup__content'>
          <div class='popup__left'>
            <a href='#projects'>
              <a href='#section-tours' className='popup__close'>
                &times;
              </a>
              <h3 class='heading-secondary-sm popup__header-1'>Tic Tac Toe </h3>
              <img
                src={tictactoe}
                alt='Demo of tic-tac-toe game'
                className={'popup__img'}
              />
            </a>
            <a
              href='https://github.com/eunicLab/tic_tac_toe'
              class='btn popup__btn-1 button-Margin'>
              Source Code
            </a>
            <a
              href='https://euniclab.github.io/tic_tac_toe'
              class='btn popup__btn-1'>
              Launch App
            </a>
          </div>
        </div>
      </div>

      <div class='popup' id='popup-3'>
        <div class='popup__content'>
          <div class='popup__left'>
            <a href='#section-tours' className='popup__close'>
              &times;
            </a>
            <h3 class='heading-secondary-sm popup__header-3'>
              Hospital Website
            </h3>
            <a href='#projects'>
              <img src={docsite} alt='Demo of Docsite' class={'popup__img'} />
            </a>
            <a
              href='https://github.com/eunicLab/docsite'
              class='btn popup__btn-3 button-Margin'>
              Source Code
            </a>
            <a
              href='https://euniclab.github.io/docsite'
              class='btn popup__btn-3'>
              Launch App
            </a>
          </div>
        </div>
      </div>

      <div class='popup' id='popup-4'>
        <div class='popup__content'>
          <div class='popup__left'>
            <a href='#section-tours' className='popup__close'>
              &times;
            </a>
            <h3 className='heading-secondary-sm popup__header-4'>
              Treasure Hunt
            </h3>
            <a href='#projects'>
              <img
                src={treasureHunt}
                alt='Demo of treasure hunt game'
                class={'popup__img'}
              />
            </a>

            <a
              href='https://github.com/eunicLab/treasure-hunt2.0'
              className='btn popup__btn-4 button-Margin'>
              Source Code
            </a>
            <a
              href='https://euniclab.github.io/treasure-hunt2.0'
              class='btn popup__btn-4'>
              Launch App
            </a>
          </div>
          <div className='popup__right'></div>
        </div>
      </div>

      <div className='popup' id='popup-5'>
        <div className='popup__content'>
          <div className='popup__left'>
            <a href='#section-tours' className='popup__close'>
              &times;
            </a>
            <h3 class='heading-secondary-sm popup__header-5'>Weight Tracker</h3>
            <a href='#projects'>
              <img
                src={tracker}
                alt='Demo of weight tracker app'
                class='popup__img'
              />
            </a>
            <a
              href='https://github.com/eunicLab/weight-tracker'
              class='btn popup__btn-5 button-Margin'>
              Source Code
            </a>
            <a
              href='https://distracted-knuth-9fac7a.netlify.com'
              class='btn popup__btn-5'>
              Launch App
            </a>
          </div>
        </div>
      </div>

      <div class='popup' id='popup-6'>
        <div class='popup__content'>
          <div class='popup__left'>
            <a href='#section-tours' className='popup__close'>
              &times;
            </a>
            <h3 class='heading-secondary-sm popup__header-6'>ShopSmart</h3>
            <a href='#projects'>
              <img
                src={shopsmart}
                alt='Demo of shopsmart app'
                class={'popup__img'}
              />
            </a>
            <a
              href='https://github.com/eunicLab/shopsmart'
              class='btn popup__btn-6 button-Margin'>
              Source Code
            </a>
            <a href='https://ishopsmart.tk' class='btn popup__btn-6'>
              Launch App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
