import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import ItemWrapper from '../components/ItemWrapper';

export default function DrinksMenu({menuData}) {

  const getWineItems = ( itemArray, section ) => {
    return (
      itemArray.map((item, i) => {
        return (
          <ItemWrapper
            key={`${section}${i}`} 
            name={`${item.name} ${item.varietal || ""}`}
            price={item.price}
            section={section}
          >
            {/* { item.varietal ? 
              <div className="wine-item-varietal">
                {item.varietal}
              </div>
              : <></>
            } */}

            <div className={`${section}-item-region wine-item-region`}>
              {`(${item.notes})`}
            </div>

          </ItemWrapper>
        )
      })
    )
  }

  const getCocktails = ( itemArray, section ) => {
    return (
      itemArray.map((item, i) => {
        return (
          <ItemWrapper
            key={`${section}${i}`} 
            name={item.name}
            price={item.price}
            section={section}
          >
            <div className="cocktail-notes item-notes">
              {item.notes}
            </div>
          </ItemWrapper>
        )
      })
    )
  }
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
    <div className="drinks-menu menu">

        <SectionWrapper
          sectionClassName="drink-section packaged-section"
          title="Beers To Go"
        >
          <div className="packaged-formats">single can / 4 pack</div>
          <ul className="item-list">
            { getItems(menuData.PACKAGED_BEER, 'packaged') }
          </ul>
        </SectionWrapper>

        <SectionWrapper
          sectionClassName="drink-section wine-section red-wine-section"
          title="Red"
        >
          <div className="wine-sizes">
            5oz, 8oz, bottle
          </div>
          <ul className="item-list">
            { getWineItems(menuData.RED_WINE, 'redwine') }
          </ul>
        </SectionWrapper>
        
        <SectionWrapper
          sectionClassName="drink-section wine-section white-wine-section"
          title="White"
        >
          <div className="wine-sizes">
            5oz, 8oz, bottle
          </div>
          <ul className="item-list">
            { getWineItems(menuData.WHITE_WINE, 'whitewine') }
          </ul> 
        </SectionWrapper>
        
        <SectionWrapper
          sectionClassName="drink-section wine-section bubbly-wine-section"
          title="Bubbly"
        >
          <div className="wine-sizes">
            5oz, bottle
          </div>
          <ul className="item-list">
            { getWineItems(menuData.BUBBLES, 'bubbles') }
          </ul>
        </SectionWrapper>
        
        <SectionWrapper
          sectionClassName="drink-section cocktail-section"
          title="Cocktails"
        >
          <ul className="item-list">
            { getCocktails(menuData.HOUSE_COCKTAILS, 'cocktail') }
          </ul>
        </SectionWrapper>

        <SectionWrapper
          sectionClassName="drink-section non-alcoholic-section"
          title="Non Alcoholic"
        >
          <ul className="item-list">
            { getItems(menuData.NON_ALCOHOLIC, 'nonalc') }
          </ul>
        </SectionWrapper>
      
    </div>
  )
}