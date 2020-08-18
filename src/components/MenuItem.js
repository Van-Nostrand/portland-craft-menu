import React from "react";

export const MenuItem = ({name = "unnamed", price = "23", notes="notes go here"}) => {

  return(
    <li className="menu-item">

      <div className="menu-item-name">
        {name}
      </div>

      <div className="menu-item-price">
        <svg viewBox="0 0 12 12" >
          <circle cx="5" cy="5" r="5"/>
        </svg>
        <span>{price}</span>
      </div>

      <div className="menu-item-notes">
        {notes}
      </div>

    </li>
  )
}

