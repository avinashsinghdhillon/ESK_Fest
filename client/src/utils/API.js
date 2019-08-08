import axios from "axios";

//this gets one user that matches the email
export default {
  getUserByEmail: function(query) {
    return axios.get("/api/users/" + email);
  }
};
