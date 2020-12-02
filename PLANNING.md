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




    name: "Aperol or Elderflower Spritz",
    price: "11",
    notes: "Choice of Aperol or St Germain and Cassis (+$1), mixed with soda and sparkling white wine"
 
    name: "Moscow Mule",
    price: "12",
    notes: "Absolut vodka, lime, sugar, Angostura bitters, Fentiman's ginger beer"

    name: "Eastburn Daquiri",
    price: "12",
    notes: "Butter infused rum, lemon, sugar"
 
    name: "Nelson Iced Tea",
    price: "13",
    notes: "Cory's own creation! Gin, Cointreau, Nelson Olive Oil Co black cherry balsamic vinegar, lemon, sugar, soda"

    name: "Black Bears and Traffic",
    price: "13",
    notes: "Excuses for being late when you're from North Van. Sons of Vancouver's No 82 Amaretto and Chili Vodka, lemon, egg white, citrus zest"
  
    name: "Charlotte's Tick Bite",
    price: "13",
    notes: "It's a long story. Pisco, Cocalero, Cointreau, lime, salt, rimmed with spicy seasoning"
  
    name: "Mt Hood Warmer",
    price: "14",
    notes: "Chai infused rye, Ampersand "Nocino!", Grand Marnier, orange, sugar, absinthe"

    name: "Whiskey Pearing",
    price: "15",
    notes: "Double-pun - deal with it. McClellands Islay scotch, Lot 40 Rye, Guiseppe Carpano Vermouth, pear, lemon, sugar"
    

    
    SPECIALS:
    name: "Lonsdale Quay",
    price: "15",
    notes: "Absolut Vodka, Galliano, St Germain, earl grey tea, lemon, sugar, egg white"
  
    name: "The Purple House",
    price: "14",
    notes: "Tequila, Green Chartreuse, sugar, lime, cassis, egg white"