import React from "react";
import smileyface from "../assets/smileyfaceColor2.svg";

export const FeaturesMenu = ({menuData}) => {

  let items = menuData.map((item, i) => <LineItem name={item.name} prices={item.prices} key={`lineitem-${i}`} />);
 
  return(
    <>
      <div className="menu features">
        <section className="happy-hour">
          <div className="section__title">
            Happy-Hour
          </div>
          <div className="section__hh-subtitle">
            <div className="hh-subtitle-time">
              4-6pm Tuesday - Thursday
            </div>
            
            <div className="hh-subtitle-time">
              3-6 pm Friday - Sunday
            </div>
          </div>
          <ul className="section__list">
            {items}
          </ul>
          
        </section>

        <section className="sunday-social">
          <div className="section__title">
            Sunday Social<span className="smaller-text">ly distanced</span>
          </div>
          <p>All-day on Sundays, 20 and 12 oz pours of local draught are $4.50!</p>

        </section>

        <div className="smiley-face-wrapper">
          <img src={smileyface} />
        </div>
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
      <span>
        {props.prices.map((line, i) => {
          return (
            <span key={`linespan-${props.name}${i}`}>
              
              <div className="item-price">
                ${line.price}
              </div>
              {line.size !== "" ? <div className="item-size">{line.size}</div> : "" }
            </span>
          )
        })}
      </span>
    </li>
  )
}