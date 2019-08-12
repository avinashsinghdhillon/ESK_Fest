import axios from "axios";

//this gets one user that matches the email
export default {
  //get all events
  getEvents: function () {
    console.log("getEvents from API.js");
    return axios.get("/api/events")
  },
  getArtists: function () {
    console.log("getEvents from API.js");
    return axios.get("/api/artists")
  },
  getVenues: function () {
    console.log("getEvents from API.js");
    return axios.get("/api/venues")
  },
  getUserByEmail: function (query) {
    return axios.post("/checkEmail", { email: query });
  },

  createUserAccount: function (query) {
    console.log("In API.js/Create User. query: ", query);
    return axios.post(
      "/signup",
      {
        userType: query.userType,
        email: query.email,
        password: query.password,
        firstName: query.fname,
        lastName: query.lname
      }
    );
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
  }
};
