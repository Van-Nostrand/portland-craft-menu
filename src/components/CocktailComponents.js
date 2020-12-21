import React from "react";


export default React.forwardRef(function CocktailSection(props, ref){
  return (
    <section ref={ref} className={`cocktail-section`}>
      <div className={`cocktail-section-title section-title`}>
        Cocktails
      </div>
      <ul className={`cocktail-section-list section-list`}>
        {props.cocktails}
      </ul>
    </section>
  )
});

export const Cocktail = ({ itemName = "unnamed", price = "23", notes=""}) => {

  return(
    <li className="cocktail-item menu-item">
      <div className="cocktail-item-name item-name">
        {itemName}
      </div>
      <div className="cocktail-item-price item-price">
        ${price}
      </div>
      <div className="cocktail-item-notes item-notes">
        {notes}
      </div>
    </li>
  )
}