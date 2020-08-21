import React from "react";


export const MenuItem = ({ itemName = "unnamed", price = "23", notes="notes go here", logos }) => {

  return(
    <li className="menu-item">

      <div className="menu-item__name">

        {itemName}
        {logos.glutenFree ? <img className="menu-item__dietlogo" src={logos.glutenFree} alt="gflogo" /> : <></>}
        {logos.vegan ? <img className="menu-item__dietlogo" src={logos.vegan} alt="veganlogo" /> : <></>}
        {logos.vegetarian ? <img className="menu-item__dietlogo" src={logos.vegetarian} alt="vegetarianlogo" /> : <></>}
    
      </div>

      <div className="menu-item__price">
        
        <svg viewBox="0 0 12 12" >
          <circle cx="5" cy="5" r="5"/>
        </svg>
        <span>{price}</span>
      </div>

      <div className="menu-item__notes smaller-text">
        {notes}
      </div>

    </li>
  )
}

