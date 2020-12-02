import React from "react";
import { DrinksSection } from  "./DrinksSection";

export const DrinksMenu = ({menuData}) => {

  return (
    <div className="menu drinks-menu">
      
      <DrinksSection
        section="wine" 
        drinks={{
          red: menuData.RED_WINE, 
          white: menuData.WHITE_WINE, 
          bubbles: menuData.BUBBLES 
        }} />

      <div className="divider-wrapper">
        <div className="horizontal-divider"></div>
      </div>
      
      
      <DrinksSection
        section="cocktails" 
        drinks={menuData.COCKTAILS} />

      <DrinksSection
        section="packaged-beer"
        drinks={menuData.PACKAGED_BEER} />
      
    </div>
  )
}

