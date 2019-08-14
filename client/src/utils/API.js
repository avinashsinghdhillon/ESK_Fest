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

  // //check this logic....I think it might be totally wrong
  // saveEventsListItem: function (req, res){
  //   return axios.put("/save", {userID: req.user})
  // },

  saveEventToItinerary: function(req, res){
    return axios.post("/saveEventToItinerary", {userID: req.userID, eventID: req.eventID})
  },

  findEventById: function(req, res){
    return axios.get("/findEventById", {userID: req.userID})
  },

  deleteItinerary: function(req, res){
    return axios.post("/deleteItinerary", {userID: req.userID})
  },

  getUserItineraries: function(req, res){
    return axios.get("/getUserItineraries", {userID: req.userID})
  }

  // signInUser: function (req) {
  //     console.log("signin user: ", req);
  //     return axios.post ( "/users/signin", req[0], req[1])
  // },
  // signOut: function (req) {
  //   console.log("signout: ", req);
  //   return axios.post ( "/users/signout", req)
// }
  
};
