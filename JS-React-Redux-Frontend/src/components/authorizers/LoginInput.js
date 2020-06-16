
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { Card, Form, Input, Button, Error } from './AuthForm'; 


const URL = "127.0.0.1:3000"

function LoginInput(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  function postLogin() {
    fetch(URL, {
      userName,
      password
    }).then(result => {
      if (result.status === 200) {
        setAuthTokens(result.data);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }

  if (isLoggedIn) {
    return <Redirect to="/home" />;
  }

  return (
    <Card>
      <Form>
        <Input
          type="username"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="username"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <Button onClick={postLogin}>Sign In</Button>
      </Form>
      <Button onClick={() => {props.handleFormSwitch()}}>Need to Sign Up?</Button>
        { isError && <Error>The username or password provided were incorrect!</Error> }
    </Card>
  );
}

export default LoginInput;