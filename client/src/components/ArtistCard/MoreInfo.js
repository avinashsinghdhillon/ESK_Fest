import React from 'react';
import EventsBtn from '../EventsBtn';
import EventsList from '../EventsList/EventsList';
import EventsListItem from '../EventsList/EventsListItem';
import { Container } from '../Grid';
import API from "../../utils/API"


export default class MoreInfo extends React.Component {
  state = {
    events: []
  }
  componentDidMount(){
    API.getEvents().then((res)=>{
      console.log("in moreinfo line 15",res)
      this.setState({events:res.data})
    })
  }
  render(){
    return(
    <div className="cardInfo">
        <h2 style={{backgroundColor:"#137ad6", color:"white", padding:"10px", borderRadius:"5px"}}>{this.props.name}</h2><hr/>
        {/* <h2 style={{backgroundColor:"#137ad6", color:"white", padding:"10px", borderRadius:"5px"}}>{this.props.name}</h2><hr/> */}
        <h3 style={{backgroundColor:"#137ad6", color:"white", padding:"5px", borderRadius:"5px"}}>Playing At:</h3>
        <div className="moreInfo">
            <div className="moreEventInfo">
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
        </div>
        <hr/>
        <div className="media">
            <iframe title="spotifylink" src={this.props.spotify} width="300" height="315" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe title="youtubelink" width="560" height="315" src={this.props.youtube} frameBorder="0" allow="encrypted-media; gyroscope" allowFullScreen></iframe>
        </div>
    </div>
    )}
                  }