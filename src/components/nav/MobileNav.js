import React from "react";

function MobileNav({ logo, children }){
  return(
    <nav className="mobile-nav" >
      <div className="logo mobile-nav__logo">
        <img src={logo} />
      </div>
      <div className="button-group mobile-nav__button-group">
        {children}
      </div>
    </nav>
  );
}

export default MobileNav;