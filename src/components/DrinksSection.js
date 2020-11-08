import React from "react";
import {Wine} from "./Wine";
import {Cocktail} from "./Cocktail";

export const DrinksSection = ({drinks, section}) => {

  let dranks; 
  let sectionClassName = section;

  if(section === "wine"){
    let winekeys = Object.keys(drinks);
    dranks = [];
    winekeys.forEach((style, i) => {
      let styleData = drinks[style].map((wine, j) => {
        return <Wine 
                itemName={wine.name}
                varietal={wine.varietal}
                sizes={wine.sizes}
                notes={wine.notes}
                key={`${style}-wine-${j}`} />
      });
      dranks.push( 
        <ul className="section__list" key={`winelist${i}`}>
          {styleData}
        </ul>);
    });
    console.log(dranks);
  }
  else if(section === "cocktails"){
    dranks = <ul className="section__list">
                {
                  drinks.map((cocktail, i) => {
                    return <Cocktail 
                            itemName={cocktail.name}
                            price={cocktail.price}
                            notes={cocktail.notes}
                            key={`cocktail-${i}`} />
                  })
                }
              </ul>;
  }
  
  return (
    <section className={section}>
      <div className="section__title">
        {section}
      </div>

      {dranks}
      
    </section>
  )
}

