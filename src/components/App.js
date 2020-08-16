import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import Menu from "./Menu";

import PCservice from "../assets/PCservice.png";
import pclogo from "../assets/pclogo.png";

class App extends React.Component{

  render(){
    
    return(
      <LandingPage background={PCservice} logo={pclogo} />
    )
  }
}

export default App;