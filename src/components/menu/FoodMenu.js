import React from "react";
import { FoodSection } from "../items/FoodComponents";

export const FoodMenu = ({ menuData, externalData }) => {


  let featureItems = [], 
      snackItems = [], 
      herbivores = [],
      omnivores = [], 
      largePlates = [], 
      sweets = [], 
      sides = [];
  externalData.forEach(item => {
    switch(true){
      case /side/.test(item.menuSection): sides.push(item);
        break;
      case /start/.test(item.menuSection): snackItems.push(item);
        break;
      case /small/.test(item.menuSection): 
        if(/^vegetarian/.test(item.diet) || /^vegan/.test(item.diet)){
          herbivores.push(item);
        }
        else{
          omnivores.push(item);
        }
        break;
      case /large/.test(item.menuSection): largePlates.push(item);
        break;
      case /dessert/.test(item.menuSection): sweets.push(item);
        break;
      case /feature/.test(item.menuSection): featureItems.push(item);
        break;
      default: console.log(`problem sorting data in foodmenu while processing ${item.name}`);
    }
  });

  return(<>
    <div className="food-menu menu">
      <p>All items are nut-free unless specified</p>

      <FoodSection 
        section="Features" 
        items={featureItems} />

      <FoodSection 
        section="Snacks" 
        items={snackItems} />

      <FoodSection
        section="Omnivores"
        items={omnivores} />

      <FoodSection
        section="Herbivores"
        items={herbivores} />
      
      <FoodSection 
        section="Large Plates" 
        items={largePlates} />

      <FoodSection 
        section="Sweets" 
        items={sweets} />
      
      <FoodSection 
        section="Sides" 
        items={sides} />

    </div>
  </>);
}


// const FoodSection = ({section, items}) => {

//   let foods = items.map((item, i) => {
    
//     return <Food 
//               itemName={item.name} 
//               price={item.price} 
//               notes={item.notes}
//               diet={item.diet}
//               key={`${section}-item-${i}`} />
//   });
  
//   let classString = `food-section ${section.toLowerCase().split(" ").join("")}`;

//   return(
//     <section className={classString}>
//       <div className="section__title">
//         {section}
//       </div>
//       <ul className="section__list">
//         {foods}
//       </ul>
//     </section>
//   );
// }



// const Food = ({ itemName = "unnamed", price = "23", notes="", diet = "" }) => {
//   let itemNotes, dietDiv;

//   if(notes === ""){
//     itemNotes = <></>;
//   } 
//   else {
//     itemNotes = 
//       <div className="item-notes smaller-text">
//         {notes}
//       </div>;
//   }

//   if(diet === ""){
//     dietDiv = <></>;
//   } 
//   else {
//     dietDiv = 
//       <div className="diet">
//         {diet}
//       </div>;
//   }

//   return(
//     <li className="food-item menu-item">

//       <div className="item-name">
//         {itemName}
//       </div>

//       <div className="item-price">
//         <span>
//           ${price}
//         </span>
//       </div>

//       {itemNotes}
//       {dietDiv}
      
//     </li>
//   )
// }