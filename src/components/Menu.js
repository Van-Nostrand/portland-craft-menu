import React from "react";

const Menu = (props) => {

  const menuData = {
    starters: [
      {name: "fries", price: "6", notes: "they're fries"},
      {name: "poutine", price: "12", notes: "fries, but actually french"},
      {name: "green beans", price: "11", notes: "made of brussel sprouts"},
      {name: "soup", price: "6", notes: "literally a kitchen sink"},
      {name: "popcorn", price: "3", notes: "corn that parties"}
    ],
    burgers: [
      {name: "beef", price: "13", notes: "its a burger"},
      {name: "veggie", price: "13", notes: "its a burger for cows"},
      {name: "chicken", price: "13", notes: "its a burger but with more bread"},
      {name: "falafel", price: "10", notes: "its NOT a burger"}
    ],
    mains: [
      {name: "steak", price: "20", notes: "its a steak"},
      {name: "fried chicken", price: "20", notes: "like the burger but with less bread"},
      {name: "pork loin", price: "20", notes: "its a steak from a pig"}
    ]
  }

  let {starters, burgers, mains} = menuData;
  starters = starters.map((item, i)=> {
    return(
      <MenuItem key={`menu-item-starters-${i}`} name={item.name} price={item.price} notes={item.notes} />
    );
  });

  burgers = burgers.map((item, i)=> {
    return(
      <MenuItem key={`menu-item-burgers-${i}`} name={item.name} price={item.price} notes={item.notes} />
    );
  });

  mains = mains.map((item, i)=> {
    return(
      <MenuItem key={`menu-item-mains-${i}`} name={item.name} price={item.price} notes={item.notes} />
    );
  });

  return(
    <div id="menu">
      <div className="page-divider"></div>
      <div className="menu-section-wrapper">
        {starters}
      </div>
      <div className="page-divider"></div>
      <div className="menu-section-wrapper">
        {burgers}
      </div>
      <div className="page-divider"></div>
      <div className="menu-section-wrapper">
        {mains}
      </div>
    </div>
  )
}

const MenuItem = ({name, price, notes}) => {
  return (
    <div className="menu-item">
      <div className="menu-item-name">{name}</div>
      <div className="menu-item-price">{price}</div>
      <div className="menu-item-notes">{notes}</div>
    </div>
  )
}

export default Menu;