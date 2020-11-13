import React from "react";

export const Food = ({ itemName = "unnamed", price = "23", notes="", diet = "" }) => {
  let itemNotes, dietDiv;

  if(notes === ""){
    itemNotes = <></>;
  } 
  else {
    itemNotes = 
      <div className="item-notes smaller-text">
        {notes}
      </div>;
  }

  if(diet === ""){
    dietDiv = <></>;
  } 
  else {
    dietDiv = 
      <div className="diet">
        {diet}
      </div>;
  }

  return(
    <li className="food-item menu-item">

      <div className="item-name">
        {itemName}
      </div>

      <div className="item-price">
        <span>
          ${price}
        </span>
      </div>

      {itemNotes}
      {dietDiv}
      
    </li>
  )
}