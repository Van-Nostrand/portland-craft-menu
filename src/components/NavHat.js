import React from "react";
// import * as Scroll from "react-scroll";
// import PCservice from "../assets/PCservice.png";
import pclogo from "../assets/pclogo.png";

export const NavHat = ({changeInterface}) => {

  let mobileNavClass = "mobile-nav";
  // let fullNavClass = changeInterface ? "full-nav hide-nav" : "full-nav";
  // let mobileNavClass = changeInterface ? "mobile-nav" : "mobile-nav hide-nav";

  return(
    <div className="nav-hat-wrapper">
      {/* <div className="background-photo-wrapper">
        <img id="restaurant-photo" src={PCservice} />
      </div> */}

      {/* className="full-nav" */}
      {/* <nav className={fullNavClass}  >

        <div className="full-nav__group-left">
          <Scroll.Link to="scroll-here" spy={true} smooth={true} duration={250} >
            <div className="full-nav__group-left-link" onClick={() => this.changePage("home")}>
              HOME
            </div>
          </Scroll.Link>
          <Scroll.Link to="scroll-here" spy={true} smooth={true} duration={250} >
            <div className="full-nav__group-left-link" onClick={() => this.changePage("menu")}>
              MENU
            </div>
          </Scroll.Link>
          <a href="#">RESTAURANT</a>
        </div>

        <span className="full-nav__group-logo">
          <img src={pclogo} />
        </span>

        <div className="full-nav__group-right">
          <a href="#">CONTACT</a>
          <a href="#">EVENTS</a>
        </div>

      </nav> */}

      <nav className={mobileNavClass} >

        <div className="mobile-nav__btns">
          <a href="http://www.portlandcraft.com">HOMEPAGE</a>
        </div>

        <div className="mobile-nav__logo" >
          <img src={pclogo} />
        </div>

      </nav>

    </div>
  )
};