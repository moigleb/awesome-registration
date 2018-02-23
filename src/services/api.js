import axios from "axios";

export const makeRequestSignin = (email, password) => {
  const URL = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDLKXk0n2O38AWd_CdvvPbRVZgC6DP8KMI";
  return axios.post(URL, {email, password})
    .then(response=>response.data.idToken)
};

export const makeRequestSignup = (email, password) => {
  const URL = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDLKXk0n2O38AWd_CdvvPbRVZgC6DP8KMI";
  return axios.post(URL, {email, password})
      .then(response => response)

  };
