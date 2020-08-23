import React from "react";
import {Cocktail} from "./Cocktail";

export const CocktailSection = ({cocktailData}) => {

  let dranks = cocktailData.map((cocktail, i) => {
    return <Cocktail 
              itemName={cocktail.name}
              price={cocktail.price}
              notes={cocktail.notes}
              key={`cocktail-${i}`} />
  });

  return (
    <section>
      <div className="menu-section__title">
        Cocktails
      </div>
      <ul className="menu-section__wrapper">
        {dranks}
      </ul>
    </section>
  );
};