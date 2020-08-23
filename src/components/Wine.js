import React from "react";


export const Wine = ({ itemName = "unnamed", notes="", sizes}) => {

  return(
    <li className="menu-item wine-item">

      <div className="menu-item__name">

        {itemName}
        <span className="smaller-text wine-origin">
          {` (${notes})`}
        </span>
    
      </div>

      <div className="menu-item__price">
        
        <svg viewBox="0 0 12 12" >
          <circle cx="5" cy="5" r="5"/>
        </svg>
        <span>{sizes.join("/")}</span>
      </div>

      

    </li>
  )
}

