import React, { useState, useEffect} from "react";

function LazyFullNav({ logo, children }) {

  const [ image, setImage ] = useState();

  const getImage = () => {
    let theImage = require('../../assets/pcTaps.jpeg');
    setImage(theImage);
  }

  useEffect(() => {
    getImage();
  },[]);

  if (!image) {
    return <div>LOADING</div>
  }
  return (
    <nav className="full-nav">
      <div className="nav-bknd-img-wrapper">
        <img src={image} />
      </div>
      <div className="nav-logo">
        <img src={logo} />
      </div>
      <div className="button-group">
        {children}
      </div>
    </nav>
  )
}

export default LazyFullNav;