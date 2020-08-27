import React from "react";


export const Wine = ({ itemName = "unnamed", notes="", sizes, varietal}) => {


  return(
    <li className="wine-item">

      <div className="wine-item-name">
        {itemName}
      </div>

      <div className="wine-item-varietal">
        {varietal}
      </div>

      <span className="wine-item-origin">
          {` (${notes})`}
      </span>

      <div className="wine-item-price">
        
        {/* <svg viewBox="0 0 12 12" >
          <circle cx="5" cy="5" r="5"/>
        </svg> */}
        <span>{sizes.join("/")}</span>
      </div>

      

    </li>
  )
}

