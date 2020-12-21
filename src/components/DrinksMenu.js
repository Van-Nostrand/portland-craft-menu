import React, { useState, useRef, useEffect } from "react";
import PackagedBeerSection, { PackagedBeer } from "./PackagedBeerComponents";
import WineSection, { Wine } from "./WineComponents";
import CocktailSection, { Cocktail } from "./CocktailComponents";
import { LiquorItem, LiquorSection } from "./LiquorComponents";
import { useCustomScrollRef } from "../hooks/useCustomScrollRef";

export const DrinksMenu = ({menuData}) => {
  const SCROLL_ALIASING = 50;

  let [ currentView, setCurrentView ] = useState("wine");
  let [ currentScroll, setCurrentScroll ] = useState(0);
  let wineRef = useRef();
  let cocktailRef = useRef();
  let packagedRef = useRef();

  useEffect(() => {
    const checkPosition = () => console.log(wineRef.current.getBoundingClientRect());
    const scrollChecking = () => { 
      if(window.scrollY > currentScroll + SCROLL_ALIASING || window.scrollY < currentScroll - SCROLL_ALIASING){
        setCurrentScroll(window.scrollY);
        console.log(window.scrollY);
      }
    }

    const showCurrentView = () => {
      let cocktailRefY = cocktailRef.current.getBoundingClientRect().y;
      let wineRefY = wineRef.current.getBoundingClientRect().y;
      let packagedRefY = packagedRef.current.getBoundingClientRect().y;
      if(cocktailRefY < 100 && cocktailRefY > -100){
        setCurrentView("cocktails");
      }
      else if(wineRefY < 100 && wineRefY > -100){
        setCurrentView("wine");
      }
      else if(packagedRefY < 100 && packagedRefY > -100){
        setCurrentView("packaged");
      }
    }
    window.addEventListener("scroll", showCurrentView);

    return(() => window.removeEventListener("scroll", showCurrentView));
  },[]);

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
              key={`cocktail-${i}`} />
  });

  let packagedBeer = menuData.PACKAGED_BEER.map((beer, i) => {
    return <PackagedBeer 
              name={beer.name} 
              price={beer.price}
              key={`packaged-beer-${i}`} />
  });

  let bourbon = menuData.BOURBON.map((bourbon, i) => {
    return <LiquorItem 
              name={bourbon.name}
              style={"bourbon"}
              single={bourbon.single}
              double={bourbon.double}
              key={`bourbon-${i}`} />
  });
  
  let rye = menuData.RYE.map((rye, i) => {
    return <LiquorItem 
              name={rye.name}
              style={"rye"}
              single={rye.single}
              double={rye.double}
              key={`rye-${i}`} />
  });

  let scotch = menuData.SCOTCH.map((scotch, i) => {
    return <LiquorItem 
              name={scotch.name}
              style={"scotch"}
              single={scotch.single}
              double={scotch.double}
              key={`scotch-${i}`} />
  });

  let otherWhiskey = menuData.OTHER_WHISKEY.map((otherWhiskey, i) => {
    return <LiquorItem 
              name={otherWhiskey.name}
              style={"other-whiskey"}
              single={otherWhiskey.single}
              double={otherWhiskey.double}
              key={`other-whiskey-${i}`} />
  });
  let gin = menuData.GIN.map((gin, i) => {
    return <LiquorItem 
              name={gin.name}
              style={"gin"}
              single={gin.single}
              double={gin.double}
              key={`gin-${i}`} />
  });
  let vodka = menuData.VODKA.map((vodka, i) => {
    return <LiquorItem 
              name={vodka.name}
              style={"vodka"}
              single={vodka.single}
              double={vodka.double}
              key={`vodka-${i}`} />
  });
  let tequila = menuData.TEQUILA.map((tequila, i) => {
    return <LiquorItem 
              name={tequila.name}
              style={"tequila"}
              single={tequila.single}
              double={tequila.double}
              key={`tequila-${i}`} />
  });
  let otherSpirits = menuData.OTHER_SPIRITS.map((otherspirits, i) => {
    return <LiquorItem 
              name={otherspirits.name}
              style={"other-spirits"}
              single={otherspirits.single}
              double={otherspirits.double}
              key={`other-spirits-${i}`} />
  });

  return (
    <div className="menu drinks-menu">

        <WineSection 
          sectionTitle="Red" 
          ref={wineRef}
          sectionSizeString="5oz, 8oz, bottle" 
          wines={redwines} />

        <WineSection 
          sectionTitle="White" 
          ref={null}
          sectionSizeString="5oz, 8oz, bottle" 
          wines={whitewines} />

        <WineSection 
          sectionTitle="Bubbly" 
          ref={null}
          sectionSizeString="5oz, bottle" 
          wines={bubblies} />

        <CocktailSection
          ref={cocktailRef}
          cocktails={cocktails} />

        <PackagedBeerSection 
          ref={packagedRef}
          beers={packagedBeer} />

        <LiquorSection 
          sectionTitle={"Bourbon"}
          sectionSizeString={"1oz, 2oz"}
          items={bourbon} />
        
        <LiquorSection 
          sectionTitle={"Rye"}
          sectionSizeString={"1oz, 2oz"}
          items={rye} />

        <LiquorSection 
          sectionTitle={"Scotch"}
          sectionSizeString={"1oz, 2oz"}
          items={scotch} />

        <LiquorSection 
          sectionTitle={"Other Whiskey"}
          sectionSizeString={"1oz, 2oz"}
          items={otherWhiskey} />

        <LiquorSection 
          sectionTitle={"Gin"}
          sectionSizeString={"1oz, 2oz"}
          items={gin} />

        <LiquorSection 
          sectionTitle={"Vodka"}
          sectionSizeString={"1oz, 2oz"}
          items={vodka} />

        <LiquorSection 
          sectionTitle={"Tequila"}
          sectionSizeString={"1oz, 2oz"}
          items={tequila} />

        <LiquorSection 
          sectionTitle={"Other Spirits"}
          sectionSizeString={"1oz, 2oz"}
          items={otherSpirits} />
      
    </div>
  )
}