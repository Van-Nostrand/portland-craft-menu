import React from "react";
import {
  DRINK_MENU_DATA
} from "./CONSTANTS";
import {Wine} from "./Wine";

export const WineSection = ({wineData, section}) => {

  let dranks = wineData.map((wine, i) => {
      return <Wine 
                itemName={wine.name}
                price={wine.price}
                notes={wine.notes}
                key={`wine-${i}`} />
  });

  return (
    <section>
      <div className="menu-section__title">
        {section}
      </div>
      <ul className="menu-section__item-wrapper">
        {dranks}
      </ul>
    </section>
  )
}

