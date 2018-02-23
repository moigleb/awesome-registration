import { AUTH_USER, UNAUTH_USER, FETCH_MESSAGE, AUTH_ERROR, START_LOADING } from "../actionTypes/actionTypes";

const initialState = {
  isLoading: false,
  authenticated: false,
  error: ''
};
export const authReducer = (state=initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case AUTH_USER:
      return {
        ...state,
        authenticated: true,
        isLoading: false,
        error: ""
      };
    case UNAUTH_USER:
      return {
        ...state,
        authenticated: false,
        isLoading: false
      };
    case AUTH_ERROR:
      return {
        ...state,
        authenticated: false,
        error: action.error
      };
    case FETCH_MESSAGE:
      return {
        ...state,
        isLoading: false,
        message: action.payload
      };
    default:
      return state;
  }
};
