import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import Menu from "./Menu";

import PCservice from "../assets/PCservice.png";
import pclogo from "../assets/pclogo.png";

class App extends React.Component{

  render(){
    
    return(
      <BrowserRouter>
        <div id="header-photo-wrapper">
          <img id="restaurant-photo" src={props.background} />
        </div>
        <nav>
          <div id="nav-group-left">
            <Link to="/">HOME</Link>
            <Link to="/menu">MENU</Link>
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
      
        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/">
            <LandingPage background={PCservice} logo={pclogo} />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;