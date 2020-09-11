import React from "react";

export const FeaturesSection = (props) => {

 
  return(
    <>
      <div className="menu features">
        <section className="happy-hour">
          <div className="section__title">HAPPY HOUR DRINK FEATURES</div>
          <div className="section__hh-subtitle">4-6pm Tuesday - Thursday &middot; 3-6 pm Friday - Sunday</div>
          <ul className="section__list">

            <li className="hh-item">
              <div className="item-name">
                Select US Craft Beer
              </div>
              <svg className="item-dot" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5"></circle>
              </svg>
              <div className="item-price">
                5.75
              </div>
              <div className="item-size">
                (14oz)
              </div>
            </li>
            
            <li className="hh-item">
              <div className="item-name">
                Select Local Draught Beer
              </div>
              <svg className="item-dot" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5"></circle>
              </svg>
              <div className="item-price">
                4
              </div>
              <div className="item-size">
                (12oz)
              </div>
              <svg className="item-dot" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5"></circle>
              </svg>
              <div className="item-price">
                5
              </div>
              <div className="item-size">
                (20oz)
              </div>
            </li>
            
            <li className="hh-item">
              <div className="item-name">
                House Red, White, & Rose Wine
              </div>
              <svg className="item-dot" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5"></circle>
              </svg>
              <div className="item-price">
                5.50
              </div>
              <div className="item-size">
                (5oz)
              </div>
              <svg className="item-dot" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5"></circle>
              </svg>
              <div className="item-price">
                9
              </div>
              <div className="item-size">
                (8oz)
              </div>
            </li>
            
            <li className="hh-item">
              <div className="item-name">
                Aperol Spritz & Moscow Mule
              </div>
              <svg className="item-dot" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5"></circle>
              </svg>
              <div className="item-price">
                9
              </div>
            </li>
            
            <li className="hh-item">
              <div className="item-name">
                Select Single/Double Highballs
              </div>
              <svg className="item-dot" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5"></circle>
              </svg>
              <div className="item-price">
                5/7.50
              </div>
            </li>
            
            <li className="hh-item">
              <div className="item-name">
                Jameson
              </div>
              <svg className="item-dot" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5"></circle>
              </svg>
              <div className="item-price">
                4.50
              </div>
            </li>

          </ul>
        </section>
      </div>
    </>
  )
};