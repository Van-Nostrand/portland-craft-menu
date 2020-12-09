import React from "react";

export const PackagedBeerSection = ({beers}) => {
  return (
    <section className="packaged-beer-section">
      <div className="packaged-beer-section-title">
        Beer To-Go!
      </div>
      <p>
        Heading home? Take a few cans with you!
      </p>
      <p>
        (with food purchase - ask your server)
      </p>
      <ul className="packaged-beer-list">
        {beers}
      </ul>
    </section>
  )
}

export const PackagedBeer = ({name, price}) => {
  return(
    <li className="menu-item packaged-beer-item" >
      <div className="packaged-name item-name">
        {name}
      </div>
      <div className="packaged-price item-price">
        ${/[.50]$/.test(price) ? <>{price.split(".")[0]}&#189;</> : <>{price}</>}
      </div>
    </li>
  )
}