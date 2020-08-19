import React, { Component } from "react";
import {MenuSection} from "./MenuSection";
import {
  TEMP_MENU_DATA
} from "./CONSTANTS";
import vegan from "./vegan.svg";

export default class Menu extends Component {
  constructor(props){
    super(props);

    this.state = {
      menuData: TEMP_MENU_DATA
    }
  }

  render(){
    return(
      <div className="menu">

        <div className="page-divider"></div>
        <div className="menu-section-wrapper">
          <MenuSection section="starters" items={this.state.menuData["starters"]} />
        </div>
        <div className="page-divider"></div>
        <div className="menu-section-wrapper">
          <MenuSection section="burgers" items={this.state.menuData["burgers"]} />
        </div>
        <div className="page-divider"></div>
        <div className="menu-section-wrapper">
          <MenuSection section="mains" items={this.state.menuData["mains"]} />
        </div>
        <div className="menu-section-wrapper">
          <section className="menu-dips">
            <h4>Dips</h4>
            <ul className="menu-dips-list">
              <li className="smaller-text">Garlic aioli</li>
              <li className="smaller-text">Smoked paprika aioli</li>
              <li className="smaller-text">Scallion aioli</li>
              <li className="smaller-text">Habenero (extra hot!)</li>
              <li className="smaller-text">Thai chili<img src={vegan} alt="vegan" style={{height: "2rem",marginLeft: "0.3rem"}} /></li>
            </ul>
          </section>
        </div>
       
      </div>
    )
  }
}
