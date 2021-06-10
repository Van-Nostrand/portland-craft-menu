import React from "react";

function MobileNav({ logo, children }){
  return(
    <nav className="mobile-nav" >
      <div className="nav-logo">
        <img src={logo} />
      </div>
      <div className="button-group">
        {children}
      </div>
    </nav>
  );
}

export default MobileNav;