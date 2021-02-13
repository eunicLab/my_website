import React from 'react';
import '../App.css';

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
                <div className='card__side card__side--front card__side--front-3'>
                  <div className='card__picture card__picture--3'>&nbsp;</div>

                  <div className='card__heading'>
                    <span className='card__heading-span--3'>
                      Fortune Online store
                    </span>
                  </div>
                  <div className='card__details'>
                    <ul>
                      <li>Angular</li>
                      <li>Typescript</li>
                      <li>HTML & CSS</li>
                    </ul>
                  </div>
                </div>
                <div className='card__side card__side--back card__side--back-3'>
                  <div className='card__cta'>
                    <div className='card__box'>
                      <div className='card__description'>
                        <p>An e-commerce website </p>
                      </div>
                    </div>
                    <a
                      //href='#popup-3'
                      className='btn btn--white demo'
                      data-toggle='modal'
                      data-target='#myModal1'>
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class='modal' id='myModal1'>
              <div class='modal-dialog'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h3 class='modal-title'>Fortune Online Store</h3>
                    <button type='button' class='close' data-dismiss='modal'>
                      &times;
                    </button>
                  </div>

                  <div class='modal-body'>
                    <img
                      src={
                        'https://drive.google.com/uc?export=view&id=1aulO8mnmNzD9dOk1tBOBMNmpcB1-Fy6k'
                      }
                      alt='Demo of Docsite'
                      class={'popup__img'}
                    />
                  </div>

                  <div class='modal-footer'>
                    <a
                      href='https://github.com/eunicLab/fortune'
                      class='btn popup__btn-3 button-Margin'>
                      Source Code
                    </a>
                    <a
                      href='https://fortune-euniclab.netlify.app/'
                      class='btn popup__btn-3'>
                      Launch App
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-1-of-3'>
              <div className='card'>
                <div className='card__side card__side--front card__side--front-1'>
                  <div className='card__picture card__picture--1'>&nbsp;</div>

                  <h4 className='card__heading'>
                    <span className='card__heading-span--1'>IShopSmart</span>
                  </h4>
                  <div className='card__details'>
                    <ul>
                      <li>React Native</li>
                      <li>Redux</li>
                      <li>Javascript</li>
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
                    <a
                      //href='#popup-6'
                      className='btn btn--white demo'
                      data-toggle='modal'
                      data-target='#myModal2'>
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class='modal' id='myModal2'>
              <div class='modal-dialog'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h3 class='modal-title'>IShopSmart</h3>
                    <button type='button' class='close' data-dismiss='modal'>
                      &times;
                    </button>
                  </div>

                  <div class='modal-body'>
                    <img
                      src={
                        'https://drive.google.com/uc?export=view&id=1-PbI0AOsvHJS5dRGyexPu18GsM5C0gnW'
                      }
                      alt='Demo of ishopsmart app'
                      class={'popup__imgishopsmart'}
                    />
                  </div>

                  <div class='modal-footer'>
                    <a
                      href='https://github.com/eunicLab/ishopsmart'
                      class='btn popup__btn-6 button-Margin'>
                      Source Code
                    </a>
                    <a
                      href='https://play.google.com/store/apps/details?id=com.euniclab.ishopsmart'
                      class='btn popup__btn-6'>
                      Launch App
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-1-of-3'>
              <div className='card'>
                <div className='card__side card__side--front card__side--front-2'>
                  <div className='card__picture card__picture--6'>&nbsp;</div>

                  <div className='card__heading'>
                    <span className='card__heading-span--6'>
                      Weight Tracker
                    </span>
                  </div>
                  <div className='card__details'>
                    <ul>
                      <li>Javascript</li>
                      <li>React</li>
                      <li>HTML & CSS</li>
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
                    <a
                      className='btn btn--white demo'
                      data-toggle='modal'
                      data-target='#myModal3'>
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class='modal' id='myModal3'>
              <div class='modal-dialog'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h3 class='modal-title'>Weight Tracker</h3>
                    <button type='button' class='close' data-dismiss='modal'>
                      &times;
                    </button>
                  </div>

                  <div class='modal-body'>
                    <img
                      src={
                        'https://drive.google.com/uc?export=view&id=15Vur7KADO9ZkISQEPj35A6fhHwpSzL2x'
                      }
                      alt='Demo of weight tracker app'
                      class='popup__img'
                    />
                  </div>

                  <div class='modal-footer'>
                    <a
                      href='https://github.com/eunicLab/weight_tracker'
                      class='btn popup__btn-5 button-Margin'>
                      Source Code
                    </a>
                    <a
                      href='https://weight-tracker-euniclab.netlify.app/'
                      class='btn popup__btn-5'>
                      Launch App
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-1-of-3'>
              <div className='card'>
                <div className='card__side card__side--front card__side--front-2'>
                  <div className='card__picture card__picture--2'>&nbsp;</div>

                  <div className='card__heading'>
                    <span className='card__heading-span--2'>
                      Dress for the Weather
                    </span>
                  </div>
                  <div className='card__details'>
                    <ul>
                      <li>Javascript</li>
                      <li>React</li>
                      <li>HTML & CSS</li>
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
                    <a
                      //href='#popup-1'
                      className='btn btn--white demo'
                      data-toggle='modal'
                      data-target='#myModal4'>
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class='modal' id='myModal4'>
              <div class='modal-dialog'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h3 class='modal-title'>Dress for the Weather</h3>
                    <button type='button' class='close' data-dismiss='modal'>
                      &times;
                    </button>
                  </div>

                  <div class='modal-body'>
                    <img
                      src={
                        'https://drive.google.com/uc?export=view&id=1h0JKeHw4FgY7GNTDhxFCDEkDwJM-6VZD'
                      }
                      alt='Demo of dress for the weather app'
                      className={'popup__img'}
                    />
                  </div>

                  <div class='modal-footer'>
                    <a
                      href='https://github.com/eunicLab/dress_for_the_weather'
                      class='btn popup__btn-2 button-Margin'>
                      Source Code
                    </a>
                    <a
                      href='https://dress-for-the-weather-euniclab.netlify.app/'
                      class='btn popup__btn-2'>
                      Launch App
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-1-of-3 single-col'>
              <div className='card'>
                <div className='card__side card__side--front card__side--front-4'>
                  <div className='card__picture card__picture--4'>&nbsp;</div>

                  <h4 className='card__heading'>
                    <span className='card__heading-span--4'>Treasure Hunt</span>
                  </h4>
                  <div className='card__details'>
                    <ul>
                      <li>Javascript</li>
                      <li>React</li>
                      <li>HTML & CSS</li>
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
                    <a
                      //href='#popup-4'
                      className='btn btn--white demo'
                      data-toggle='modal'
                      data-target='#myModal5'>
                      DEMO
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class='modal' id='myModal5'>
              <div class='modal-dialog'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h4 class='modal-title'>Treasure Hunt</h4>
                    <button type='button' class='close' data-dismiss='modal'>
                      &times;
                    </button>
                  </div>

                  <div class='modal-body'>
                    <img
                      src={
                        'https://drive.google.com/uc?export=view&id=1SwpaEhpKSYcZKetOVKa4JKfVsbVxXEMQ'
                      }
                      alt='Demo of treasure hunt game'
                      class={'popup__img'}
                    />
                  </div>

                  <div class='modal-footer'>
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
                </div>
              </div>
            </div>

            <div className='col-1-of-3 single-col'>
              <div className='card'>
                <div className='card__side card__side--front card__side--front-5'>
                  <div className='card__picture card__picture--5'>&nbsp;</div>

                  <h5 className='card__heading'>
                    <span className='card__heading-span--5'>Tic Tac Toe</span>
                  </h5>
                  <div className='card__details'>
                    <ul>
                      <li>Javascript</li>
                      <li>React</li>
                      <li>HTML & CSS</li>
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
                    <a
                      //href='#popup-2'
                      className='btn btn--white demo'
                      data-toggle='modal'
                      data-target='#myModal6'>
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class='modal' id='myModal6'>
              <div class='modal-dialog'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h3 class='modal-title'>Tic Tac Toe</h3>
                    <button type='button' class='close' data-dismiss='modal'>
                      &times;
                    </button>
                  </div>

                  <div class='modal-body'>
                    <img
                      src={
                        'https://drive.google.com/uc?export=view&id=11iosWVEXNMuVAuvLPXsMTlY2zn1QkAa1'
                      }
                      alt='Demo of tic-tac-toe game'
                      className={'popup__img'}
                    />
                  </div>

                  <div class='modal-footer'>
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
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Projects;
