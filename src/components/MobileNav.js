import React from "react";

function MobileNav({buttons, logo, currentPage, highlight}){
  let highlightStyle = {color: "purple"};
  return(
    <nav className="mobile-nav" >
      <div className="logo mobile-nav__logo">
        <img src={logo} />
      </div>
      <div className="button-group mobile-nav__button-group">
        {buttons}
      </div>
      {currentPage === "drinks" ? 
        <div className="mobile-drinks-sub-nav">
          <button style={highlight === "wine" ? highlightStyle : {}} className="mobile-sub-nav-wine">Wine</button>
          <button style={highlight === "cocktails" ? highlightStyle : {}} className="mobile-sub-nav-cocktails">Cocktails</button>
          <button style={highlight === "packaged" ? highlightStyle : {}} className="mobile-sub-nav-togobeers">To-Go Beers</button>
        </div>
        : <></>}
    </nav>
  );
}

export default MobileNav;