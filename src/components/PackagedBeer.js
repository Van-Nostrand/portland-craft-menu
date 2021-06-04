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

export const PackagedBeer = ({name, price, size}) => {

  let prices = price.map((p, i) => {
    if(i === 0) return <div key={`togo${name}price${i}`}>single {size} can: ${p}</div>;
    if(i === 1) return <div key={`togo${name}price${i}`}>4 pack: ${p}</div>;
  })
  return(
    <li className="menu-item packaged-beer" >
      <div className="packaged-beer-name item-name">
        {name}
      </div>
      <div className="packaged-beer-price item-price">
        {prices}
      </div>
    </li>
  )
}