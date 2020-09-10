import React from "react";

import {CocktailSection} from "./CocktailSection";
import {WineSection} from "./WineSection";

export const DrinksMenu = ({menuData}) => {

  return (
    <div className="menu drinks-menu">
      
      <WineSection section="red" wineData={menuData["wine"]["red"]} />

      <WineSection section="white" wineData={menuData["wine"]["white"]} />

      <WineSection section="bubbly" wineData={menuData["wine"]["bubbles"]} />

      <CocktailSection cocktailData={menuData["cocktails"]} />
      
    </div>
  )
}

