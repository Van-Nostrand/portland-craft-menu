import React from "react";

import {CocktailSection} from "./CocktailSection";
import {WineSection} from "./WineSection";

export const DrinksMenu = ({menuData}) => {

  return (
    <div className="menu drinks-menu">
      
      <div className="drinks-menu__section-wrapper">
        <WineSection section="red" wineData={menuData["wine"]["red"]} />
      </div>

      <div className="drinks-menu__section-wrapper">
        <WineSection section="white" wineData={menuData["wine"]["white"]} />
      </div>

      <div className="drinks-menu__section-wrapper">
        <WineSection section="bubbly" wineData={menuData["wine"]["bubbles"]} />
      </div>

      <div className="drinks-menu__section-wrapper">
        <CocktailSection cocktailData={menuData["cocktails"]} />
      </div>
      
      
    </div>
  )
}

