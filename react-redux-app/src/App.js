import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getGender, getAge, setName } from "./actions/actions";

const App = (props) => {

  const setName = (name) => {
    props.setName(name);
    fetchData(name);
  }

  const fetchData = (name) => {
    props.getGender(name);
    props.getAge(name);
  }

  return (
    <div className="App">
      <h1>Testing</h1>
      <button onClick={() => setName('Aaron')}>Click Me</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    name: "",
    gender: "",
    age: "",
    avi: "",
    goat: "",
    fethingGender: false,
    fethingAge: false,
    fethingAvi: false,
    fethingGoat: false,
    genderError: "",
    ageError: "",
    aviError: "",
    goatError: ""
  };
};

export default connect( mapStateToProps, { setName, getGender, getAge })(App);
