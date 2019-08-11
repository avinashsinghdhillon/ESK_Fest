import React from 'react';

export default (props) => 
    <div className="cardInfo">
        <h2 style={{backgroundColor:"#137ad6", color:"white", padding:"10px", borderRadius:"5px"}}>{props.name}</h2><hr/>
        {/* <h2 style={{backgroundColor:"#137ad6", color:"white", padding:"10px", borderRadius:"5px"}}>{props.name}</h2><hr/> */}
        <h3 style={{backgroundColor:"#137ad6", color:"white", padding:"5px", borderRadius:"5px"}}>Playing At:</h3>
        <div className="moreInfo">
            <div className="moreEventInfo">
                <h4 style={{color: "#137ad6"}}>Friday September 13, 2019</h4>
                <p style={{color: "#333"}}>Antone's Record Shop</p>
                <p style={{color: "#333"}}>8:00 - 9:00 PM</p>
            </div>
            <div className="moreEventInfo">
                <h4 style={{color: "#137ad6"}}>Saturday September 14, 2019</h4>
                <p style={{color: "#333"}}>Antone's Record Shop</p>
                <p style={{color: "#333"}}>8:00 - 9:00 PM</p>
                <hr/>
                <p style={{color: "#333"}}>Antone's Record Shop</p>
                <p style={{color: "#333"}}>8:00 - 9:00 PM</p>
                <hr/>
                <p style={{color: "#333"}}>Antone's Record Shop</p>
                <p style={{color: "#333"}}>8:00 - 9:00 PM</p>
            </div>
            <div className="moreEventInfo">
                <h4 style={{color: "#137ad6"}}>Sunday September 15, 2019</h4>
                <p style={{color: "#333"}}>Antone's Record Shop</p>
                <p style={{color: "#333"}}>8:00 - 9:00 PM</p>
                <hr/>
                <p style={{color: "#333"}}>Antone's Record Shop</p>
                <p style={{color: "#333"}}>8:00 - 9:00 PM</p>
            </div>
        </div>
        <hr/>
        <div className="media">
            <iframe src={props.spotify} width="300" height="315" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe width="560" height="315" src={props.youtube} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    </div>;