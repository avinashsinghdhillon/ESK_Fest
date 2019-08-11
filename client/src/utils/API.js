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
  getUserByEmail: function (query) {
    return axios.post("/users/checkEmail", { email: query });
  },

  createUserAccount: function (query) {
    console.log("In API.js/createUser. query: ", query);
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

  signInUser: function (req) {
      console.log("signin user: ", req);
      return axios.post ( "/users/signin", req[0], req[1])
  }
  
};
