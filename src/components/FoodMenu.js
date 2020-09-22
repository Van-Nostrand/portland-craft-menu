import React from "react";
import {FoodSection} from "./FoodSection";

export const FoodMenu = ({logos, menuData}) => {

  return(
    <>
      <div className="menu food-menu">

        <FoodSection 
          section="Bar Snacks" 
          items={menuData.SNACKS} 
          logos={logos} />

        <section className="faux-section">
          <div className="section__title">
            Small Plates
          </div>
        </section>

        <FoodSection 
          section="Omnivores" 
          items={menuData.OMNIVORES} 
          logos={logos} />

        <FoodSection 
          section="Herbivores" 
          items={menuData.HERBIVORES} 
          logos={logos} />

        <FoodSection 
          section="Larger" 
          items={menuData.LARGER} 
          logos={logos} />

        <FoodSection 
          section="Sweets" 
          items={menuData.SWEETS} 
          logos={logos} />

        <section className="diet-logo-legend">
          <div className="diet-logo-legend--item">
            <img src={logos.vegetarianlogo} alt="vegetarianlogo" /> = vegetarian
          </div>
          <div className="diet-logo-legend--item">
            <img src={logos.veganlogo} alt="veganlogo" /> = vegan
          </div>
          <div className="diet-logo-legend--item">
            <img src={logos.gflogo} alt="gflogo" /> = gluten free
          </div>
          <div className="diet-logo-legend--item">
            <img src={logos.dairyFree} alt="dflogo" /> = dairy free
          </div>
          <div className="diet-logo-legend--item">
            <img src={logos.nutFree} alt="nflogo" /> = nut free
          </div>
        </section>
      
      </div>
    </>
  )
}
