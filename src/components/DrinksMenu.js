import React from "react";

import {CocktailSection} from "./CocktailSection";
import {WineSection} from "./WineSection";

import {PackagedBeer} from "./PackagedBeer";

export const DrinksMenu = ({menuData}) => {

  return (
    <div className="menu drinks-menu">
      
      <WineSection section="red" wineData={menuData.RED_WINE} />

      <WineSection section="white" wineData={menuData.WHITE_WINE} />

      <WineSection section="bubbly" wineData={menuData.BUBBLES} />

      <CocktailSection cocktailData={menuData.NEW_COCKTAILS} />

      <PackagedBeer section="packaged" items={menuData.PACKAGED_BEER} />
      
    </div>
  )
}

