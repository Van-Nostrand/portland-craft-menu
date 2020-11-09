import React from "react";
import {FoodSection} from "./FoodSection";

export const FoodMenu = ({logos, menuData}) => {

  return(
    <>
      <div className="menu food-menu">

        <FoodSection 
          section="Snacks" 
          items={menuData.SNACKS} 
          logos={logos} />

        <FoodSection
          section="Omnivores"
          items={menuData.OMNIVORES}
          logos={logos} />

        <FoodSection
          section="Herbivores"
          items={menuData.HERBIVORES}
          logos={logos} />
        
        <FoodSection 
          section="Large Plates" 
          items={menuData.LARGER} 
          logos={logos} />

        <FoodSection 
          section="Sweets" 
          items={menuData.SWEETS} 
          logos={logos} />
        
        <FoodSection 
          section="Sides" 
          items={menuData.SIDES} 
          logos={logos} />

      </div>
    </>
  )
}
