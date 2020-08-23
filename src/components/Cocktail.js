import React from "react";

export const Cocktail = ({ itemName = "unnamed", price = "23", notes=""}) => {

  // if(Array.isArray(notes)){
  //   let choices = notes[1].map((choice, i) => {
      
  //   })
  //   notes = (
  //     <div className="cocktail-extra-notes">
  //       {notes[0]}
  //       {}
  //     </div>
  //   )
  // }

  return(
    <li className="menu-item cocktail">

      <div className="menu-item__name">

        {itemName}
    
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

