import React from 'react';
import { PackagedBeerSection, PackagedBeer } from '../components/PackagedBeer';
import { Wine, WineSection } from '../components/Wine';
import { Cocktail, CocktailSection } from '../components/Cocktail';
import { NonAlcSection, NonAlcDrink } from '../components/NonAlcDrink';
import SectionWrapper from '../components/SectionWrapper';
import ItemWrapper from '../components/ItemWrapper';

export default function DrinksMenu({menuData}) {

  const getWineItems = ( itemArray, section ) => {
    return (
      itemArray.map((item, i) => {
        return (
          <ItemWrapper
            key={`${section}${i}`} 
            name={item.name}
            price={item.price}
            section={section}
          >
            { item.varietal ? 
              <div className="wine-item-varietal">
                {item.varietal}
              </div>
              : <></>
            }

            <div className="wine-item-region">
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
            <div className="cocktail-notes">
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
    <div className="menu drinks-menu">

        <SectionWrapper
          sectionClassName="drink-section packaged-section"
          title="Beers To Go"
        >
          { getItems(menuData.PACKAGED_BEER, 'packaged') }
        </SectionWrapper>

        <SectionWrapper
          sectionClassName="drink-section wine-section red-wine-section"
          title="Red"
        >
          <div className="wine-sizes">
            5oz, 8oz, bottle
          </div>
          { getWineItems(menuData.RED_WINE, 'redwine') }
        </SectionWrapper>
        
        <SectionWrapper
          sectionClassName="drink-section wine-section white-wine-section"
          title="White"
        >
          <div className="wine-sizes">
            5oz, 8oz, bottle
          </div>
          { getWineItems(menuData.WHITE_WINE, 'whitewine') }
        </SectionWrapper>
        
        <SectionWrapper
          sectionClassName="drink-section wine-section bubbly-wine-section"
          title="Bubbly"
        >
          <div className="wine-sizes">
            5oz, bottle
          </div>
          { getWineItems(menuData.BUBBLES, 'bubbles') }
        </SectionWrapper>
        
        <SectionWrapper
          sectionClassName="drink-section cocktail-section"
          title="Cocktails"
        >
          { getCocktails(menuData.HOUSE_COCKTAILS, 'cocktails') }
        </SectionWrapper>

        <SectionWrapper
          sectionClassName="drink-section non-alcoholic-section"
          title="Non Alcoholic"
        >
          { getItems(menuData.NON_ALCOHOLIC, 'nonalc') }
        </SectionWrapper>
      
    </div>
  )
}