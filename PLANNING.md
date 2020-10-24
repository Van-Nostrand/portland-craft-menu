Websites to imitate:
The Flying Pig - https://theflyingpigvan.com/menu/
Havana - https://www.havanavancouver.com/menu
The Charlatan - http://thecharlatanrestaurant.com/kitchen/
Pourhouse - https://www.pourhousevancouver.com/menu/lunchdinner
Guilt & Co - https://www.guiltandcompany.com/menu.html

IMPLEMENT BEM ARCHITECTURE
NAH
Block, Element, Modifier
.block {}
.block__element{}
.block__element-modifier{}
.block__element-modifier--secondmodifier{}
etc...

I kind-of half implemented it..

CSS order suggestion from css-tricks:
.selector {
  /* Positioning */
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;

  /* Display & Box Model */
  display: inline-block;
  overflow: hidden;
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 10px solid #333;
  margin: 10px;

  /* Color */
  background: #000;
  color: #fff
  
  /* Text */
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.4;
  text-align: right;

  /* Other */
  cursor: pointer;
}
