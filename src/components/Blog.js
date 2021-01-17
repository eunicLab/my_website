import React, { useState, useEffect } from 'react';
import '../App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostOverview from './PostOverview.js';
import Post from './Post.js';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { sendStuffData } from '../actions';
import Portfolio from './Portfolio';

let Blog = () => {
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

  const blogPosts = allBlogPosts.map((item) => (
    <PostOverview item={item} key={item.id} />
  ));

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
        <Route exact path='/' component={Portfolio} />
        {routeComponents}

        <body className='blog'>
          <div className='blogWelcome'>Welcome to Eunice Nnaji's Blog</div>
          <div
            className={blogPosts.length === 0 ? 'blogMisson2' : 'blogMisson'}>
            Inspiring Stories, Tutorials, Tech News and... so much more
          </div>
          <div className='allBlogPosts'>{blogPosts}</div>
          <div className='copyright'>&copy; Copyright EuniceNnaji 2020</div>
        </body>
      </Switch>
    </BrowserRouter>
  );
};
export default Blog;
