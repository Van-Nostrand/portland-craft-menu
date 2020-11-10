import React from "react";

export const Cocktail = ({ itemName = "unnamed", price = "23", notes=""}) => {

  let notesElement = notes.split(".").map((item, i) => <p key={`splitstring${i}`}>{item}</p>);

  return(
    <li className="cocktail">

      <div className="cocktail-name item-name">

        {itemName}
    
      </div>

      <div className="cocktail-price item-price">
        <span>
          ${price}
        </span>
      </div>

      <div className="cocktail-notes item-notes">
        {notesElement}
      </div>

    </li>
  )
}

