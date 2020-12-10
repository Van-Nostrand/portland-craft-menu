import React from "react";

export const PackagedBeerSection = ({beers}) => {
  return (
    <section className="packaged-beer-section">
      <div className="packaged-beer-section-title section-title">
        Beer To-Go!
      </div>
      <p>
        Heading home? Take a few cans with you!
      </p>
      <p>
        (with food purchase - ask your server)
      </p>
      <ul className="packaged-beer-section-list section-list">
        {beers}
      </ul>
    </section>
  )
}

export const PackagedBeer = ({name, price}) => {
  return(
    <li className="menu-item packaged-beer" >
      <div className="packaged-beer-name item-name">
        {name}
      </div>
      <div className="packaged-beer-price item-price">
        ${/[.50]$/.test(price) ? <>{price.split(".")[0]}&#189;</> : <>{price}</>}
      </div>
    </li>
  )
}