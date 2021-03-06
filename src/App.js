import React, { useState, useEffect } from 'react';
import './App.css';
import Blog from './components/Blog';
import Admin from './components/Admin';
import Post from './components/Post';
import LoginPage from './components/LoginPage';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { sendStuffData } from './actions';
import Portfolio from './components/Portfolio';

let App = () => {
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
        <Route exact path='/Blog' component={Blog} />
        <Route exact path='/LoginPage' component={LoginPage} />
        <Route exact path='/Admin' component={Admin} />
        {routeComponents}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
