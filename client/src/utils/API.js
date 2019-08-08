import axios from "axios"

//add all axios routs like add, post etc....
export default {
  //get the user with the given id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  deleteUser: function (id) {
    return axios.post("/api/users/" + id);
  },
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }
}