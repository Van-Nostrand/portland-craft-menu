import React, { useState, useEffect} from "react";

function LazyFullNav({buttons, logo}) {

  const [image, setImage] = useState();

  const getImage = () => {
    import(
      /* webpackMode: "lazy-once" */
      `../assets/pcTaps.jpg`
    )
    .then(src => setImage(src.default))
    .catch(err => console.log(err));
  }

  useEffect(() => {
    getImage();
  },[]);

  if(!image){
    return <div>LOADING</div>
  }
   
  return(
    <nav className="full-nav">
      <div className="bknd-img-wrapper">
        <img src={image} />
      </div>
      <div className="logo full-nav__logo">
        <img src={logo} />
      </div>
      <div className="button-group full-nav__button-group">
        {buttons}
      </div>
    </nav>
  )
}

export default LazyFullNav;