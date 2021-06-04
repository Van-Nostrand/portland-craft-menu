import React from "react";
import { AIOLI } from "./CONSTANTS";

export const FoodMenu = ({ menuData }) => {

  return(<>
    <p>All items are nut-free unless specified</p>
    <div className="food-menu menu">

      <FoodSection 
        section="Snacks" 
        items={menuData.SNACKS} />

      <FoodSection
        section="Small Plates"
        items={menuData.SMALL_PLATES} />

      <FoodSection
        section="Burgers"
        items={menuData.BURGERS} />
      
      <FoodSection
        section="Pizza"
        items={menuData.PIZZA} />
      
      <FoodSection 
        section="Large Plates" 
        items={menuData.LARGE_PLATES} />

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
  // section = section.toUpperCase();

  return(
    <section className={classString}>
      <div className="section__title">
        {section}
      </div>

      {
        section == "Burgers" ? 
          <div className="burger-addons">
            <div className="burger-addons-title">
              Burger add-ons
            </div>
            <div className="burger-addons-options">
              <div>Gluten-free Bun • $1</div>
              <div>Fries • $5</div>
              <div>Soup • $5</div>
              <div>Green Salad • $4</div>
              <div>Parmesan Truffle Fries • $6</div>
              <div>Poutine • $7</div>
              <div>Chicken breast (grilled or fried) • $6</div>
              <div>Beef Patty • $7</div>
              <div>Cheese • $1</div>
              <div>Bacon • $2</div>
            </div>
          </div>
        : section == "Pizza" ? 
            <div className="pizza-subheader">
              All our pizzas are made in house with 48 hour cold fermented dough. Hand kneaded and rolled
            </div> 
            : <></>
      }
      
      <ul className="section__list">
        {foods}
      </ul>

      {/* {
        section === "Burgers" ? 
          <div className="aioli-list">
            <div>Aiolis: </div>
            {AIOLI.map(aioli => <div className="aioli-item">{aioli}</div>)}
          </div>
          : <></>
      } */}
      
    </section>
  );
}



const Food = ({ itemName = "unnamed", price = "23", notes="", diet = "" }) => {
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