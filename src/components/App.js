import React from "react";
import "../scss/main.scss";
import PCservice from "../assets/PCservice.png";
import pclogo from "../assets/pclogo.png";

class App extends React.Component{

  render(){
    
    return(
      <div id="landing-page">
        <div id="header">
          <div id="header-photo-wrapper">
            <img id="restaurant-photo" src={PCservice} />
          </div>
          <nav>
            <div id="nav-group-left">
              <a href="#">HOME</a>
              <a href="#">MENU</a>
              <a href="#">RESTAURANT</a>
            </div>
            <span id="nav-group-logo">
              <img src={pclogo} />
            </span>
            <div id="nav-group-right">
              <a href="#">CONTACT</a>
              <a href="#">EVENTS</a>
            </div>
          </nav>
          <h2 id="header-tag">
            WE ARE OPEN FOR DINE IN<br/>AND TAKE OUT!
          </h2>
        </div>
      </div>
    )
  }
}

export default App;