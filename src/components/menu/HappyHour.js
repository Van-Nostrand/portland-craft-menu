import React from "react";
import smileyface from "../../assets/smileyfaceColor2.svg";


export const HappyHour = ({menuData}) => {

  let drinks = menuData[0].map((item, i) => <LineItem name={item.name} prices={item.prices} key={`lineitem-${i}`} />);
  let food = menuData[1].map((item, i) => <Food itemName={item.name} price={item.price} notes={item.notes} key={`hh-food-${i}`} />);
 
  return(
    <>
      <div className="menu happy-hour-page">
        <section className="happy-hour-section">
          <div className="section__title">
            Happy-Hour!
          </div>
          <div className="section__hh-subtitle">
            <div className="hh-subtitle-time">
              4-6pm<br />Tuesday - Thursday
            </div>
            
            <div className="hh-subtitle-time">
              3-6pm<br/>Friday - Sunday
            </div>
          </div>
          <div className="hh-food-title">
            Happy-Hour Food Features
          </div>
          <ul className="hh-food-list">
            {food}
          </ul>
          <div className="hh-drinks-title">
            Happy-Hour Drink Features
          </div>
          <ul className="hh-drinks-list">
            {drinks}
          </ul>
          
        </section>

        <section className="sunday-social-section">
          <div className="section__title">
            <span>
              Sunday Social
            </span>
            <span className="small-title">
              ly distanced
            </span>
          </div>
          <p>All-day on Sundays, 20 and 12 oz pours of a select local lager or pilsner are $4.50!</p>

        </section>

        <div className="smiley-face-wrapper">
          <img src={smileyface} />
        </div>
      </div>
    </>
  )
};

const LineItem = (props) => {

  let pricestring = "";
  let sizestring = "";

  //this processes items which have multiple prices and pour sizes
  props.prices.forEach((line, i) => {
    pricestring = `${pricestring}$${line.price}`;
    sizestring = sizestring + line.size;


    if(props.prices.length - 1 !== i){
      pricestring = pricestring + " / ";
      sizestring = sizestring + "/";
    }
  })

  return(
    <li className="hh-item">
      <div className="item-name">
        {props.name}
      </div>
      <span>
        <div className="item-price">
          {pricestring}
        </div>
        <div className="item-size">
          {sizestring !== "" ? ` (${sizestring})` : ""}
        </div>
      </span>
    </li>
  )
}


const Food = ({ itemName = "unnamed", price = "23", notes="", diet = "" }) => {
  let itemNotes, dietDiv;

  if(notes === ""){
    itemNotes = <></>;
  } 
  else {
    itemNotes = 
      <div className="item-notes smaller-text">
        {notes}
      </div>;
  }

  if(diet === ""){
    dietDiv = <></>;
  } 
  else {
    dietDiv = 
      <div className="diet">
        {diet}
      </div>;
  }

  return(
    <li className="food-item menu-item">

      <div className="item-name">
        {itemName}
      </div>

      <div className="item-price">
        <span>
          ${price}
        </span>
      </div>

      {itemNotes}
      {dietDiv}
      
    </li>
  )
}