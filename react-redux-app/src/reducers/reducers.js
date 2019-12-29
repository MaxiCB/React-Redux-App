import {
  SET_NAME,
  GET_GENDER,
  GENDER_ERROR,
  GENDER_FETCHING,
  GET_AGE,
  AGE_ERROR,
  AGE_FETCHING
} from "../actions/actions";

const initialState = {
  name: "",
  gender: "",
  age: "",
  fetchingGender: false,
  fetchingAge: false,
  genderError: "",
  ageError: ""
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload
      };

    case GENDER_FETCHING:
      return {
        ...state,
        fetchingGender: true
      };
    case GET_GENDER:
      return {
        ...state,
        gender: action.payload,
        fetchingGender: false
      };
    case GENDER_ERROR:
      return {
        fetchingGender: false,
        genderError: "Error guessing gender"
      };
    case AGE_FETCHING:
      return {
        ...state,
        fetchingAge: true
      };
    case GET_AGE:
      return {
        ...state,
        age: action.payload,
        fetchingAge: false
      };
    case AGE_ERROR:
      return {
        fetchingAge: false,
        ageError: "Error guessing age"
      };
    default:
      return state;
  }
};
