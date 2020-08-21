import React, { Component } from "react";
import {MenuSection} from "./MenuSection";
import {
  TEMP_MENU_DATA
} from "./CONSTANTS";
import gflogo from "../assets/gf.svg";
import vegetarianlogo from "../assets/vegetarian.svg";
import veganlogo from "../assets/vegan.svg";

export default class Menu extends Component {
  constructor(props){
    super(props);

    this.state = {
      menuData: TEMP_MENU_DATA
    }
  }

  scrollEvent = () => {
    console.log("scrolled!")
  }

  render(){
    return(
      <>
        <div className="menu">
          <h6>We serve locally-sourced offerings inspired by the Portland food scene, paired with the best drinks the Northwest has to offer!</h6>

          <div className="menu__page-divider"></div>

          <div className="menu__section-wrapper">
            <MenuSection 
              section="starters and salads" 
              items={this.state.menuData["starters"]} 
              logos={{veganlogo, vegetarianlogo, gflogo}} />
          </div>

          <div className="menu__page-divider"></div>

          <div className="menu__section-wrapper">
            <MenuSection 
              section="burgers" 
              items={this.state.menuData["burgers"]} 
              logos={{veganlogo, vegetarianlogo, gflogo}} />
          </div>

          <div className="menu__page-divider"></div>

          <div className="menu__section-wrapper" onScroll={this.scrollEvent}>
            <MenuSection 
              section="mains" 
              items={this.state.menuData["mains"]} 
              logos={{veganlogo, vegetarianlogo, gflogo}} />
          </div>

          <div className="menu__section-wrapper" >
            <section className="menu-dips">
              <h4>Dips</h4>
              <ul className="menu-dips-list">
                <li className="smaller-text">Garlic aioli</li>
                <li className="smaller-text">Smoked paprika aioli</li>
                <li className="smaller-text">Scallion aioli</li>
                <li className="smaller-text">Habenero (extra hot!)</li>
                <li className="smaller-text">Thai chili<img src={veganlogo} alt="veganlogo" style={{height: "2rem",marginLeft: "0.3rem"}} /></li>
              </ul>
            </section>
          </div>
          <div className="legend">

          </div>
          <h2>get a portland growler to go, ask your server!</h2>
        
        </div>
      </>
    )
  }
}
