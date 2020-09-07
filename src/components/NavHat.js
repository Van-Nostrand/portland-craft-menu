import React, {useState, useEffect} from "react";
import pclogo from "../assets/pclogo.png";

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
      <button onClick={console.log("CLICKED!!")} >TAKE-OUT</button>
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
    
      <nav className="full-nav" >

        <NavButtonGroup classString={"full-nav__group-left"} buttons={leftButtons} />

        <span className="full-nav__group-logo">
          <img src={pclogo} />
        </span>

        <NavButtonGroup classString={"full-nav__group-right"} buttons={rightButtons} />

      </nav>

      <nav className="full-secondary-nav">

        
      </nav>
      

      <nav className="mobile-nav" >

        <MobileNavDrawer open={mobileNavOpen} buttons={mobileMenu} />

        <NavButtonGroup classString={"mobile-nav__buttons"} buttons={mobileButtons} />

        <span className="mobile-nav__logo" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
          <img src={pclogo} />
        </span>

        

      </nav>

    </div>
  )
};

const MobileNavDrawer = (props) => {

  let classString = props.open ? "mobile-nav-drawer opendrawer" : "mobile-nav-drawer";
 
  return(
    <div className={classString}>
      {props.buttons}
    </div>
  )
}

const NavButtonGroup = (props) => {

  return (
    <div className={props.classString} onClick={console.log("CLICKED!!")}>
      {props.buttons}
    </div>
  )
}