import React, { useState, useEffect } from 'react';
import '../App.css';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';
import Blog from './Blog';
import Admin from './Admin';
import Post from './Post';
import LoginPage from './LoginPage';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import { sendStuffData } from '../actions';

let Portfolio = () => {
  const [allBlogPosts, setAllBlogPosts] = useState([]);
  const stuffData = useSelector((state) => state.stuffData);
  const dispatch = useDispatch();
  useEffect(() => {
    if (stuffData === '') {
      var api = 'https://mewebsitebackend.herokuapp.com/api/stuff';
      axios.get(api).then((response) => {
        setAllBlogPosts(response.data);
        dispatch(sendStuffData(response.data));
      });
    } else {
      setAllBlogPosts(stuffData);
    }
  }, []);

  let myFunction = () => {
    var x = document.getElementById('myTopnav');
    if (x.className === 'navbar') {
      x.className += ' responsive';
    } else {
      x.className = 'navbar';
    }
  };

  let myFunction2 = () => {
    var x = document.getElementById('myTopnav');
    x.className = 'navbar';
  };

  const routeComponents = allBlogPosts.map((item, key) => (
    <Route
      exact
      path={'/Blog/' + item.title}
      render={() => {
        return <Post item={item} key={item.id} />;
      }}
      key={key}
    />
  ));

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/Blog' component={Blog} />
        <Route exact path='/LoginPage' component={LoginPage} />
        <Route exact path='/Admin' component={Admin} />
        {routeComponents}
        <div>
          <div className='navbar' id='myTopnav'>
            <div>
              <a href='#home' onClick={myFunction2}>
                Home
              </a>
              <a href='#about' onClick={myFunction}>
                About
              </a>
              <a href='#skills' onClick={myFunction}>
                Skills
              </a>
              <a href='#project' onClick={myFunction}>
                Projects
              </a>
              <a href='#connect' onClick={myFunction}>
                Connnect
              </a>
              <span onClick={myFunction}>
                <Link exact to='/Blog'>
                  Blog
                </Link>
              </span>

              <a href='javascript:void(0);' class='icon' onClick={myFunction}>
                &#9776;
              </a>
            </div>
          </div>

          <div className='main'>
            <div id='home'>
              <Home images />
            </div>
            <div id='about'>
              <About />
            </div>
            <div id='skills'>
              <Skills />
            </div>
            <div id='project'>
              <Projects />
            </div>
            <div id='connect'>
              <Footer />
            </div>
          </div>
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default Portfolio;
