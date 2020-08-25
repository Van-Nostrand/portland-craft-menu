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

  if(section === "burgers"){
    section = (
      <>
        {section}
        <div className="burgers">All burgers are served on a brioche bun<br /> and come with a side of fries <br />(Sub salad or half-&-half for $2)</div>
      </>
    )
  }

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
