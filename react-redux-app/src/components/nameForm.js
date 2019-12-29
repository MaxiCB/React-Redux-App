import React from "react";
import { Button, Input, InputGroup, InputGroupAddon } from "reactstrap";

const NameForm = props => {
  let name;

  const updateName = e => {
    name = e.target.value;
  };

  const sendName = () => {
    let setName = props.setName;
    setName(name);
  };

  return (
    <InputGroup>
      <Input onChange={e => updateName(e)} />
      <InputGroupAddon addonType="append">
        <Button color="primary" onClick={() => sendName()}>
          Try!
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default NameForm;
