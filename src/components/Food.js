import * as React from 'react';

export const Food = ({ name, price, priceClass, notes, notesClass, diet, dietClass }) => {

  return(
    <li className="food-item menu-item">

      <div className="item-name">
        {name}
      </div>

      { price !== "" ? 
        <div className={priceClass ? `item-price ${priceClass}` : 'item-price'}>
          {price}
        </div>
        : <></>
      }

      { notes !== "" ? 
        <div className={notesClass ? `item-notes ${notesClass}` : 'item-notes'}>
          {notes}
        </div>
        : <></>
      }

      { diet !== "" ? 
        <div className={dietClass ? `item-diet ${dietClass}`: "item-diet"}>
          {diet}
        </div>
        : <></>
      }
      
    </li>
  )
}