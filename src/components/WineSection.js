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


  if(section === "bubbly"){
    section = <div>
                {section}
                <div className="wine-sizes">5oz / bottle</div>
              </div>
  } else {
    section = <div>
                {`${section} Wine`}
                <div className="wine-sizes" >5oz / 8oz / bottle</div>
              </div>
  }

  return (
    <section>
      <div className="section__title">
        {section}
      </div>
      
      <ul className="section__wrapper">
        {dranks}
      </ul>
    </section>
  )
}

