import React from "react";
export const Wine = ({ itemName = "unnamed", notes="", sizes, varietal, style}) => {
// console.log(style);
  return(
    <li className={`wine-item ${style}-wine-item menu-item`}>

      <div className="wine-item-name item-name">
        {itemName}
      </div>

      <div className="wine-item-varietal">
        {varietal}{` (${notes})`}
      </div>

      <div className="wine-item-price item-price">
        <span>${sizes.join(" / $")}</span>
      </div>

    </li>
  )
}

export const WineSection = ({sectionTitle, sectionSizeString, wines}) => {
  let lowercasesection = sectionTitle.toLowerCase();
  return (
    <section className={`wine-section ${lowercasesection}-wine-section`}>
      <div className={`wine-section-title ${lowercasesection}-section-title`}>
        {sectionTitle}
      </div>
      <div className={`wine-sizes ${lowercasesection}-wine-sizes`}>
        {sectionSizeString}
      </div>
      <ul className={`wine-list ${lowercasesection}-wine-list`}>
        {wines}
      </ul>
    </section>
  );
}


const WineLists = ({drinks, section}) => {

  let dranks; 

  let winekeys = Object.keys(drinks);

  let redwines = drinks[winekeys[0]].map((wine, j) => {
    return <Wine 
            itemName={wine.name}
            varietal={wine.varietal}
            style="red"
            sizes={wine.sizes}
            notes={wine.notes}
            key={`red-wine-${j}`} />
  });

  let whitewines = drinks[winekeys[1]].map((wine, j) => {
    return <Wine 
            itemName={wine.name}
            varietal={wine.varietal}
            style="white"
            sizes={wine.sizes}
            notes={wine.notes}
            key={`white-wine-${j}`} />
  });

  let bubblies = drinks[winekeys[2]].map((wine, j) => {
    return <Wine 
            itemName={wine.name}
            varietal={wine.varietal}
            style="bubbly"
            sizes={wine.sizes}
            notes={wine.notes}
            key={`bubbly-${j}`} />
  });
  dranks = 
    <>
      <WineSection 
        sectionTitle="Red"
        sectionSizeString="5oz, 8oz, bottle"
        wines={redwines} />

      <WineSection 
        sectionTitle="White"
        sectionSizeString="5oz, 8oz, bottle"
        wines={whitewines} />

      <WineSection 
        sectionTitle="Bubbly"
        sectionSizeString="5oz, bottle"
        wines={bubblies} />
    </>;
  
  return (
    <>
      {dranks}
    </>
  )
}