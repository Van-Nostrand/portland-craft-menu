import React from "react";


export const Wine = ({ itemName = "unnamed", notes="", sizes, varietal}) => {


  return(
    <li className="wine-item">

      <div className="wine-item-name item-name">
        {itemName}
      </div>

      <div className="wine-item-varietal">
        {varietal}
      </div>

      

      <div className="wine-item-price item-price">
   
        <span>{sizes.join(" / ")}</span>
      </div>

      <span className="wine-item-origin">
          {` (${notes})`}
      </span>

    </li>
  )
}

