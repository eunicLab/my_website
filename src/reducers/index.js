import { combineReducers } from 'redux';
import loggedInReducer from './loggedIn';
import firstNameReducer from './firstName';
import signUpTopReducer from './signUpTop';
import loginTopReducer from './loginTop';
import createBtnReducer from './createBtn';
import loadingImageReducer from './loadingImage';
import { reducer as formReducer } from 'redux-form';
import errorReducer from './error';
import loginDataReducer from './loginData';
import displayPostReducer from './displayPost';
import stuffDataReducer from './stuffData';
import commentDataReducer from './commentData';

const allReducers = combineReducers({
  loggedIn: loggedInReducer,
  firstName: firstNameReducer,
  signUpTop: signUpTopReducer,
  loginTop: loginTopReducer,
  createBtn: createBtnReducer,
  loadingImage: loadingImageReducer,
  error: errorReducer,
  loginData: loginDataReducer,
  displayPost: displayPostReducer,
  commentData: commentDataReducer,
  stuffData: stuffDataReducer,
  form: formReducer,
});

export default allReducers;
