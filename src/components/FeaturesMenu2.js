import React from "react";
import smileyface from "../assets/smileyfaceColor2.svg";

export const FeaturesMenu2 = ({menuData}) => {

  let items = menuData.map((item, i) => <LineItem name={item.name} prices={item.prices} key={`lineitem-${i}`} />);
 
  return(
    <>
      <div className="menu features">
        <section className="happy-hour">
          <div className="section__title">HAPPY HOUR DRINK FEATURES</div>
          <div className="section__hh-subtitle">4-6pm Tuesday - Thursday &middot; 3-6 pm Friday - Sunday</div>
          <ul className="section__list">
            {items}
          </ul>
          <div className="smiley-face-wrapper">
            <img src={smileyface} />
          </div>
        </section>
      </div>
    </>
  )
};

const LineItem = (props) => {
  return(
    <li className="hh-item">
      <div className="item-name">
        {props.name}
      </div>

      {props.prices.map((line, i) => {
        return (
          
          <span key={`linespan-${props.name}${i}`}>
            <svg className="item-dot" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="5"></circle>
            </svg>
            <div className="item-price">
              {line.price}
            </div>
            {line.size !== "" ? <div className="item-size">{line.size}</div> : "" }
          </span>
        )
      })}
    </li>
  )
}