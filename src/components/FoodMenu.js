import React from "react";

export const FoodMenu = ({ menuData }) => {

  return(<>
    <div className="food-menu menu">
      <p>All items are nut-free unless specified</p>

      <FoodSection 
        section="Features" 
        items={menuData.FEATURES} />

      <FoodSection 
        section="Snacks" 
        items={menuData.SNACKS} />

      <FoodSection
        section="Omnivores"
        items={menuData.OMNIVORES} />

      <FoodSection
        section="Herbivores"
        items={menuData.HERBIVORES} />
      
      <FoodSection 
        section="Large Plates" 
        items={menuData.LARGER} />

      <FoodSection 
        section="Sweets" 
        items={menuData.SWEETS} />
      
      <FoodSection 
        section="Sides" 
        items={menuData.SIDES} />

    </div>
  </>);
}

const FoodSection = ({section, items}) => {

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



const Food = ({ itemName = "unnamed", price = "23", notes="", diet = "" }) => {
  let itemNotes, dietDiv;

  if(notes === ""){
    itemNotes = <></>;
  } 
  else {
    
    //if {notes} is an array, then wrap in divs to create line breaks
    itemNotes = 
      <div className="item-notes smaller-text">
        { Array.isArray(notes) ? 
          notes.map((note, i) => {
            return <div key={`subnote${i}`}>{note}</div>;
          }) 
        : 
          notes
        }
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