import axios from "axios";

//this gets one user that matches the email
export default {
  //get all events
  getEvents: function () {
    console.log("getEvents from API.js");
    return axios.get("/events")
  },

  getEventsByDay:function () {
    console.log("getEventByDay from API.js");
    return axios.get("/eventsByDay")
  },

  getArtists: function () {
    console.log("getEvents from API.js");
    return axios.get("/artists")
  },
  getVenues: function () {
    console.log("getEvents from API.js");
    return axios.get("/venues")
  },
  getUserByEmail: function (query) {
    return axios.post("/users/checkEmail", { email: query });
  },

  // signInUser: function (req) {
  //     console.log("signin user: ", req);
  //     return axios.post ( "/users/signin", req[0], req[1])
  // },
  // signOut: function (req) {
  //   console.log("signout: ", req);
  //   return axios.post ( "/users/signout", req)
// }
  
};
