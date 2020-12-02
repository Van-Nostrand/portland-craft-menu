import React from "react";

export const PackagedBeer = ({items}) => {

  let listItems = items.map((item, i) => {
    return(
      <li key={`packaged-beer-${i}`}>
        <div className="packaged-name item-name">
          {item.name}
        </div>
        <div className="packaged-price item-price">
          ${/[.50]$/.test(item.price) ? <>{item.price.split(".")[0]}&#189;</> : <>{item.price}</>}
        </div>
      </li>
    );
  }); 

  console.log(items);

  return (

    <section className="packaged-beer">
      <div className="section__title">
        Beer to-go!
      </div>
      <p>Take some cans home with you!<br />(with the purchase of food)</p>
      <ul className="section__list">
        {listItems}
      </ul>
    </section>
  )
}