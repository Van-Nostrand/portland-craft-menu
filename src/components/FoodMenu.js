import React from "react";

export const FoodMenu = ({vegetarianlogo, veganlogo, gflogo, menuData }) => {
  
    
  return(
    <>
      <div className="food-menu">

        <div className="food-menu__legend">
          <div className="food-menu__legend-item">
            <img src={vegetarianlogo} alt="vegetarianlogo" /> = vegetarian
          </div>
          <div className="food-menu__legend-item">
            <img src={veganlogo} alt="veganlogo" /> = vegan
          </div>
          <div className="food-menu__legend-item">
            <img src={gflogo} alt="gflogo" /> = gluten free
          </div>
        </div>

        <div className="food-menu__page-divider"></div>

        <div className="food-menu__section-wrapper">
          <MenuSection 
            section="starters and salads" 
            items={menuData["starters"]} 
            logos={{veganlogo, vegetarianlogo, gflogo}} />
        </div>

        <div className="food-menu__page-divider"></div>

        <div className="food-menu__section-wrapper">
          <MenuSection 
            section="burgers" 
            items={menuData["burgers"]} 
            logos={{veganlogo, vegetarianlogo, gflogo}} />
        </div>

        <div className="food-menu__page-divider"></div>

        <div className="food-menu__section-wrapper" >
          <MenuSection 
            section="mains" 
            items={menuData["mains"]} 
            logos={{veganlogo, vegetarianlogo, gflogo}} />
        </div>

        <div className="food-menu__page-divider"></div>

        <div className="food-menu__section-wrapper" >
          <section className="food-menu__section__dips">
            <div className="food-menu__section__dips-title">Dips!</div>
            <ul className="food-menu__section__dips-list">
              <li className="smaller-text">Garlic aioli</li>
              <li className="smaller-text">Smoked paprika aioli</li>
              <li className="smaller-text">Scallion aioli</li>
              <li className="smaller-text">Thai chili<img src={veganlogo} alt="veganlogo" /></li>
              <li className="smaller-text">Habenero (extra hot!)</li>
            </ul>
          </section>
        </div>
        <h2>get a portland growler to go, ask your server!</h2>
      
      </div>
    </>
  )
}
