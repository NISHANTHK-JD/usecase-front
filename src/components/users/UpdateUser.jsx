import React from 'react';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
// import { UpdateUser } from "../../service/UpdateUser";
import { useState } from "react";

const UpdateUserFunction = () => {

  const [isRegistered, setIsregistered] = useState(false);

  async function UpdateSubmit(event) {
    event.preventDefault();

    // const user = {
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
      // const UpdateResponse = await UpdateUser.updateUserById(user);   
      // localStorage.setItem("data", UpdateResponse.data);
      setIsregistered(true);
    } catch (error) {
      console.log("err", error);
    }
  }

  return (
    // <div>Welcome User</div>

    <div className="d-flex justify-content-center">
      <div className="Update-container">
        <h1>User Profile</h1>
        <br></br>
        <Form onSubmit={UpdateSubmit}>
          <Row className="mb-3">

            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridUserName">
              <Form.Label >UserName</Form.Label>
              <Form.Control type="username" placeholder="username" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="password" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control placeholder="name@email.com" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPan">
            <Form.Label>Pan</Form.Label>
            <Form.Control placeholder="TIURN4567" />
          </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridContactNumber">
              <Form.Label>contactNumber</Form.Label>
              <Form.Control type="contactNumber" placeholder="8767686795" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control type="country" placeholder="India"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAccountType">
              <Form.Label>AccountType</Form.Label>
              <Form.Select defaultValue="Select">
            <option value="savings">Savings</option>
            <option value="salary">Salary</option>
          </Form.Select>
            </Form.Group>
          </Row>
          <br></br>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
        {isRegistered ? (
        <div className="alert alert-success">Updated and Saved Successfully!</div>
      ) : (
        ""
      )}
      </div>
    </div>
  );
}

export default UpdateUserFunction;


