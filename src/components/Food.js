import React from "react";

export const Food = ({ itemName = "unnamed", price = "23", notes="notes go here", logos }) => {

  return(
    <li className="menu-item food-menu__item">

      <div className="food-menu__item-name">

        {itemName}
        {logos.glutenFree ? <img className="food-menu__item-dietlogo" src={logos.glutenFree} alt="gflogo" /> : <></>}
        {logos.vegan ? <img className="food-menu__item-dietlogo" src={logos.vegan} alt="veganlogo" /> : <></>}
        {logos.vegetarian ? <img className="food-menu__item-dietlogo" src={logos.vegetarian} alt="vegetarianlogo" /> : <></>}
    
      </div>

      <div className="food-menu__item-price">
        
        <svg viewBox="0 0 12 12" >
          <circle cx="5" cy="5" r="5"/>
        </svg>
        <span>{price}</span>
      </div>

      <div className="food-menu__item-notes smaller-text">
        {notes}
      </div>

    </li>
  )
}

