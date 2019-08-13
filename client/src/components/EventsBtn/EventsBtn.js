import React from "react";
import "./EventsBtn.css";

const EventsBtn = props => (
  <button className={`book-btn btn btn-${props.btntype} btn-sm`} {...props}>
    {props.children}
  </button>
);

export default EventsBtn;
