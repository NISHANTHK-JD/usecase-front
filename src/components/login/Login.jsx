import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
// import { Auth } from "../../service/Auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  async function loginSubmit(event) {
    event.preventDefault();

    // const user = {
    //   username: event.target.username.value,
    //   password: event.target.password.value,
    // };

    try {
      // const authResponse = await Auth.login(user);
      // localStorage.setItem("jwt", authResponse.data.jwttoken);
      localStorage.setItem("jwt", "uef5"); //remove
      navigate("/");
    } catch (error) {
      console.log("err", error);
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="Login-container">
        <h1>Login</h1>
        <br></br>
        <Form onSubmit={loginSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label style={{backgroundColor: "white"}}>Username</Form.Label>
            <div className="input">
              <Form.Control
                type="username"
                name="username"
                placeholder="username"
                // disabled= "true"
              />
            </div>

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{backgroundColor: "white"}}>Password</Form.Label>
            <div className="input">
              <Form.Control
                type="password"
                name="password"
                placeholder="password"
              />
            </div>
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;

