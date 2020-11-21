import React from "react";

import {CocktailSection} from "./CocktailSection";
import {WineSection} from "./WineSection";

export const DrinksMenu = ({menuData}) => {

  return (
    <div className="menu drinks-menu">
      
      <WineSection section="red" wineData={menuData.RED_WINE} />

      <WineSection section="white" wineData={menuData.WHITE_WINE} />

      <WineSection section="bubbly" wineData={menuData.BUBBLES} />

      <CocktailSection cocktailData={menuData.NEW_COCKTAILS} />
      
    </div>
  )
}

