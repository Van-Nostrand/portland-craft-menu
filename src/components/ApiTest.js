import React, {useState, useEffect} from "react";

import {apiCall} from "../service/api";

export const ApiTest = () => {

  let [ results, setResults ] = useState();
  let [ menuData, setMenuData ] = useState([]);
  let [ beerItems, setBeerItems ] = useState([]);
  let [ foodItems, setFoodItems ] = useState([]);

  const fetchMenu = async () => {
    try{
      let apiResults = await apiCall("get", "/api/");
      setResults(apiResults);
    } catch(err){
      alert("throwing error")
      console.log(err);
    }
  }

  const sortMenuData = () => {
    let foodMenuData = [];
    let beerMenuData = [];

    if(results){
      let keys = Object.keys(results);

      keys.forEach((key, i) => {
        if(results[key].itemType === "food"){
          foodMenuData.push(results[key]);
        }
        else if(results[key].itemType === "beer"){
          beerMenuData.push(results[key]);
        }
        else if(!results[key].itemType || (results[key].itemType !== "food" && results[key].itemType !== "beer")){
          console.log("Error with imported data");
        }
      });
    }
    setMenuData([foodMenuData, beerMenuData])
  }

  
  const setHTMLItems = () => {

    let foodMenuItems = [];
    let beerMenuItems = [];

    if(results){
      let keys = Object.keys(results);

      keys.forEach((key, i) => {
        if(results[key].itemType === "food"){
          foodMenuItems.push(
            <li key={`food-item-${i}`}>
              <div>{results[key].name}</div>
              <div>{results[key].price}</div>
              <div>{results[key].notes}</div>
              <div>{results[key].diet}</div>
            </li>
          )
        }
        else if(results[key].itemType === "beer"){
          beerMenuItems.push(
            <li key={`beer-item-${i}`}>
              <div>{results[key].name}</div>
              <div>{results[key].pour1}</div>
              <div>{results[key].pour1price}</div>
              <div>{results[key].pour2}</div>
              <div>{results[key].pour2price}</div>
              <div>{results[key].pour3}</div>
              <div>{results[key].pour3price}</div>
            </li>
          )
        }
        else if(!results[key].itemType || (results[key].itemType !== "food" && results[key].itemType !== "beer")){
          console.log("Error with imported data");
        }
      });
    }

    setBeerItems(beerMenuItems);
    setFoodItems(foodMenuItems);
  }

  useEffect( async () => {
    try{
      await fetchMenu();
      setHTMLItems();
    } catch(err){

    }
    
  }, []);
  
  return menuData;
}
