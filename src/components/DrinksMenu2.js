import React from "react";

// import {CocktailSection} from "./CocktailSection";
// import {WineSection} from "./WineSection";
import { DrinksSection2 } from  "./DrinksSection2";

export const DrinksMenu2 = ({menuData}) => {

  return (
    <div className="menu drinks-menu">
      
      <DrinksSection2 
        section="wine" 
        drinks={{
          red: menuData.RED_WINE, 
          white: menuData.WHITE_WINE, 
          bubbles: menuData.BUBBLES 
        }} />
      
      <DrinksSection2 
        section="cocktails" 
        drinks={menuData.COCKTAILS} />
      
    </div>
  )
}

