import React from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";

const MyImage = ({image}) => (
  <div>
    <LazyLoadImage
      alt={image.alt}
      src={image.src}  />
    
    <span>{image.caption}</span>
  </div>
);

export default MyImage;