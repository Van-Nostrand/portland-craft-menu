import React from 'react';
import smileyface from '../assets/smileyfaceColor2.svg';
import ItemWrapper from '../components/ItemWrapper';
import SectionWrapper from '../components/SectionWrapper';

export default function HappyHour({ menuData }) {

  const getItems = ( itemArray, section ) => {
    return (
      itemArray.map((item, i) => {
        return (
          <ItemWrapper 
            key={`${section}${i}`}
            name={item.name}
            price={item.price}
            section={section}
          >

          </ItemWrapper>
        )
      })
    )
  }
 
  return (
    <div className="happy-hour-menu menu ">
      <SectionWrapper
        sectionClassName="happy-hour-section"
        title="Happy-Hour!"
      >
        <div className="happy-hour-time">
          3-5pm<br />Every Day
        </div>

        <SectionWrapper
          sectionClassName="happy-hour-section-food"
          title="Happy-Hour Food Features"
        >
          { getItems(menuData.HAPPY_HOUR_FOOD, "happy-hour-food") } 
        </SectionWrapper>

        <SectionWrapper
          sectionClassName="happy-hour-section-drinks"
          title="Happy-Hour Drink Features"
        >
          { getItems(menuData.HAPPY_HOUR, "happy-hour-drinks") }
        </SectionWrapper>

      </SectionWrapper>

      <SectionWrapper
        sectionClassName="sunday-social-section"
        title="Sunday Social"
      >
        <p>All-day on Sundays, 20 and 12 oz pours of a select local lager or pilsner are $4.50!</p>
      </SectionWrapper>

      <div className="smiley-face-wrapper">
        <img src={smileyface} />
      </div>
    </div>
  )
};
