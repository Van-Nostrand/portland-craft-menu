import React from "react";
import { MenuItem } from "./MenuItem";

export const MenuSection = ({section, items}) => {

  let menuItems = items.map((item, i) => {
    return <MenuItem 
              name={item.name} 
              price={item.price} 
              notes={item.notes} 
              glutenFree={item.glutenFree}
              vegetarian={item.vegetarian}
              vegan={item.vegan}
              key={`${section}-item-${i}`} />
  });

  // TODO: rename class menu-item-wrapper to something better
  return(
    <section>
      <h2>{section}</h2>
      <ul className="menu-item-wrapper">
        {menuItems}
      </ul>
    </section>
  );
}
