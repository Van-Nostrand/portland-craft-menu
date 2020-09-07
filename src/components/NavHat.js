import React, {useState, useEffect} from "react";
import pclogo from "../assets/pclogo.png";
import pcMezzanine from "../assets/PCservice.png";

export const NavHat = ({changePage}) => {
  let [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    console.log(mobileNavOpen);
  }, [mobileNavOpen]);

  let leftButtons = (
    <>
      <button onClick={() => changePage("landing")}>HOME</button>
      <button onClick={() => changePage("food")}>FOOD</button>      
      <button onClick={() => changePage("drinks")}>DRINKS</button>
    </>
  )

  let rightButtons = (
    <>
      <button onClick={() => {}} >TAKE-OUT</button>
      <button onClick={() => {}} >CONTACT</button>
      <button onClick={() => {}} >EVENTS</button>    
    </>
  )

  let mobileButtons = (
    <>
      <button onClick={() => changePage("food")}>FOOD</button> 
      <button onClick={() => changePage("drinks")}>DRINKS</button>
      <button onClick={() => {}} >TAKE-OUT</button>
    </>
  )

  let mobileMenu = (
    <>
      <button onClick={() => changePage("landing")}>HOME</button>
      <button onClick={() => {}} >CONTACT</button>
      <button onClick={() => {}} >EVENTS</button> 
    </>
  )

  return(
    <div className="nav-hat-wrapper">

      <div className="background-photo-wrapper">
        <img id="restaurant-photo" src={pcMezzanine} />
      </div>
    
      <nav className="full-nav" >

        <NavButtonGroup classString={"full-nav__group-left"} buttons={leftButtons} />

        <span className="full-nav__group-logo">
          <img src={pclogo} />
        </span>

        <NavButtonGroup classString={"full-nav__group-right"} buttons={rightButtons} />

      </nav>
      
      <nav className="mobile-nav" >

        {/* <div className="mobile-nav__background-wrapper"></div>

        <NavButtonGroup classString={"mobile-nav__buttons"} buttons={mobileButtons} /> */}

        <span className="mobile-nav__logo" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
          <img src={pclogo} />
        </span>

        <MobileNavDrawer open={mobileNavOpen} buttons={mobileMenu} />

      </nav>

    </div>
  )
};

const MobileNavDrawer = (props) => {
  let classString = props.open ? "mobile-nav__drawer opendrawer" : "mobile-nav__drawer";

  //   transition: "transform 1s",
  //   height: "500px",
  //   width: "100%",
  //   background: "red",
  //   display: `flex`,
  //   flexFlow: "column nowrap",
  //   // overflowY: "hidden"
    
  // }
  
  return(
    <div className={classString}>
      {props.buttons}
    </div>
  )
}

const NavButtonGroup = (props) => {

  return (
    <div className={props.classString}>
      {props.buttons}
    </div>
  )
}