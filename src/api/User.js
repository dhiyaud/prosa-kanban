import axios from "axios";

export default {
  getAll() {
    return axios.get("https://reqres.in/api/users");
  }
};
