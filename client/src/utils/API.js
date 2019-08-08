import axios from "axios";

//this gets one user that matches the email
export default {
  getUserByEmail: function(query) {
    console.log("In API.js. query: " + query);
    return axios.post("/users/checkEmail", { email: query});
  }
};
