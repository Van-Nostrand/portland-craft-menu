import * as Scroll from 'react-scroll';
import React, {Component} from "react";

// let Link      = Scroll.Link;
// let Element   = Scroll.Element;
// let Events    = Scroll.Events;
// let scroll    = Scroll.animateScroll;
// let scrollSpy = Scroll.scrollSpy;

export default class ReactScrollTest extends Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default static">
          <ul className="nav navbar-nav">
            <li><Scroll.Link activeClass="active" to="rel1" spy={true} smooth={true} duration={250} >rel 1</Scroll.Link></li>
            <li><Scroll.Link activeClass="active" to="rel2" spy={true} smooth={true} duration={250} >rel 2</Scroll.Link></li>
            <li><Scroll.Link activeClass="active" to="rel3" spy={true} smooth={true} duration={600} >rel 3</Scroll.Link></li>
            <li><Scroll.Link activeClass="active" to="rel4" spy={true} smooth={true} duration={250} >rel 4</Scroll.Link></li>
            <li><Scroll.Link activeClass="active" to="normal" spy={true} smooth={true} duration={250} >normal</Scroll.Link></li>
          </ul>
        </nav>

        <div className="relative">
          <Scroll.Element name="rel1" className="element big">relative 1</Scroll.Element>
          <Scroll.Element name="rel2" className="element big">relative 2</Scroll.Element>
          <Scroll.Element name="rel3" className="element big">relative 3</Scroll.Element>
          <Scroll.Element name="rel4" className="element big">relative 4</Scroll.Element>
        </div>

        <Scroll.Element name="normal" className="element big">normal</Scroll.Element>

      </div>

    );
  }
};
