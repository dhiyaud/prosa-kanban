import axios from "axios";

export default {
  getAll() {
    return axios.get("json/board-task.json");
  }
};
