import React from "react";


export const Wine = ({ itemName = "unnamed", price = ["5","10","23"], notes=""}) => {

  return(
    <li className="menu-item">

      <div className="menu-item__name">

        {itemName}
        <span className="menu-item__notes smaller-text">
          {`(${notes})`}
        </span>
    
      </div>

      <div className="menu-item__price">
        
        <svg viewBox="0 0 12 12" >
          <circle cx="5" cy="5" r="5"/>
        </svg>
        <span>{price}</span>
      </div>

      

    </li>
  )
}

