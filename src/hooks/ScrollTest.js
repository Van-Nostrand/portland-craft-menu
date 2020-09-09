/*
exmaple modified from https://codesandbox.io/s/react-scroll-animation-utzzz
*/
import React, { useRef } from "react";
import {useCustomScrollRef} from "./useCustomScrollRefs";

export const ScrollTest = () => {

  const SCROLL_BUFFER = 150;

  const refOne = useRef(null),
        refTwo = useRef(null),
        refThree = useRef(null);
  
  const show1 = useCustomScrollRefs(refOne, SCROLL_BUFFER);
  const show2 = useCustomScrollRefs(refTwo, SCROLL_BUFFER);
  const show3 = useCustomScrollRefs(refThree, SCROLL_BUFFER);

  let navbarStyle = {
    position: "sticky",
    width: "100%",
    top: "0",
    background: "#dddddd"
  }

  let buttongroupStyle = {
    position: "relative",
    top: "50%",
    height: "200px",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%"
  }

  let buttonStyle1 = {
    background: `${show1 ? "pink" : "none"}`,
    width: "200px"
  }

  let buttonStyle2 = {
    background: `${show2 ? "pink" : "none"}`,
    width: "200px"
  }

  let buttonStyle3 = {
    background: `${show3? "pink" : "none"}`,
    width: "200px"
  }

  let scrolltargetstyle1 = {
    position: "relative",
    top: "500px",
    width: "500px",
    border: "10px solid red",
    height: "600px"
  }

  let scrolltargetstyle2 = {
    position: "relative",
    top: "1000px",
    width: "500px",
    border: "10px solid purple",
    height: "600px"
  }

  let scrolltargetstyle3 = {
    position: "relative",
    top: "1500px",
    width: "500px",
    border: "10px solid green",
    height: "600px",
    marginBottom: "200px"
  }

  let pageSpace = {
    position: "relative",
    top: "3500px",
    width: "500px",
    height: "10px",
    border: "2px dashed orange"
  }

  return (
    <>
       <nav style={navbarStyle}  >

        <div style={buttongroupStyle} onClick={() => console.log("CLICKED!!")}>
          <button style={buttonStyle1} onClick={() => console.log("food!")}>
            FOOD
          </button> 
          <button style={buttonStyle2} onClick={() => console.log("drinks!")}>
            DRINKS
          </button>
          <button style={buttonStyle3} onClick={() => console.log("takeout!")} >
            TAKE-OUT
          </button>
        </div>

      </nav>

      <div ref={refOne} style={scrolltargetstyle1} className="scrolltarget1"></div>
      <div ref={refTwo} style={scrolltargetstyle2} className="scrolltarget2"></div>
      <div ref={refThree} style={scrolltargetstyle3} className="scrolltarget3"></div>

      <div style={pageSpace}></div>
    </>
  );
}
