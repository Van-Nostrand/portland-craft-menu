/*
I'm testing how to trigger an animation when the window scrolls over an element
exmaple modified from https://codesandbox.io/s/react-scroll-animation-utzzz
*/
import React, { useLayoutEffect, useRef, useState } from "react";

export const ScrollExample = () => {
  const [show, doShow] = useState({
    itemOne: false,
    itemTwo: false,
    itemThree: false
  });

  const refOne = useRef(null),
        refTwo = useRef(null),
        refThree = useRef(null);

  useLayoutEffect(() => {
    const topPos = element => element.getBoundingClientRect().top;
   //added to reduce redundancy
    const div1Pos = topPos(refOne.current),
          div2Pos = topPos(refTwo.current),
          div3Pos = topPos(refThree.current);

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (div1Pos < scrollPos) {
        doShow(state => ({ ...state, itemOne: true }));
      } else if (div2Pos < scrollPos) {
        doShow(state => ({ ...state, itemTwo: true }));
      } else if (div3Pos < scrollPos) {
        doShow(state => ({ ...state, itemThree: true }));
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
       <Div animate={show.itemThree} ref={refThree} />
       <Div animate={show.itemTwo} ref={refTwo} />
       <Div animate={show.itemOne} ref={refOne} />
    </>
  );
}

const Div = React.forwardRef((props, ref) => {

  // let translateValue = props.animate ? "0" : "-100vw";
  let style = {
    transform: `translateX(${props.animate ? "0" : "-100vw"})`,
    transition: "transform 1s",
    height: "900px",
    width: "300px",
    backgroundColor: "red",
  }

  return (  
    <div style={style} ref={ref}></div>
  );
});
