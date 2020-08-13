import React from "react";
import "../scss/main.scss";
import PCservice from "../assets/PCservice.png";
import pclogo from "../assets/pclogo.png";

class App extends React.Component{

  render(){
    let mainStyle = {
      backgroundImage: `url(${PCservice})`
    }
    return(
      <div id="main-container" style={mainStyle}>
        <nav>
          <a href="#">HOME</a>
          <a href="#">MENU</a>
          <a href="#">RESTAURANT</a>
          <span id="portland-logo">
            <img src={pclogo} />
          </span>
          <a href="#">CONTACT</a>
          <a href="#">EVENTS</a>
        </nav>
        <h2 id="tagline">
          WE ARE OPEN FOR DINE IN AND TAKE OUT!
        </h2>
      </div>
    )
  }
}

export default App;