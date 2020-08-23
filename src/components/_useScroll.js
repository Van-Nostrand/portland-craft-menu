import {useState, useEffect} from "react";

export function useScroll() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bodyOffset, setBodyOffset] = useState(
    document.body.getBoundingClientRect().top
  );
  const [scrollY, setScrollY] = useState(bodyOffset);
  // const [scrollX, setScrollX] = useState(bodyOffset.left);
  const [scrollDirection, setScrollDirection] = useState();

  const listener = e => {
    setBodyOffset(document.body.getBoundingClientRect().top);
    setScrollY(-bodyOffset);
    // setScrollX(bodyOffset.left);
    setScrollDirection(lastScrollTop > -bodyOffset ? "down" : "up");
    setLastScrollTop(-bodyOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return {
    scrollY,
    scrollDirection
  };
}