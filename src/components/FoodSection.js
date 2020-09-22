import React from "react";
import { Food } from "./Food";

export const FoodSection = ({section, items, logos}) => {

  let foods = items.map((item, i) => {
    let dietlogos = {
      glutenFree: item.glutenFree ? logos.gflogo : false,
      vegetarian: item.vegetarian ? logos.vegetarianlogo : false,
      vegan: item.vegan ? logos.veganlogo : false,
      nutFree: item.nutFree ? logos.nutFree : false,
      dairyFree: item.dairyFree ? logos.dairyFree : false
    }
    return <Food 
              itemName={item.name} 
              price={item.price} 
              notes={item.notes}
              logos={dietlogos} 
              key={`${section}-item-${i}`} />
  });
  
  let classString = `food-section ${section.toLowerCase().split(" ").join("")}` ;

  return(
    <section className={classString}>
      <div className="section__title">{section}</div>
      <ul className="section__list">
        {foods}
      </ul>
    </section>
  );
}
