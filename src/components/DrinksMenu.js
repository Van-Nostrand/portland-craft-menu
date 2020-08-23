import React from "react";

import {DrinkMenuItem} from "./DrinkMenuItem";
import {CocktailSection} from "./CocktailSection";
import {WineSection} from "./WineSection";

export const DrinksMenu = ({menuData}) => {

  let drinksSections = 

  return (
    <div className="menu drinks-menu">
      <div className="drinks-menu__section-wrapper">
        <WineSection section="red" wineData={menuData["wine"]["red"]} />
        <WineSection section="white" wineData={menuData["wine"]["white"]} />
        <WineSection section="bubbly" wineData={menuData["wine"]["bubbly"]} />
        <CocktailSection cocktailData={menuData["cocktails"]} />
      </div>
    </div>
  )
}

