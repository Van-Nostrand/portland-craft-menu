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
      <div className="bknd-img-wrapper">
        <img src={image} />
      </div>
      <div className="logo full-nav__logo">
        <img src={logo} />
      </div>
      <div className="button-group full-nav__button-group">
        {children}
      </div>
    </nav>
  )
}

export default LazyFullNav;