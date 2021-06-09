import * as React from 'react';
import { Food } from '../components/Food';
import SectionWrapper from '../components/SectionWrapper';
import ItemWrapper from '../components/ItemWrapper';

export default function FoodMenu({ menuData }) {

  const getFoodItems = ( foodArray, section ) => {
    return (
      foodArray.map((item, i) => 
        <ItemWrapper
          key={`${section}${i}`} 
          name={item.name} 
          price={item.price}
          section={section} 
        >
          <div className={"food-item-notes"}>
            {item.notes}
          </div>

          <div className="food-item-diet">
            {item.diet}
          </div>
        </ItemWrapper>
      )
    )
  }

  return(
    <>
      <p>All items are nut-free unless specified</p>
      <div className="food-menu menu">

        <SectionWrapper 
          sectionClassName="food-section snacks"
          title="Snacks"
        >
          { getFoodItems(menuData.SNACKS, 'snack') }
        </SectionWrapper>

        <SectionWrapper
          sectionClassName="food-section smallplates"
          title="Small Plates"
        >
          { getFoodItems(menuData.SMALL_PLATES, 'smallplate') }
        </SectionWrapper>

        <SectionWrapper 
          sectionClassName="food-section burgers"
          title="Burgers"
        >
          { getFoodItems(menuData.BURGERS, 'burger') }
        </SectionWrapper>

        <SectionWrapper 
          sectionClassName="food-section pizza"
          title="Pizza"
        >
          { getFoodItems(menuData.PIZZA, 'pizza') }
        </SectionWrapper>
     

        <SectionWrapper
          sectionClassName="food-section largeplates"
          title="Large Plates"
        >
         { getFoodItems(menuData.LARGE_PLATES, 'largeplate') }
        </SectionWrapper>
        
        <SectionWrapper 
          sectionClassName="food-section sweets"
          title="Sweets"
        >
          { getFoodItems(menuData.SWEETS, 'sweet') }
        </SectionWrapper>

        <SectionWrapper
          sectionClassName="food-section sides"
          title="Sides"
        >
          { getFoodItems(menuData.SIDES, 'side') }
        </SectionWrapper>

      </div>
    </>
  );
}