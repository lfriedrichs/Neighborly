import React, { useState } from "react";
import { Card, Form, Input, Button, Error } from './AuthForm'; 

const URL = "http://localhost:3000/api/v1/create"

function CreateUser(props) {
  
  const [isError, setIsError] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function createUser() {
    fetch(URL, {
      username,
      password
    }).then(result => {
      if (result.status === 200) {
        setIsCreated(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }

  if (isCreated) {
    props.handleFormSwitch();
  }
  debugger;
  return (
    <Card>
      <Form onSubmit={() => {createUser()}}>
        <Input 
          type="username" 
          value={username} 
          placeholder="username" 
          onChange={e => {
            setUsername(e.target.value);
          }}/>
        <Input 
          type="password" 
          value={password} 
          placeholder="password" 
          onChange={e => {
            setPassword(e.target.value);
          }}/>
        <Input 
          type="passwordAgain" 
          value={passwordAgain} 
          placeholder="password again" 
          onChange={e => {
            setPasswordAgain(e.target.value);
          }}/>
        <Input 
          type="firstName" 
          value={firstName} 
          placeholder="first name" 
          onChange={e => {
            setFirstName(e.target.value);
          }}/>
        <Input 
          type="lastName" 
          value={lastName} 
          placeholder="last name" 
          onChange={e => {
            setLastName(e.target.value);
          }}/>
        <Input type="lastName" placeholder="last name" />
        <Input type="email" placeholder="email" />
        <Input type="phoneNumber" placeholder="phone number" />
        <Input type="addressLine1" placeholder="address line 1" />
        <Input type="addressLine2" placeholder="address line 2" />
        <Input type="city" placeholder="city" />
        <Input type="state" placeholder="state" />
        <Input type="zipcode" placeholder="zipcode" />
        <Button type="submit">Sign Up</Button>
      </Form>
      <Button onClick={() => {props.handleFormSwitch()}}>Need to Login?</Button>
      { isError && <Error>You must fill out all fields!</Error> }
    </Card>
  );
}

export default CreateUser;