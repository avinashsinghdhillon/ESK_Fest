import axios from "axios";

//this gets one user that matches the email
export default {
  //get all events
  getEvents: function () {
    console.log("getEvents from API.js");
    return axios.get("/events")
  },
  getArtists: function () {
    console.log("getEvents from API.js");
    return axios.get("/api/artists")
  },
  getVenues: function () {
    console.log("getEvents from API.js");
    return axios.get("/venues")
  },

  getAllUsers: function (query) {
    return axios.get("/users", { email: query });
  },

  getUserByEmail: function (query) {
    return axios.post("/users/checkEmail", { email: query });
  },

  createUserAccount: function (query) {
    console.log("In API.js/createUser. query: ", query);
    return axios.post(
      "/users/signup",
      {
        userType: query.userType,
        email: query.email,
        password: query.password,
        firstName: query.fname,
        lastName: query.lname
      }
    );
<<<<<<< HEAD
  },
  signIn: function (query){
    console.log("In API.js/Login User. query: ", query);
    return axios.post(
      "/signin",
      {
        email: query.email,
        password: query.password
      }
    )
  },
  logout: function (query) {
    return axios.get("/logout", { email: query });
  },
=======
  }
>>>>>>> master
};
