import React from "react";
import * as Scroll from "react-scroll";
import PCservice from "../assets/PCservice.png";
import pclogo from "../assets/pclogo.png";

export const NavHat = (props) => {

  return(
    <>
      <div className="background-photo-wrapper">
        <img id="restaurant-photo" src={PCservice} />
      </div>


      <nav className="full-nav">

        <div className="full-nav__group-left">
          <Scroll.Link to="scroll-here" spy={true} smooth={true} duration={250} >
            <div onClick={() => this.changePage("home")}>
              HOME
            </div>
          </Scroll.Link>
          <Scroll.Link to="scroll-here" spy={true} smooth={true} duration={250} >
            <div onClick={() => this.changePage("menu")}>
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

      </nav>

      <nav className="mobile-nav">

        <div className="mobile-nav__btns">
          <a href="#">MENU</a>
          <a href="#">RESTAURANT</a>
          <a href="#">CONTACT</a>
          <a href="#">EVENTS</a>
        </div>

        <span className="mobile-nav__logo" >
          <img src={pclogo} />
        </span>

      </nav>

    </>
  )
};