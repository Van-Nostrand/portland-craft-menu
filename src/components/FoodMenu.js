import React from "react";
import {FoodSection} from "./FoodSection";

export const FoodMenu = ({ menuData }) => {

  return(
    <>
      <div className="menu food-menu">

        <FoodSection 
          section="Snacks" 
          items={menuData.SNACKS} />

        <FoodSection
          section="Omnivores"
          items={menuData.OMNIVORES} />

        <FoodSection
          section="Herbivores"
          items={menuData.HERBIVORES} />
        
        <FoodSection 
          section="Large Plates" 
          items={menuData.LARGER} />

        <FoodSection 
          section="Sweets" 
          items={menuData.SWEETS} />
        
        <FoodSection 
          section="Sides" 
          items={menuData.SIDES} />

      </div>
    </>
  )
}
