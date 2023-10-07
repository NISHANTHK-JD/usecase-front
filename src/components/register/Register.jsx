import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Register.css";
// import { useNavigate } from "react-router-dom";
// import { Register } from "../../service/Register";
import { useState } from "react";

const RegisterIt = () => {
  // const navigate = useNavigate();
  const [isRegistered, setIsregistered] = useState(false);

  async function RegisterSubmit(event) {
    event.preventDefault();

    // const register = {
    //   name: event.target.name.value,
    //   username: event.target.username.value,
    //   password: event.target.password.value,
    //   email: event.target.email.value,
    //   address: event.target.address.value,
    //   pan: event.target.pan.value,
    //   contactNumber: event.target.contactNumber.value,
    //   country: event.target.country.value,
    //   accounttype: event.target.accounttype.value,
    //   dob: event.target.dob.value,
    // };

    try {
      // const RegisterResponse = await Register.registerUser(register);   
      // localStorage.setItem("data", RegisterResponse.data);
      setIsregistered(true);
    } catch (error) {
      console.log("err", error);
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="Register-container">
        <h1>Register</h1>
        <br></br>
        <Form onSubmit={RegisterSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>name : </Form.Label>
            <div className="input">
              <Form.Control type="name" name="name" placeholder="name" />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Label>Username : </Form.Label>
            <div className="input">
              <Form.Control
                type="username"
                name="username"
                placeholder="username"
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password : </Form.Label>
            <div className="input">
              <Form.Control
                type="password"
                name="password"
                placeholder="password"
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email : </Form.Label>
            <div className="input">
              <Form.Control type="email" name="email" placeholder="email" />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Address : </Form.Label>
            <div className="input">
              <Form.Control
                type="address"
                name="address"
                placeholder="address"
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPan">
            <Form.Label>Pan : </Form.Label>
            <div className="input">
              <Form.Control type="pan" name="pan" placeholder="pan" />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicContactNumber">
            <Form.Label>ContactNumber : </Form.Label>
            <div className="input">
              <Form.Control
                type="contactNumber"
                name="contactNumber"
                placeholder="contactNumber"
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCountry">
            <Form.Label>Country : </Form.Label>
            <div className="input">
              <Form.Control
                type="country"
                name="country"
                placeholder="country"
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAccountType">
            <Form.Label>AccountType : </Form.Label>
            <div className="input">
              <Form.Control type="accounttype" name="accounttype" placeholder="accounttype" />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDOB">
            <Form.Label>DateOfBirth : </Form.Label>
            <div className="input">
              <Form.Control type="dob" name="dob" placeholder="dob" />
            </div>
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      {isRegistered ? (
        <div className="alert alert-success">Saved Successfully!</div>
      ) : (
        ""
      )}
      </div>
    </div>
  );
};

export default RegisterIt;

// private int userId;
// 	private String name;
// 	private String username;
// 	private String password;
// 	private String address;
// 	private String pan;
// 	private Long contactNumber;
// 	private String country;
// 	private String email;
// 	private String accounttype;
// 	private Date dob;
