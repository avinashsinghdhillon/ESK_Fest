import React, { Component } from "react";
import { Container } from "../Grid";
import { EventsList, EventsListItem } from "../EventsList";
import API from "../../utils/API";

class EventsResults extends Component {
  state = {
    events: [],
    locationID: "",
    noResults: false
  };

  componentDidMount() {
    const data = this.props.location.data
    if (data && data.results.length > 0) {

      this.setState({
        events: data.results.filter((value, index) => index < 10),
        locationID: "_blank"
      });
    } else {
      this.setState({
        noResults: true
      });
    }
  }

  saveEventsListItem = event => {
    API.saveEventsListItem(event)
      .then(res => {
        const currentEvents = this.state.events;
        const filterEvents = currentEvents.filter(event => event.id !== res.data.id);
        this.setState({
          events: filterEvents
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <ArtistCard />
        <Container>
          <h2>Events Results</h2>
          <EventsList>
            {this.state.events.map((event, index) => (
              <EventsListItem key={event.id}>
                <div className="events-div">
                    key={"" + index + event.id}
                    locationID={this.state.locationID}
                    {event.eventInfo.title}
                </div>
                <div className="event-btn-div">
                  <EventsBtn
                    key={"" + event.id + index}
                    btntype="info"
                    disabled={event.eventInfo === "/"}
                    onClick={() => this.saveEventsListItem({
                      eventID: event.eventInfo.title,
                      eventID: event.eventInfo.locationID,
                      eventID: event.eventInfo.startTime,
                      eventID: event.eventInfo.endTime,
                      _id: event.id
                    })}
                  >
                    SAVE
                  </EventsBtn>
                </div>
              </EventsListItem>
            ))}
          </EventsList>
        </Container>
      </div>
    );
  }
}

export default EventsResults;
