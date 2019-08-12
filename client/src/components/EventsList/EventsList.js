import React from "react";
import "./EventsList.css";
import "./EventsList.css";



export const EventsList = ({ children }) => {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};

export default EventsList;
