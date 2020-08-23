import React, {useRef} from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import vegan from "./vegan.svg";
import * as Scroll from "react-scroll";


// functions found at link below
// https://stackoverflow.com/questions/51229742/javascript-window-scroll-behavior-smooth-not-working-in-safari
const SmoothVerticalScrolling = (e, time, where) => {
  let eTop = e.clientY;
  let eAmt = eTop / 100;
  let curTime = 0;
  while (curTime <= time) {
    console.log("while loop")
      window.setTimeout(SVS_B, curTime, eAmt, where);
      curTime += time / 100;
  }
}

const SVS_B = (eAmt, where) => {
  if(where == "center" || where == "")
      window.scrollBy(0, eAmt / 2);
  if (where == "top")
      window.scrollBy(0, eAmt);
}



export const ScrollTest = (props) => {
  
  const scrollRef = useRef(null);
  
  const clickTest = (e) => SmoothVerticalScrolling(e, 300, scrollRef);
  


  return (
    <BrowserRouter>
      <div className="outer-wrapper">
        <div id="header">
          <nav>
            <div id="nav-group-left">
              <Link to="/lc" onClick={(e) => SmoothVerticalScrolling(e, 300, scrollRef.current)}>LOWER CONTAINER</Link>
              <Link to="/elc" onClick={clickTest}>EVEN LOWER</Link>
            </div>
            <span id="nav-group-logo">
              <img src={vegan} alt="vegan" />
            </span>
            <div id="nav-group-right">
              <a href="#">CONTACT</a>
              <a href="#">EVENTS</a>
            </div>
          </nav>
        </div>
        <div id="lower-container">
          lower container
        </div>
        <div id="even-lower-container">
          even lower container
        </div>
      </div>
      <div id="switch-container" ref={scrollRef}>
        <Switch>
          <Route path="/elc">
            <ELC />
          </Route>
          <Route path="/lc">
            <LowContainer />
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
  
  )
}

const LowContainer = (props) => {
  return(
    <div ref={props.ref}>
      <h1>here's another lower container!</h1>
    </div>
  )
}

const ELC = (props) => {
  return(
    <div ref={props.ref}>
      <h1>another even lower container???</h1>
    </div>
  )
}


