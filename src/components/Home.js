import React from 'react';
import '../App.css';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      home: 'header1',
    };
  }

  componentDidMount() {
    var count = 6;
    setInterval(() => {
      count === 6 ? (count = 1) : count++;
      this.setState({ home: 'header' + count });
    }, 3000);
  }

  render() {
    return (
      <div>
        <header className={this.state.home}>
          <div className='header__text-box'>
            <h1 className='heading-primary'>
              <span className='heading-primary--main'>Eunice Nnaji</span>
              <span className='heading-primary--sub'>Software Developer</span>
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
  }
}
export default Home;
