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
            SMALL PLATES
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

        <section className="diet-logo-legend">
          <div className="diet-logo-legend--item">
            <img src={logos.vegetarianlogo} alt="vegetarianlogo" />
            <svg viewBox="0 0 12 12" >
              <circle cx="5" cy="5" r="5"/>
            </svg>vegetarian
          </div>
          <div className="diet-logo-legend--item">
            <img src={logos.veganlogo} alt="veganlogo" />
            <svg viewBox="0 0 12 12" >
              <circle cx="5" cy="5" r="5"/>
            </svg>vegan
          </div>
          <div className="diet-logo-legend--item">
            <img src={logos.gflogo} alt="gflogo" />
            <svg viewBox="0 0 12 12" >
              <circle cx="5" cy="5" r="5"/>
            </svg>gluten free
          </div>
          <div className="diet-logo-legend--item">
            <img src={logos.dairyFree} alt="dflogo" />
            <svg viewBox="0 0 12 12" >
              <circle cx="5" cy="5" r="5"/>
            </svg>dairy free
          </div>
          <div className="diet-logo-legend--item">
            <img src={logos.nutFree} alt="nflogo" />
            <svg viewBox="0 0 12 12" >
              <circle cx="5" cy="5" r="5"/>
            </svg>nut free
          </div>
        </section>
      </div>
    </>
  )
}
