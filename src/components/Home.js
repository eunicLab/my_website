import React, { useState, useEffect } from 'react';
import '../App.css';

let Home = () => {
  const [home, setHome] = useState('header1');

  const [textDisplay, setTextDisplay] = useState('');

  useEffect(() => {
    /*var count = 6;
    setInterval(() => {
      count === 6 ? (count = 1) : count++;
      setHome('header' + count);
    }, 3000);*/

    const texts = ['Software Developer', 'Engineer', 'Content Creator'];
    let counter = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type() {
      if (counter === texts.length) {
        counter = 0;
      }
      currentText = texts[counter];
      letter = currentText.slice(0, ++index);
      setTextDisplay(letter);
      if (letter.length === currentText.length) {
        counter++;
        index = 0;
      }
      setTimeout(type, 300);
    })();
  }, []);

  return (
    <div>
      <header className='header2'>
        <div className='header__text-box'>
          <h1 className='heading-primary'>
            <span className='heading-primary--main'>Eunice Nnaji</span>
            <span className='heading-primary--sub'>{textDisplay}</span>
          </h1>
          <a
            href='#projects'
            className='btn btn--white btn--animated smooth-goto'>
            See Projects
          </a>
        </div>
      </header>
    </div>
  );
};
export default Home;
