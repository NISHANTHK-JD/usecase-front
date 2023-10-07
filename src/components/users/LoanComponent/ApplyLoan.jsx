import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Loan } from "../../../service/Loan";

function ApplyLoan() {

  async function loanSubmit(event) {
    event.preventDefault();

    const loan = {
      loanId: event.target.loanId.value,
      loanType: event.target.loanType.value,
      loanAmount: event.target.loanAmount.value,
      date: event.target.date.value,
      rateOfInterest: event.target.rateOfInterest.value,
      durationOfLoan: event.target.durationOfLoan.value,
      userid: event.target.userid.value,
    };

    try {
      const loanResponse = await Loan.applyLoan(loan);
      localStorage.setItem("data", loanResponse.data);
      // navigate("/loan");
    } catch (error) {
      console.log("err", error);
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="Loan-container">
        <h1>Apply Loan</h1>
        <br></br>
        <Form onSubmit={loanSubmit}>
          <Row className="mb-3">

            <Form.Group as={Col} controlId="formGridLoanAmount">
              <Form.Label>LoanAmount</Form.Label>
              <Form.Control type="loanAmount" placeholder="LoanAmount" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLoanType">
              <Form.Label>LoanType</Form.Label>
              <Form.Select defaultValue="Select">
            <option value="personalLoan">Personal Loan</option>
            <option value="educationLoan">Education Loan</option>
          </Form.Select>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              {/* <Form.Select defaultValue="Select">
                <option>...</option>
                <option>...</option>
              </Form.Select> */}
              <Form.Control type="state" placeholder="Enter State" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ApplyLoan;
