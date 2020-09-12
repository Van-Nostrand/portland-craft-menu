import React from "react";
import {Food} from "./Food";

export const BarSnacks = ({menuData, logos}) => {

  let items = menuData.map((item, i) => {
    let dietlogos = {
      glutenFree: item.glutenFree ? logos.gflogo : false,
      nutFree: item.nutFree ? logos.vegetarianlogo : false,
      vegan: item.vegan ? logos.veganlogo : false,
      dairyFree: item.dairyFree ? "DF" : false
    }
    return <Food  
              itemName={item.name}
              price={item.price}
              notes={item.notes}
              logos={dietlogos}
              key={`barsnacks-item-${i}`} />
  });
 
  return(
    <>
      <div className="menu snacks">
        <section className="snacks-section">

          <div className="section__title">
            Bar Snacks
          </div>
          
          <ul className="section__list">
            {items}
          </ul>
        </section>
      </div>
    </>
  )
};

