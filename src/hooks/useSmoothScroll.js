const useSmoothScroll = (amount) => {
  const BUFFER = -100;

  return window.scrollBy({top: amount + BUFFER, behavior: "smooth"});
}

export default useSmoothScroll;