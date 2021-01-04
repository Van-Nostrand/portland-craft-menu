import React, {useState, useEffect} from "react";

import {apiCall} from "../service/api";

export const ApiTest = () => {

  let [ results, setResults ] = useState();

  const fetchMenu = async () => {
    try{
      let apiResults = await apiCall("get", "/api/");
      setResults(apiResults);
    } catch(err){
      alert("throwing error")
      console.log(err);
    }
  }

  useEffect(() => {
    
    fetchMenu();
  }, []);

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
  
  let currentPage = <div>Console!</div>
  
  return(
    <>
      {currentPage}
      {foodMenuItems}
      {beerMenuItems}
    </>
  )
}
