import axios from "axios";

export class Register {
  static async registerUser(register) {
    const response = await axios.post(
      "http://localhost:8080/authorization/register",register);
    console.log(response);
    return response;
  }
}