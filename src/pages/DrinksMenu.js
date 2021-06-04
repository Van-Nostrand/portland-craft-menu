import React from 'react';
import { PackagedBeerSection, PackagedBeer } from '../components/PackagedBeer';
import { Wine, WineSection } from '../components/Wine';
import { Cocktail, CocktailSection } from '../components/Cocktail';
import { NonAlcSection, NonAlcDrink } from '../components/NonAlcDrink';

export default function DrinksMenu({menuData}) {

  let redwines = menuData.RED_WINE.map((wine, j) => {
    return <Wine 
            itemName={wine.name}
            varietal={wine.varietal}
            style="red"
            sizes={wine.sizes}
            notes={wine.notes}
            key={`red-wine-${j}`} />
  });

  let whitewines = menuData.WHITE_WINE.map((wine, j) => {
    return <Wine 
            itemName={wine.name}
            varietal={wine.varietal}
            style="white"
            sizes={wine.sizes}
            notes={wine.notes}
            key={`white-wine-${j}`} />
  });

  let bubblies = menuData.BUBBLES.map((wine, j) => {
    return <Wine 
            itemName={wine.name}
            varietal={wine.varietal}
            style="bubbly"
            sizes={wine.sizes}
            notes={wine.notes}
            key={`bubbly-${j}`} />
  });

  let cocktails = menuData.HOUSE_COCKTAILS.map((cocktail, i) => {
    return <Cocktail
              itemName={cocktail.name}
              price={cocktail.price}
              notes={cocktail.notes} 
              key={`cocktail-${i}`} 
            />
  });

  let packagedBeer = menuData.PACKAGED_BEER.map((beer, i) => {
    return <PackagedBeer 
              name={beer.name} 
              price={beer.price}
              size={beer.size}
              key={`packaged-beer-${i}`} 
            />
  });

  let nonAlc = menuData.NON_ALCOHOLIC.map((drank, i) => {
    return <NonAlcDrink 
              name={drank.name}
              price={drank.price}
              notes={drank.notes}
              key={`nonalc-${i}`}
            />
  })

  return (
    <div className="menu drinks-menu">

        <PackagedBeerSection 
          beers={packagedBeer} 
        />

        <WineSection 
          sectionTitle="Red" 
          sectionSizeString="5oz, 8oz, bottle" 
          wines={redwines} 
        />

        <WineSection 
          sectionTitle="White" 
          sectionSizeString="5oz, 8oz, bottle" 
          wines={whitewines} 
        />

        <WineSection 
          sectionTitle="Bubbly" 
          sectionSizeString="5oz, bottle" 
          wines={bubblies} 
        />

        <CocktailSection
          cocktails={cocktails} 
        />

        <NonAlcSection 
          dranks={nonAlc}
        />
      
    </div>
  )
}