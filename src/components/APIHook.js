import {useState, useEffect} from "react";
import axios from "axios";

export const APIHook = (address = 'api/') => {
  let [ menuData, setMenuData ] = useState();

  const fetchMenu = async () => {
    try{
      let menuData = await apiCall("get", address);
      let foodMenuData = [];
      let beerMenuData = [];

      let keys = Object.keys(menuData);

      keys.forEach((key, i) => {
        if(menuData[key].itemType === "food"){
          foodMenuData.push(menuData[key]);
        }
        else if(menuData[key].itemType === "beer"){
          beerMenuData.push(menuData[key]);
        }
        else if(!menuData[key].itemType || (menuData[key].itemType !== "food" && menuData[key].itemType !== "beer")){
          console.log("Error with imported data");
        }
      });
      setMenuData([foodMenuData, beerMenuData]);

    } catch(err){
      console.log(err);
    }
  }

  useEffect( async () => {
    try{
      await fetchMenu();
    } catch(err){
      console.log(err);
    }
    
  }, []);
  
  return menuData;
}

function apiCall(method, path, data){
  return new Promise((resolve, reject) => {
    return axios({
      method: method.toLowerCase(),
      url: path,
      data: {...data}
    })
      .then(res => {
        return resolve(res.data)
      }).catch(err => {
        return reject(err.response.data.error);
      });
  })
}