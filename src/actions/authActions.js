import { AUTH_ERROR, AUTH_USER, FETCH_MESSAGE, UNAUTH_USER, START_LOADING } from "../actionTypes/actionTypes";
import { makeRequestSignin, makeRequestSignup } from "../services/api";

export const signinUser = ({ email, password }) => {
  return async dispatch => {
    try {
      dispatch(startLoading());
      const request = await makeRequestSignin(email, password);
      dispatch(authenticated());
      localStorage.setItem('token', request);

      console.log(request, "token sign in")
    } catch (error) {
      dispatch(authError('Bad Login Info'));
      // console.log(error.error);
    }
  };
};

const startLoading = () => {
  return {
    type: START_LOADING
  }
};

export const signupUser = ({ email, password }) => {
  return async dispatch => {
    try {
      dispatch(startLoading());
      const request = await makeRequestSignup(email, password);
      dispatch(authenticated());
      localStorage.setItem('token', request);
      console.log(request, "token sign up")
    } catch(response) {
      dispatch(authError(response.response.data.error.message));
      console.log(response.response.data.error.message)
    }
  }
};

export const authenticated = () => {
  return {
    type: AUTH_USER
  };
};

const authError = (error) => {
  return {
    type: AUTH_ERROR,
    error
  }
};

export const signoutUser = () => {
  localStorage.clear();
  console.log("signoutUser")
  return {
    type: UNAUTH_USER
  };
};

