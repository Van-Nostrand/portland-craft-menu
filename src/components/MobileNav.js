import React from "react";
import useCustomSmoothScroll from "../hooks/useCustomSmoothScroll";

function MobileNav({buttons, logo, currentPage, highlight, allRefs}){
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
          <button 
            style={highlight === "wine" ? highlightStyle : {}} 
            className="mobile-sub-nav-wine"
            onClick={() => 
              useCustomSmoothScroll(allRefs.wineRef.current.getBoundingClientRect().y)
            }>
            Wine
          </button>
          <button 
            style={highlight === "cocktails" ? highlightStyle : {}} 
            className="mobile-sub-nav-cocktails" 
            onClick={() => 
              useCustomSmoothScroll(allRefs.cocktailRef.current.getBoundingClientRect().y)
            }>
            Cocktails
          </button>
          <button 
            style={highlight === "packaged" ? highlightStyle : {}} 
            className="mobile-sub-nav-togobeers"
            onClick={() => 
              useCustomSmoothScroll(allRefs.packagedRef.current.getBoundingClientRect().y)
            }>
            ToGo
          </button>
          <button 
            style={highlight === "spirits" ? highlightStyle : {}} 
            className="mobile-sub-nav-spirits"
            onClick={() => 
              useCustomSmoothScroll(allRefs.spiritsRef.current.getBoundingClientRect().y)
            }>
            Spirits
          </button>
        </div>
        : <></>}
    </nav>
  );
}

export default MobileNav;