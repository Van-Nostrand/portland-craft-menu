import React from "react";

export const Cocktail = ({ itemName = "unnamed", price = "23", notes=""}) => {

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

export const CocktailSection = ({cocktails}) => {
  return (
    <section className={`cocktail-section`}>
      <div className={`cocktail-section-title`}>
        Cocktails
      </div>
      <ul className={`cocktail-list`}>
        {cocktails}
      </ul>
    </section>
  )
}