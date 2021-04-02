import React from "react";

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
              Add-ons for any burger or sandwich!
            </div>
            <div className="burger-addons-options">
              <div>Fries $4</div>
              <div>Parmesan Truffle Fries $6</div>
              <div>Poutine $7</div>
              <div>Gravy $2</div>
              <div>Cheese $2½</div>
              <div>Bacon $2</div>
            </div>
          </div>
        : <></>
      }
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