import React, {useState, useEffect} from "react";

const lazyLoadImage = (imageName, img) => {

  const [ image, setImage ] = useState("");

  const getImage = () => {
    import(
      /* webpackMode: "lazy-once" */
      `../assets/${imageName}`
    )
    .then(src => img.src = src.default)
    .catch(err => console.log(err));
  }

  useEffect(() => {
    getImage();
  }, []);

  useEffect(() => {
    return img;
  },[img.src]);

};

export default lazyLoadImage;
