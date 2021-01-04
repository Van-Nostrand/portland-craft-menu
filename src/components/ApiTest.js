import React, {useState, useEffect} from "react";

import {apiCall} from "../service/api";

export const ApiTest = () => {

  let [ results, setResults ] = useState();

  

  const fetchMenu = async () => {
    try{
      let apiResults = await apiCall("get", "/beer");
      setResults(apiResults);
    } catch(err){
      alert("throwing error")
      console.log(err);
    }
  }

  useEffect(() => {
    fetchMenu();
  }, []);

  console.log(results);
  let currentPage = <div>Console!</div>
  
  return(
    <>
      {currentPage}
    </>
  )
}
