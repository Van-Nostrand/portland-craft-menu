import React from "react";

const LandingPage = (props) => {

  return(
    <div id="landing-page">
      <div id="header">
        <div id="header-photo-wrapper">
          <img id="restaurant-photo" src={props.background} />
        </div>
        <nav>
          <div id="nav-group-left">
            <a href="#">HOME</a>
            <a href="#">MENU</a>
            <a href="#">RESTAURANT</a>
          </div>
          <span id="nav-group-logo">
            <img src={props.logo} />
          </span>
          <div id="nav-group-right">
            <a href="#">CONTACT</a>
            <a href="#">EVENTS</a>
          </div>
        </nav>
        <h2 id="header-tag">
          WE ARE OPEN FOR DINE IN<br/>AND TAKE OUT!!
        </h2>
      </div>

      <div id="mid-section">
        <div id="mid-button-wrapper">
          <a href="#">TAKE OUT & DELIVERY MENU</a>
        </div>
      </div>

      <div id="footer">

      </div>
    </div>
  )
}

export default LandingPage;