import { useState, useLayoutEffect } from "react";

//bufferValue is an integer defining the number of pixels past the target element that can be scrolled to before sending show=false
export function useCustomScrollRef(scrollRef, bufferValue){
  const [show, doShow] = useState(false);
  const [buffer, setBuffer] = useState(bufferValue);

  useLayoutEffect(() => {

    //get the top position of an element
    const topPos = element => element.getBoundingClientRect().top;
    const bottomPos = element => element.getBoundingClientRect().bottom;

    const scrollTargetTop = topPos(scrollRef.current);
    const scrollTargetBottom = bottomPos(scrollRef.current);

    const onScroll = () => {

      //get the scroll position
      const scrollPosTop = window.scrollY;

      //see if the scroll position is past the div
      if (scrollTargetTop < scrollPosTop && scrollTargetBottom + buffer > scrollPosTop) {
        doShow(true);
      } 
      else if(scrollTargetTop > scrollPosTop){
        doShow(false);
      }
      else {
        doShow(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return show;
}