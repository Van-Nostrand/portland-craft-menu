import React from "react";
import { Food } from "./Food";

export const FoodSection = ({section, items, logos}) => {

  let foods = items.map((item, i) => {
    let dietlogos = {
      glutenFree: item.glutenFree ? logos.gflogo : false,
      vegetarian: item.vegetarian ? logos.vegetarianlogo : false,
      vegan: item.vegan ? logos.veganlogo : false
    }
    return <Food 
              itemName={item.name} 
              price={item.price} 
              notes={item.notes}
              logos={dietlogos} 
              key={`${section}-item-${i}`} />
  });

  // TODO: rename class menu-item-wrapper to something better
  return(
    <section>
      <div className="section__title">{section}</div>
      <ul className="section__wrapper">
        {foods}
      </ul>
    </section>
  );
}
