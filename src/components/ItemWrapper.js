import React from 'react';

export default function ItemWrapper({ name, price, section, children }) {
  const classPrefix = `${section}-item`;

  /**
   * conditionals?
   *  WINE - varietal, region, has multiple prices
   *  COCKTAIL - notes
   *  FOOD - notes, diet
   *  PACKAGEDBEER - has multiple prices
   *  LINEITEM - get rid of this
   */
  
  return (
    <li className={`${classPrefix} menu-item`}>
      <div className={`${classPrefix}-name item-name`}>
        {name}
      </div>
      
      <div className={`${classPrefix}-price item-price`}>
        ${ typeof(price) === Array ? price.join(' / $') : price }
      </div>

      {children}
    </li>
  )
}