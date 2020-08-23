IMPLEMENT BEM ARCHITECTURE
Block, Element, Modifier
.block {}
.block__element{}
.block__element-modifier{}
.block__element-modifier--secondmodifier{}
etc...

also, implement the 7-1 structure
introduced by Hugo Giraudel (sp?)
read up on him... 

The 7 folders:
base/             basic project definitions (*, html, body...)
components/       one file for each component
layout/           define the overall layout of the project
pages/            styles for specific pages
themes/           for implementing different visual themes
abstracts/        variables, mixins...
vendors/          third party libraries

The app has a header that contains background images and a navbar. 
These are absolutely positioned and fit over other page elements
Test click and scroll? 

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
================== NEW LAYOUT ==================

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