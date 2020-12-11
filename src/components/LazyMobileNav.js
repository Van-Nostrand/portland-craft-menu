import React from "react";

function LazyMobileNav({buttons, logo}){
  return(
    <nav className="mobile-nav" >
      <div className="logo mobile-nav__logo">
        <img src={logo} />
      </div>
      <div className="button-group mobile-nav__button-group">
        {buttons}
      </div>
    </nav>
  );
}

export default LazyMobileNav;