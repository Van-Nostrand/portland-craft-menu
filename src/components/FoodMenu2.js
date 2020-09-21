import React from "react";
import {FoodSection2} from "./FoodSection2";

export const FoodMenu2 = ({logos, menuData}) => {

  return(
    <>
      <div className="menu food-menu">

        <FoodSection2 
          section="Bar Snacks" 
          items={menuData.SNACKS} 
          logos={logos} />

        <section className="faux-section">
          <div className="section__title">
            Small Plates
          </div>
        </section>

        <FoodSection2 
          section="Omnivores" 
          items={menuData.OMNIVORES} 
          logos={logos} />

        <FoodSection2 
          section="Herbivores" 
          items={menuData.HERBIVORES} 
          logos={logos} />

        <FoodSection2 
          section="Larger" 
          items={menuData.LARGER} 
          logos={logos} />

        <FoodSection2 
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
        </section>
      
      </div>
    </>
  )
}
