import * as React from 'react';
import { FoodSection, Food } from '../components/Food';
import SectionWrapper from '../components/SectionWrapper';

export default function FoodMenu({ menuData }) {

  const getFoodItems = (foodArray, keystring) => {
    return (
      foodArray.map((item, i) => 
        <Food 
          key={`${keystring}${i}`} 
          name={item.name} 
          price={item.price} 
          notes={item.notes} 
          diet={item.diet} 
        />)
    )
  }

  return(
    <>
      <p>All items are nut-free unless specified</p>
      <div className="food-menu menu">
      #f6f5f4

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