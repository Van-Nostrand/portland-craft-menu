import React from "react";

export const DrinksMenu2 = ({menuData}) => {

  return (
    <div className="menu drinks-menu">
      
      <DrinksSection
        section="wine" 
        drinks={{
          red: menuData.RED_WINE, 
          white: menuData.WHITE_WINE, 
          bubbles: menuData.BUBBLES 
        }} />

      {/* <div className="divider-wrapper">
        <div className="horizontal-divider"></div>
      </div>
      
      
      <DrinksSection
        section="cocktails" 
        drinks={menuData.COCKTAILS} />

      <DrinksSection
        section="packaged-beer"
        drinks={menuData.PACKAGED_BEER} /> */}
      
    </div>
  )
}



const DrinksSection = ({drinks, section}) => {

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
  dranks = 
    <>
        <div className="wine-section-title red-section-title">
          Red
        </div>
        <div className="wine-sizes red-sizes">
          5oz, 8oz, bottle
        </div>
        <ul className={`wine-list red-wine-list`} >
          {redwines}
        </ul>
        {/* <div className="section__title white-section-title">
          White
        </div>
        <div className="white-sizes">
          5oz, 8oz, bottle
        </div>
        {wineCategories[1]}
        <div className="bubbly-section-title">
          Bubbly
        </div>
        <div className="wine-sizes bubbly-sizes">5oz, bottle</div>
        {wineCategories[2]} */}
    </>;
  section = "wine-section"
  
 
  
  
  return (
    <section className={section}>
      
      {dranks}
      
    </section>
  )
}


const Wine = ({ itemName = "unnamed", notes="", sizes, varietal, style}) => {
console.log(style);
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



const Cocktail = ({ itemName = "unnamed", price = "23", notes=""}) => {

  let notesElement = notes.split(".").map((item, i) => <p key={`splitstring${i}`}>{item}</p>);

  return(
    <li className="cocktail-item menu-item">

      <div className="cocktail-item-name item-name">

        {itemName}
    
      </div>

      <div className="cocktail-item-price item-price">
        <span>
          ${price}
        </span>
      </div>

      <div className="cocktail-item-notes item-notes">
        {notesElement}
      </div>

    </li>
  )
}


const PackagedBeer = ({beer}) => {
  return(
    <li className="menu-item packaged-beer-item" >
      <div className="packaged-name item-name">
        {item.name}
      </div>
      <div className="packaged-price item-price">
        ${/[.50]$/.test(beer.price) ? <>{beer.price.split(".")[0]}&#189;</> : <>{beer.price}</>}
      </div>
    </li>
  )
}