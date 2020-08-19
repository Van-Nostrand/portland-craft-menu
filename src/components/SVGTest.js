import React, {Component} from "react";
import gflogo from "./pc-gf-plain.svg";
// import {ReactComponent as CompleteLogo} from "../assets/portland-craft-gf-plain.svg";

export default class SVGTest extends Component {
  constructor(props){
    super(props);

    
  }
  

  render(){
    // console.log(gfLogo);
    return(
      <div>
        <img src={gflogo} alt="gflogo" />
      </div>
    );
  }
}
