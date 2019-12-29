import React, { useEffect } from "react";
import { Container, Col, Row, Button, Label } from "reactstrap";

import { connect } from "react-redux";
import { getGender, getAge, setName } from "./actions/actions";
import NameForm from "./components/nameForm";
import DisplayCard from "./components/DisplayCard";

const App = props => {
  const setName = name => {
    props.setName(name);
    fetchData(name);
  };

  const fetchData = name => {
    props.getGender(name);
    props.getAge(name);
  };

  return (
    <Container className="App">
      <Row>
        <Col className="Col">
          <Label>Let me guess your age and gender from your name!</Label>
          <NameForm setName={setName} />
        </Col>
      </Row>
      <Row>
        <Col sm="6" className="Col">
          <DisplayCard {...props} />
        </Col>
        <Col sm="6" className="Col">
          <DisplayCard goat={true} />
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    name: state.name,
    gender: state.gender,
    age: state.age,
    fetchingGender: state.fetchingGender,
    fetchingAge: state.fetchingAge,
    genderError: state.genderError,
    ageError: state.ageError
  };
};

export default connect(mapStateToProps, { setName, getGender, getAge })(App);
