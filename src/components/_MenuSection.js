import React from "react";
import { MenuItem } from "./MenuItem";

export const MenuSection = ({section, items, logos}) => {

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

  return(
    <section>
      <div className="food-menu__section__title">{section}</div>
      <ul className="food-menu__section__item-wrapper">
        {menuItems}
      </ul>
    </section>
  );
}
