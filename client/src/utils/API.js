import axios from "axios";

//this gets one user that matches the email
export default {
  getUserByEmail: function(query) {
    return axios.post("/users/checkEmail", { email: query});
  },

  createUserAccount: function(query) {
    console.log("In API.js/createUser. query: ", query);
    return axios.post(
      "users/signup",
      {
        userType: query.userType,
        email: query.email,
        password: query.password,
        firstName: query.fname,
        lastName: query.lname
      }
    );
  }

};
