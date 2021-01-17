import React from 'react';
import '../App.css';
import { Field, reduxForm } from 'redux-form';
import { useSelector, useDispatch } from 'react-redux';
import {
  handleTopSignUpButton,
  handleTopLoginButton,
  loggedIn,
  errorSignUpFailed,
  errorLoginFailed,
  errorFieldEmpty,
  noError,
  sendLoginData,
  displayLoadingImage,
  noDisplayLoadingImage,
} from '../actions';
import axios from 'axios';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Loading from './Loading.js';
import Blog from './Blog.js';

let LoginForm = (props) => {
  const signUpTop = useSelector((state) => state.signUpTop);
  const loginTop = useSelector((state) => state.loginTop);
  const firstName = useSelector((state) => state.firstName);
  const createBtn = useSelector((state) => state.createBtn);
  const logIn = useSelector((state) => state.loggedIn);
  const error = useSelector((state) => state.error);
  const loadingImage = useSelector((state) => state.loadingImage);
  const dispatch = useDispatch();

  const loginSubmit = (values) => {
    dispatch(displayLoadingImage());
    if (signUpTop === 'buttonTop') {
      if (values.email === undefined || values.password === undefined) {
        dispatch(errorFieldEmpty());
        dispatch(noDisplayLoadingImage());
      } else {
        axios
          .post('https://mewebsitebackend.herokuapp.com/api/auth/login', {
            email: values.email.toLowerCase(),
            password: values.password,
          })
          .then(
            (response) => {
              dispatch(loggedIn(true));
              dispatch(noError());
              dispatch(noDisplayLoadingImage());
              dispatch(
                sendLoginData({
                  email: values.email.toLowerCase(),
                  token: response.data.token,
                })
              );
            },
            (error) => {
              console.log('couldn not login');
              dispatch(errorLoginFailed());
              dispatch(noDisplayLoadingImage());
            }
          );
      }
    }
    if (signUpTop === 'buttonTopActive') {
      var api1 = 'https://mewebsitebackend.herokuapp.com/api/auth/signup';
      if (
        values.email === undefined ||
        values.password === undefined ||
        values.firstName === undefined
      ) {
        dispatch(errorFieldEmpty());
        dispatch(noDisplayLoadingImage());
      } else {
        axios
          .post(api1, {
            email: values.email.toLowerCase(),
            password: values.password,
          })
          .then(
            (response) => {
              axios
                .post('https://mewebsitebackend.herokuapp.com/api/auth/login', {
                  email: values.email.toLowerCase(),
                  password: values.password,
                })
                .then((response) => {
                  dispatch(loggedIn(true));
                  dispatch(noError());
                  dispatch(noDisplayLoadingImage());
                  dispatch(
                    sendLoginData({
                      email: values.email,
                      token: response.data.token,
                    })
                  );
                });
            },
            (error) => {
              console.log('couldn not login');
              dispatch(errorSignUpFailed());
              dispatch(noDisplayLoadingImage());
            }
          );
      }
    }
  };
  const { handleSubmit } = props;
  return !logIn ? (
    <BrowserRouter>
      <Switch>
        <Route exact path='/Blog' component={Blog} />
        <div>
          <div className='fullBackground'>
            <form
              onSubmit={handleSubmit(loginSubmit)}
              className='loginPageForm'>
              <span className={loadingImage}>
                <Loading />
              </span>
              <button
                className={signUpTop}
                onClick={(event) => {
                  event.preventDefault();
                  dispatch(handleTopSignUpButton());
                  dispatch(noError());
                }}>
                Sign Up
              </button>
              <button
                className={loginTop}
                onClick={(event) => {
                  event.preventDefault();
                  dispatch(handleTopLoginButton());
                  dispatch(noError());
                }}>
                Log in
              </button>
              <p className='error'>{error}</p>
              <div>
                <Field
                  name='firstName'
                  component='input'
                  type='text'
                  placeholder='First Name'
                  className={firstName}
                />
              </div>
              <div>
                <Field
                  name='email'
                  component='input'
                  type='text'
                  placeholder='Email'
                  className='email'
                />
              </div>
              <div>
                <Field
                  name='password'
                  component='input'
                  type='password'
                  placeholder='password'
                  className='password'
                />
              </div>

              <button className='btnlogin' type='submit'>
                {createBtn}
              </button>
            </form>
          </div>
        </div>
      </Switch>
    </BrowserRouter>
  ) : (
    <Redirect push to='/Admin' />
  );
};

LoginForm = reduxForm({
  form: 'loginAndSignUp',
})(LoginForm);

export default LoginForm;
