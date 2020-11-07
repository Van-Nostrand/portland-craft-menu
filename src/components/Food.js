import React from "react";

export const Food = ({ itemName = "unnamed", price = "23", notes="", logos }) => {

  const createDietString = ({dairyFree, glutenFree, nutFree, vegan, vegetarian}) => {
    let dietString = "";
    if(dairyFree) dietString = "dairy ";
    if(glutenFree) dietString = dietString + "gluten ";
    if(nutFree) dietString = dietString + "nut ";
    if(dairyFree || glutenFree || nutFree) dietString = dietString + "free";
    if(vegan){
      if(vegetarian){
        dietString = "vegetarian, " + dietString;
      }
      else {
        dietString = "vegan, " + dietString;
      }
    }
    return dietString;
  }

  let dietString = createDietString(logos);
  
  return(
    <li className="food-item">
      {/* <div className="test-element">test</div> */}

      <div className="item-name">
        {itemName}
      </div>

      <div className="item-price">
        <svg viewBox="0 0 12 12" >
          <circle cx="5" cy="5" r="5"/>
        </svg>
        <span>${price}</span>
      </div>

      <div className="item-notes smaller-text">
        {notes}
      </div>

      {/* <div className="item-diet-logos">
        {dietLogos}
      </div> */}
      <div className="diet-string">
        {dietString}
      </div>
    </li>
  )
}



// let dietLogos = <>
  //   {logos.glutenFree ? 
  //     <img 
  //       className="dietlogo" 
  //       src={logos.glutenFree} 
  //       alt="gflogo" /> : <></>}
  //   {logos.vegan ? 
  //     <img 
  //       className="dietlogo" 
  //       src={logos.vegan} 
  //       alt="veganlogo" /> : <></>}
  //   {logos.vegetarian ? 
  //     <img 
  //       className="dietlogo" 
  //       src={logos.vegetarian} 
  //       alt="vegetarianlogo" /> : <></>}
  //   {logos.nutFree ? 
  //     <img 
  //       className="dietlogo" 
  //       src={logos.nutFree} 
  //       alt="nutFreeLogo" /> : <></>}
  //   {logos.dairyFree ? 
  //     <img 
  //       className="dietlogo" 
  //       src={logos.dairyFree} 
  //       alt="dairyFreeLogo" /> : <></>}
  
  // </>;

  // let dietLogos = <>
  //   {logos.glutenFree ? 
  //     <span className="dietlogo" >gluten free</span> : <></>}
  //   {logos.vegan ? 
  //     <span className="dietlogo" >vegan</span> : <></>}
  //   {logos.vegetarian ? 
  //     <span className="dietlogo" >vegetarian</span> : <></>}
  //   {logos.nutFree ? 
  //     <span className="dietlogo">nut free</span> : <></>}
  //   {logos.dairyFree ? 
  //     <span className="dietlogo">dairy free</span> : <></>}
  
  // </>;

  // console.log(logos);