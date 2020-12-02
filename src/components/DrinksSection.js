import React from "react";
import {Wine} from "./Wine";
import {Cocktail} from "./Cocktail";

export const DrinksSection = ({drinks, section}) => {

  console.log("DRINKS");
  console.log(drinks);
  console.log("SECTION");
  console.log(section);

  let dranks; 

  const WINESIZES = <div className="wine-sizes">5oz, 8oz, bottle</div>;
  const BUBBLYSIZES = <div className="wine-sizes">5oz, bottle</div>;

  if(section === "wine"){
    let winekeys = Object.keys(drinks);
    let wineCategories = [];
    winekeys.forEach((style, i) => {
      let styleData = drinks[style].map((wine, j) => {
        return <Wine 
                itemName={wine.name}
                varietal={wine.varietal}
                sizes={wine.sizes}
                notes={wine.notes}
                key={`${style}-wine-${j}`} />
      });
      wineCategories.push( 
        <ul className="section__list" key={`winelist${i}`}>
          {styleData}
        </ul>);
    });
    dranks = 
      <>
        <div className="red-wine-wrapper">
          <div className="section__title">
            Red
          </div>
          {WINESIZES}
          {wineCategories[0]}
        </div>
        <div className="white-wine-wrapper">
          <div className="section__title">
            White
          </div>
          {WINESIZES}
          {wineCategories[1]}
        </div>
        <div className="bubbly-wrapper">
          <div className="section__title">
            Bubbly
          </div>
          {BUBBLYSIZES}
          {wineCategories[2]}
        </div>
        
      </>;
    section = "wine-section"
  }
  else if(section === "cocktails"){
    dranks = 
      <>
        <div className="section__title">
          Cocktails
        </div>
        <ul className="section__list">
          {drinks.map((cocktail, i) => {
              return <Cocktail 
                      itemName={cocktail.name}
                      price={cocktail.price}
                      notes={cocktail.notes}
                      key={`cocktail-${i}`} />
          })}
        </ul>
      </>;
    section = "cocktail-section"
  }
  else if(section === "packaged-beer"){
    dranks = 
      <>
        <div className="section__title">
          Beer To-Go!
        </div>
        <p>Take some cans home with you!</p><br /><p>(with the purchase of food)</p>
        <ul className="section__list">
          {drinks.map((item, i) => {
              return  <li key={`packaged-beer-${i}`}>
                        <div className="packaged-name item-name">
                          {item.name}
                        </div>
                        <div className="packaged-price item-price">
                          ${/[.50]$/.test(item.price) ? <>{item.price.split(".")[0]}&#189;</> : <>{item.price}</>}
                        </div>
                      </li>
          })}
        </ul>
      </>;
  }
  
  return (
    <section className={section}>
      
      {dranks}
      
    </section>
  )
}

