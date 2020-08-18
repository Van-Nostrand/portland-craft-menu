import React, {Component} from "react";
import {MenuItem} from "./MenuItem";

export default class MenuItemWrapper extends Component{
  constructor(props){
    super(props);

    const menuData = {
      starters: [
        {name: "fries", price: "6", notes: "they're fries"},
        {name: "poutine", price: "12", notes: "fries, but actually french"},
        {name: "green beans", price: "11", notes: "fun fact: beans are made of brussel sprouts!"},
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
    this.state = {
      menuData
    }
  }

  render(){
    let menuItems = Object.keys(this.state.menuData).map((key, i) => {
      return this.state.menuData[key].map((item, j) => {
        return <MenuItem name={item.name} price={item.price} notes={item.notes} key={`menu-item-${i}-${j}`} />
      });
    });

    return(
      <ul className="menu-item-wrapper">
        {menuItems}
      </ul>
    );
  }
}
