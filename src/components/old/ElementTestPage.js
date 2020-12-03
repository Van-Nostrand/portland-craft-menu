import React from "react";
import blkwhitelogo from "../assets/portlandlogoWHITE.svg";


export const ElementTestPage = (props) => {

  let style = {
    paddingTop: "15rem",
    display: "flex",
    justifyContent: "center",
    flexFlow: "column",
    alignItems: "center"
  }

  let innerstyle ={
    padding: "3rem",
    color: "#bd141b",
    fontSize: "18rem",
    fontWeight: "1000",
    // textShadow: "0.3rem 0.3rem #a33236 , -0.1rem 0 0.1rem #787878e6 , 0 -0.1rem 0.1rem #787878e6"
    // textShadow: "0.6rem 0 #146ebd , -0.3rem 0 0.1rem #782828e6 , 0 -0.1rem 0.1rem #782828e6"
    // textShadow: "0.3rem 0 #bdb714 , 0.6rem 0 #146ebd"
    // textShadow: "0.3rem 0 #146ebd"
    textShadow: "0.4rem 0rem 0.2rem #625671, 0.7rem 0 #146ebd"

  }

  // red - #bd141b, 
  // beige - #f7f3e3, 
  // fresh walls - #ecf0f1, 
  // brown q - #2b2118, 
  // faded lavender - #6a5d7b
  // goth lavender - #625671
  
  // $portland-mustard: #bdb714;
  // $dull-orange: #bd6314;

  // $portland-pink: #bd146e;
  // $portland-dull-red: #a33236;
  // $potential-blue: #146ebd;

  return (
    <div className="testdiv" style={style}>
      <img src={blkwhitelogo}  />
      <div style={innerstyle}>SIDES</div>
    </div>
  )
}