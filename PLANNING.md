IMPLEMENT BEM ARCHITECTURE
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

================================================
==================  LAYOUT ==================

PageWrapper
- NavHat
- Menu
- - FoodMenu (old Menu)
- - - FoodSection
- - - - Food
- - DrinksMenu
- - - WineSection 
- - - - Wine
- - - CocktailSection
- - - - Cocktail

spiced candied "nuts"


== updates to portland craft website ==

font is rgb(32, 23, 19)
light font is rgba(0, 0, 0, 0.5)

color: rgba(0, 0, 0, 0.5);
font-family: "Raleway";
font-size: 15px;
font-style: normal;
font-weight: 700; or 400
letter-spacing: 0.4px;
line-height: 24px;
overflow-wrap: break-word;
text-align: center;
white-space: pre-wrap