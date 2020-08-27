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

  let sectionID = section;
  let sectionDIV;

  if(section === "bubbly"){
    sectionDIV = <div>
                {section}
                <div className="wine-sizes">5oz / bottle</div>
              </div>
  } else {
    sectionDIV = <div>
                {`${section} Wine`}
                <div className="wine-sizes" >5oz / 8oz / bottle</div>
              </div>
  }
  

  return (
    <section id={sectionID}>
      <div className="section__title">
        {sectionDIV}
      </div>
      
      <ul className="section__list">
        {dranks}
      </ul>
    </section>
  )
}

