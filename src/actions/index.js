export const loggedIn = (detail) => {
  return {
    type: 'LOGGED_IN',
    payload: detail,
  };
};

export const sendLoginData = (detail) => {
  return {
    type: 'SEND_LOGIN_DATA',
    payload: detail,
  };
};

export const sendDisplayPost = (detail) => {
  return {
    type: 'DISPLAY_POST',
    payload: detail,
  };
};

export const sendCommentData = (detail) => {
  return {
    type: 'COMMENT_DATA',
    payload: detail,
  };
};

export const sendStuffData = (detail) => {
  return {
    type: 'STUFF_DATA',
    payload: detail,
  };
};

export const handleTopSignUpButton = () => {
  return {
    type: 'HANDLE_TOP_SIGN_UP_BUTTON',
  };
};

export const handleTopLoginButton = () => {
  return {
    type: 'HANDLE_TOP_LOGIN_BUTTON',
  };
};

export const displayLoadingImage = () => {
  return {
    type: 'LOADING',
  };
};

export const noDisplayLoadingImage = () => {
  return {
    type: 'NOT_LOADING',
  };
};

export const errorSignUpFailed = () => {
  return {
    type: 'HANDLE_SIGN_UP_FAILED',
  };
};

export const errorLoginFailed = () => {
  return {
    type: 'HANDLE_LOGIN_FAILED',
  };
};

export const errorFieldEmpty = () => {
  return {
    type: 'REQUIRED_FIELD_EMPTY',
  };
};

export const noError = () => {
  return {
    type: 'NO_ERROR',
  };
};
