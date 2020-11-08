import React from "react";

// import {CocktailSection} from "./CocktailSection";
// import {WineSection} from "./WineSection";
import { DrinksSection } from  "./DrinksSection";

export const DrinksMenu2 = ({menuData}) => {

  return (
    <div className="menu drinks-menu">
      
      <DrinksSection 
        section="wine" 
        drinks={{
          red: menuData.RED_WINE, 
          white: menuData.WHITE_WINE, 
          bubbles: menuData.BUBBLES 
        }} />
      
      <DrinksSection 
        section="cocktails" 
        drinks={menuData.COCKTAILS} />
      
    </div>
  )
}

