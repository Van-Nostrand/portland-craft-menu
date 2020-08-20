import React from "react";


export const MenuItem = ({ name = "unnamed", price = "23", notes="notes go here", logos }) => {

  let gfElement = logos.glutenFree ? 
                    <img 
                      className="menu-item-logo" 
                      src={logos.glutenFree} 
                      alt="gflogo" /> : 
                    <></>;

  let veganElement = logos.vegan ? 
                      <img 
                        className="menu-item-logo" 
                        src={logos.vegan} 
                        alt="veganlogo" /> : 
                      <></>;

  let vegetarianElement = logos.vegetarian ? 
                            <img 
                              className="menu-item-logo" 
                              src={logos.vegetarian} 
                              alt="vegetarianlogo" /> : 
                            <></>;


  return(
    <li className="menu-item">

      <div className="menu-item-name">

        {name}
        {gfElement}
        {veganElement}
        {vegetarianElement}
    
      </div>

      <div className="menu-item-price">
        
        <svg viewBox="0 0 12 12" >
          <circle cx="5" cy="5" r="5"/>
        </svg>
        <span>{price}</span>
      </div>

      <div className="menu-item-notes smaller-text">
        {notes}
      </div>

    </li>
  )
}

