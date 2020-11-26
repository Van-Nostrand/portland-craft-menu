import React, {useState, useEffect} from "react";

const LazyImageTest = (props) => {

  const [ image, setImage ] = useState();

  useEffect(() => {
    import(`../assets/${props.src}.png`).then(setImage);
  }, [props.src]);

  return image ? <img src={image} /> : 'Loading...';
};

export default LazyImageTest;