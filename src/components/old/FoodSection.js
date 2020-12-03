import React from "react";
import { Food } from "./Food";

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
  section = section.toUpperCase();

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