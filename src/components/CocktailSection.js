import React from "react";

import {DrinkMenuItem} from "./DrinkMenuItem";

export const CocktailSection = ({cocktailData}) => {

  let dranks = DRINK_MENU_DATA["cocktails"].map((cocktail, i) => {
    return <DrinkMenuItem 
              itemName={cocktail.name}
              price={cocktail.price}
              notes={cocktail.notes}
              key={`cocktail-${i}`} />
  })

  return (
    <div className="menu drink-menu">
      <div className="menu__section-wrapper">
        <section>
          <div className="menu-section__title">
          </div>
          <ul className="menu-section__item-wrapper">
            {dranks}
          </ul>
        </section>
      </div>
    </div>
  )
}

