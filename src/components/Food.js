import React from "react";

export const Food = ({ itemName = "unnamed", price = "23", notes="", diet = "" }) => {
  
  return(
    <li className="food-item">

      <div className="item-name">
        {itemName}
      </div>

      <div className="item-price">
        <span>
          ${price}
        </span>
      </div>

      <div className="item-notes smaller-text">
        {notes}
      </div>

      <div className="diet">
        {diet}
      </div>
    </li>
  )
}