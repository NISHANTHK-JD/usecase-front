import axios from "axios";

export class Loan {
  static async applyLoan(loan) {
    const response = await axios.post(
      "http://localhost:8081/loan",loan); //update endpoint
    console.log(response);
    return response;
  }

  static async viewLoan(loan) {
    const response = await axios.get(
      "http://localhost:8081/loan/{id}",loan);   //update endpoint
    console.log(response);
    return response;
  }
}