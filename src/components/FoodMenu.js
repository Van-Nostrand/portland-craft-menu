import React from "react";
import {FoodSection} from "./FoodSection";

export const FoodMenu = ({logos, menuData }) => {
  
  return(
    <>
      <div className="menu food-menu">

        <div className="menu__page-divider"></div>

        <div className="menu__section-wrapper">
          <FoodSection 
            section="starters & salads" 
            items={menuData["starters"]} 
            logos={logos} />
        </div>

        <div className="menu__page-divider"></div>

        <div className="menu__section-wrapper">
          <FoodSection 
            section="burgers" 
            items={menuData["burgers"]} 
            logos={logos} />
        </div>

        <div className="menu__page-divider"></div>

        <div className="menu__section-wrapper" >
          <FoodSection 
            section="mains" 
            items={menuData["mains"]} 
            logos={logos} />
        </div>

        <div className="menu__page-divider"></div>

        <div className="menu__section-wrapper" >
          <section className="menu-dips">
            <div className="menu-dips__title">Dips!</div>
            <ul className="menu-dips__list">
              <li className="smaller-text">Garlic aioli</li>
              <li className="smaller-text">Smoked paprika aioli</li>
              <li className="smaller-text">Scallion aioli</li>
              <li className="smaller-text">Thai chili<img src={logos.veganlogo} alt="veganlogo" /></li>
              <li className="smaller-text">Habenero (extra hot!)</li>
            </ul>
          </section>
        </div>

        <div className="food-menu__legend">
          <div className="food-menu__legend-item">
            <img src={logos.vegetarianlogo} alt="vegetarianlogo" /> = vegetarian
          </div>
          <div className="food-menu__legend-item">
            <img src={logos.veganlogo} alt="veganlogo" /> = vegan
          </div>
          <div className="food-menu__legend-item">
            <img src={logos.gflogo} alt="gflogo" /> = gluten free
          </div>
        </div>
      
      </div>
    </>
  )
}