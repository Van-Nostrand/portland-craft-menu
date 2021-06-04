import * as React from 'react';


export const FoodSection = ({section, items}) => {

  let foods = items.map((item, i) => {
    
    return <Food 
              itemName={item.name} 
              price={item.price} 
              notes={item.notes}
              diet={item.diet}
              key={`${section}-item-${i}`} />
  });
  
  let classString = `food-section ${section.toLowerCase().split(" ").join("")}`;
  // section = section.toUpperCase();

  return(
    <section className={classString}>
      <div className="section__title">
        {section}
      </div>

      {
        section == "Burgers" ? 
          <div className="burger-addons">
            <div className="burger-addons-title">
              Burger add-ons
            </div>
            <div className="burger-addons-options">
              <div>Gluten-free Bun • $1</div>
              <div>Fries • $4</div>
              <div>Parmesan Truffle Fries • $6</div>
              <div>Poutine • $7</div>
              <div>Gravy • $2</div>
              <div>Cheese • $2½</div>
              <div>Bacon • $2</div>
            </div>
          </div>
        : <></>
      }
      
      <ul className="section__list">
        {foods}
      </ul>
      
    </section>
  );
}


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