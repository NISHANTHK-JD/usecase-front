import axios from "axios";

export class UpdateUser {
  static async updateUserById(user) {
    const response = await axios.post(
      "http://localhost:9000/authorization/",user);    //update endpoint
    console.log(response);
    return response;
  }
}
