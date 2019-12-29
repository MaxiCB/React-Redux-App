import axios from "axios";

export const SET_NAME = "SET_NAME";
export const GET_GENDER = "GET_GENDER";
export const GET_AGE = "GET_AGE";
export const GENDER_ERROR = "GENDER_ERROR";
export const AGE_ERROR = "AGE_ERROR";
export const GENDER_FETCHING = "GENDER_FETCHING";
export const AGE_FETCHING = "AGE_FETCHING";

export const setName = name => {
  return {
    type: SET_NAME,
    payload: name
  };
};

export const getGender = name => {
  const promise = axios.get("https://api.genderize.io?name=" + name);
  return dispatch => {
    dispatch({ type: GENDER_FETCHING });
    promise
      .then(response => {
        console.log(response);
        dispatch({ type: GET_GENDER, payload: response.data.gender });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: GENDER_ERROR });
      });
  };
};

export const getAge = name => {
  const promise = axios.get("https://api.agify.io?name=" + name);
  return dispatch => {
    dispatch({ type: AGE_FETCHING });
    promise
      .then(response => {
        console.log(response.data);
        dispatch({ type: GET_AGE, payload: response.data.age });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: AGE_ERROR });
      });
  };
};
