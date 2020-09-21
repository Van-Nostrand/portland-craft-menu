import React from "react";

export const Food = ({ itemName = "unnamed", price = "23", notes="notes go here", logos }) => {

  return(
    <li className="food-item">

      <div className="item-name">

        {itemName}
        {logos.glutenFree ? 
          <img 
            className="dietlogo" 
            src={logos.glutenFree} 
            alt="gflogo" /> : <></>}
        {logos.vegan ? 
          <img 
            className="dietlogo" 
            src={logos.vegan} 
            alt="veganlogo" /> : <></>}
        {logos.vegetarian ? 
          <img 
            className="dietlogo" 
            src={logos.vegetarian} 
            alt="vegetarianlogo" /> : <></>}
        {logos.nutFree ? 
          <img 
            className="dietlogo" 
            src={logos.nutFree} 
            alt="nutFreeLogo" /> : <></>}
        {logos.dairyFree ? 
          <img 
            className="dietlogo" 
            src={logos.dairyFree} 
            alt="dairyFreeLogo" /> : <></>}
    
      </div>

      <div className="item-price">
        
        <svg viewBox="0 0 12 12" >
          <circle cx="5" cy="5" r="5"/>
        </svg>
        <span>{price}</span>
      </div>

      <div className="item-notes smaller-text">
        {notes}
      </div>

    </li>
  )
}

