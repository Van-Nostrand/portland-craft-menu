import React from "react";

export const NonAlcSection = ({dranks}) => {
  return (
    <section className="drink-section non-alc-section">
      <div className="non-alc-section-title section-title">
        Non-Alcoholic drinks
      </div>
      <ul className="non-alc-section-list section-list">
        {dranks}
      </ul>
    </section>
  )
}

export const NonAlcDrink = ({name, price}) => {

  return(
    <li className="menu-item non-alc" >
      <div className="non-alc-name item-name">
        {name}
      </div>
      <div className="non-alc-price item-price">
        {price}
      </div>
    </li>
  )
}