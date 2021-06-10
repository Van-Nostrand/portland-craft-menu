import React from 'react';
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
          <div className={`${section}-item-notes item-notes`}>
            {item.notes}
          </div>

          <div className={`${section}-item-diet item-diet`}>
            {item.diet}
          </div>
        </ItemWrapper>
      )
    )
  }

  return(
    <div className="food-menu menu">
      <p>All items are nut-free unless specified</p>

      <SectionWrapper 
        sectionClassName="food-section snacks"
        title="Snacks"
      >
        <ul className="item-list">
          { getFoodItems(menuData.SNACKS, 'snack') }
        </ul>
      </SectionWrapper>

      <SectionWrapper
        sectionClassName="food-section smallplates"
        title="Small Plates"
      >
        <ul className="item-list">
          { getFoodItems(menuData.SMALL_PLATES, 'smallplate') }
        </ul>
      </SectionWrapper>

      <SectionWrapper 
        sectionClassName="food-section burgers"
        title="Burgers"
      >
        { burgerAddons }
        <ul className="item-list">
          { getFoodItems(menuData.BURGERS, 'burger') }
        </ul>
      </SectionWrapper>

      <SectionWrapper 
        sectionClassName="food-section pizza"
        title="Pizza"
      >
        <ul className="item-list">
          { getFoodItems(menuData.PIZZA, 'pizza') }
        </ul>
      </SectionWrapper>
    

      <SectionWrapper
        sectionClassName="food-section largeplates"
        title="Large Plates"
      >
        <ul className="item-list">
          { getFoodItems(menuData.LARGE_PLATES, 'largeplate') }
        </ul>
      </SectionWrapper>
      
      <SectionWrapper 
        sectionClassName="food-section sweets"
        title="Sweets"
      >
        <ul className="item-list">
          { getFoodItems(menuData.SWEETS, 'sweet') }
        </ul>
      </SectionWrapper>

      <SectionWrapper
        sectionClassName="food-section sides"
        title="Sides"
      >
        <ul className="item-list">
          { getFoodItems(menuData.SIDES, 'side') }
        </ul>
      </SectionWrapper>

    </div>
  );
}

const burgerAddons = (
  <div className="burger-addons">
    <div className="burger-addons-title">
      Sides & Extras
    </div>
    <div className="burger-addons-options">
      <div>Fries • $5</div>
      <div>Soup • $5</div>
      <div>Green Salad • $4</div>
      <div>Parmesan Truffle Fries • $6</div>
      <div>Poutine • $7</div>
      <div>Sub gluten-free bun • $1</div>
      <div>Cheese • $1</div>
      <div>Bacon • $2</div>
      <div>Beef Patty • $7</div>
      <div>Chicken breast (grilled or fried) • $6</div>
    </div>
  </div>
)