import React from "react";
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import Menu from "./Menu";
import {NavHat} from "./NavHat";

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

  changePage = (e, page) => {
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
        <NavHat clickListener={this.changePage}/>

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