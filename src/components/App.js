import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import Menu from "./Menu";

import PCservice from "../assets/PCservice.png";
import pclogo from "../assets/pclogo.png";
import * as Scroll from "react-scroll";

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      currentPage: "home"
    }
  }

  changePage = (page) => {
    this.setState({currentPage: page});
  }

  pageSwitch = (pageName) => {
    switch(true){
      case /home/.test(pageName): return <LandingPage background={PCservice} logo={pclogo} />;
      case /menu/.test(pageName): return <Menu />;
      default: console.log("error in pageSwitch");
    }
  }

  render(){
              

    let componentToLoad = this.pageSwitch(this.state.currentPage);
    
    
    return(
      <>
        <div className="header">
          <div className="header-photo-wrapper">
            <img id="restaurant-photo" src={PCservice} />
          </div>

          <nav>
            <div id="nav-group-left">
              <Scroll.Link to="scroll-here" spy={true} smooth={true} duration={250} >
                <div onClick={() => this.changePage("home")}>
                  HOME
                </div>
              </Scroll.Link>
              <Scroll.Link to="scroll-here" spy={true} smooth={true} duration={250} >
                <div onClick={() => this.changePage("menu")}>
                  MENU
                </div>
              </Scroll.Link>
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

        </div>

        <Scroll.Element name="scroll-here" >
          <div id="scroll-anchor"></div>
        </Scroll.Element>

        <div id="lower-container">
          {componentToLoad}
            
        </div>
      </>
    )
  }
}

export default App;