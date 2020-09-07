import React, {useState, useEffect, useRef, useLayoutEffect} from "react";
import {FoodSection} from "./FoodSection";

export const FoodMenu = ({logos, menuData, features }) => {

  return(
    <>
      <div className="menu food-menu">

        <div className="food-menu__section-wrapper">
          <FoodSection 
            section="features" 
            items={features.freshSheet} 
            logos={logos} />
        </div>

        <div className="food-menu__section-wrapper">
          <FoodSection 
            section="starters" 
            items={menuData["starters"]} 
            logos={logos} />
        </div>

        <div className="food-menu__section-wrapper">
          <FoodSection 
            section="burgers" 
            items={menuData["burgers"]} 
            logos={logos} />
        </div>

        <div className="food-menu__section-wrapper" >
          <FoodSection 
            section="mains" 
            items={menuData["mains"]} 
            logos={logos} />
        </div>

        <div className="food-menu__section-wrapper" >
          <section className="menu-dips">
            <div className="menu-dips__title">Dips!</div>
            <ul className="menu-dips__list">
              <li className="menu-dips__list-item">Garlic aioli</li>
              <li className="menu-dips__list-item">Smoked paprika aioli</li>
              <li className="menu-dips__list-item">Scallion aioli</li>
              <li className="menu-dips__list-item">Thai chili<img src={logos.veganlogo} alt="veganlogo" /></li>
              <li className="menu-dips__list-item">Habenero (extra hot!)</li>
            </ul>
          </section>
        </div>

        <div className="diet-logo-legend">
          <div className="diet-logo-legend--item">
            <img src={logos.vegetarianlogo} alt="vegetarianlogo" /> = vegetarian
          </div>
          <div className="diet-logo-legend--item">
            <img src={logos.veganlogo} alt="veganlogo" /> = vegan
          </div>
          <div className="diet-logo-legend--item">
            <img src={logos.gflogo} alt="gflogo" /> = gluten free
          </div>
        </div>
      
      </div>
    </>
  )
}
