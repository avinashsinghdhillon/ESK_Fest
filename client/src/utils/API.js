import axios from "axios";

export default{
    //get all events
    getEvents: function() {
        console.log("getEvents from API.js");
        return axios.get("/api/events")
    }
}