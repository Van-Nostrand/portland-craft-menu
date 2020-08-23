import React from "react";
import { MenuItem } from "./MenuItem";

export const FoodSection = ({section, items, logos}) => {

  let menuItems = items.map((item, i) => {
    let dietlogos = {
      glutenFree: item.glutenFree ? logos.gflogo : false,
      vegetarian: item.vegetarian ? logos.vegetarianlogo : false,
      vegan: item.vegan ? logos.veganlogo : false
    }
    return <MenuItem 
              itemName={item.name} 
              price={item.price} 
              notes={item.notes}
              logos={dietlogos} 
              key={`${section}-item-${i}`} />
  });

  // TODO: rename class menu-item-wrapper to something better
  return(
    <section>
      <div className="food-menu__section-item--title">{section}</div>
      <ul className="food-menu__section-item--wrapper">
        {menuItems}
      </ul>
    </section>
  );
}
