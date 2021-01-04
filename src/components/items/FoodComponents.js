import React from "react";

export const FoodSection = ({section, items}) => {

  let foods = items.map((item, i) => {
    
    return <Food 
              itemName={item.name} 
              price={item.price} 
              notes={item.notes}
              diet={item.diet}
              key={`${section}-item-${i}`} />
  });
  
  let classString = `food-section ${section.toLowerCase().split(" ").join("")}`;

  return(
    <section className={classString}>
      <div className="section__title">
        {section}
      </div>
      <ul className="section__list">
        {foods}
      </ul>
    </section>
  );
}

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