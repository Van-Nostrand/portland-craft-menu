import React from "react";
import gflogo from "./gf.svg";
import vegetarianlogo from "./vegetarian.svg";
import veganlogo from "./vegan.svg";

export const MenuItem = ({ name = "unnamed", price = "23", notes="notes go here", vegan, vegetarian, glutenFree }) => {

  let gfElement = glutenFree ? 
                    <img 
                      className="menu-item-logo" 
                      src={gflogo} 
                      alt="gflogo" /> : 
                    <></>;

  let veganElement = vegan ? 
                      <img 
                        className="menu-item-logo" 
                        src={veganlogo} 
                        alt="veganlogo" /> : 
                      <></>;

  let vegetarianElement = vegetarian ? 
                            <img 
                              className="menu-item-logo" 
                              src={vegetarianlogo} 
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

