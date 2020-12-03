import React from "react";
import {Wine} from "./Wine";

export const WineSection = ({wineData, section}) => {

  let dranks = wineData.map((wine, i) => {
      return <Wine 
                itemName={wine.name}
                varietal={wine.varietal}
                sizes={wine.sizes}
                notes={wine.notes}
                key={`${section}-wine-${i}`} />
  });

  let sectionClassName = section;
  let priceSizeString;

  if(section === "bubbly"){
    section = "Bubbly";
    priceSizeString = "5oz / btl";
  } else {
    section = `${section} Wine`
    priceSizeString = "5oz / 8oz / btl";
            
  }
  

  return (
    <section className={sectionClassName}>
      <div className="section__title">
        {section}
      </div>

      <div className="wine-sizes">
        {priceSizeString}
      </div>
      
      <ul className="section__list">
        {dranks}
      </ul>
    </section>
  )
}

