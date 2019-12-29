import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import { connect } from "react-redux";

const DisplayCard = props => {
  console.log(props);

  return (
    <div>
      {props.goat ? (
        <Card>
          <CardBody>
            <CardTitle>Check out this random goat!</CardTitle>
            <CardSubtitle>Yup. A Goat.</CardSubtitle>
          </CardBody>
          <img
            width="100%"
            src="http://placegoat.com/285/285"
            alt="Card image cap"
            className="Images"
          />
        </Card>
      ) : (
        <Card>
          <CardBody>
            <CardTitle>
              {props.name ? props.name : "Enter Name Above"}
            </CardTitle>
            <CardSubtitle>
              {props.age ? props.age : "I bet I'll be right!"}
            </CardSubtitle>
          </CardBody>
          <img
            width="100%"
            src={
              props.name
                ? `https://api.adorable.io/avatars/285/` + props.name
                : "https://api.adorable.io/avatars/285/.png"
            }
            alt="Card image cap"
            className="Images"
          />
        </Card>
      )}
    </div>
  );
};

export default DisplayCard;
