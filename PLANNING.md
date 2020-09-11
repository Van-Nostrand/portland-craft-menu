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

<
  </Ascent 937/CapHeight 700/CharSet(/space/A/D/E/F/H/I/K/N/O/P/R/S/T/U/Y)/Descent -225/Flags 32/FontBBox[-39 -225 804 937]/FontFamily(Gotham Condensed Bold)/FontFile3 82 0 R/FontName/GAABMK+GothamCondensed-Bold/FontStretch/Condensed/FontWeight 700/ItalicAngle 0/StemV 120/Type/FontDescriptor/XHeight 536>
  >
<
  </Ascent 886/CapHeight 700/CharSet(/space/parenleft/parenright/hyphen/zero/one/two/three/four/five/six/eight/F/S/T/a/d/e/h/i/m/n/o/p/r/s/u/y/z/bullet/endash)/Descent -156/Flags 32/FontBBox[-23 -156 868 886]/FontFamily(Gotham Condensed Book)/FontFile3 85 0 R/FontName/GAABMK+GothamCondensed-Book/FontStretch/Condensed/FontWeight 500/ItalicAngle 0/StemV 64/Type/FontDescriptor/XHeight 528>
  >
<</Ascent 902/CapHeight 700/CharSet(/space/ampersand/comma/period/slash/zero/four/five/seven/nine/A/B/C/D/H/J/L/M/R/S/U/W/a/b/c/d/e/f/g/h/i/l/m/n/o/p/r/s/t/u/w/z)/Descent -153/Flags 32/FontBBox[-43 -153 868 902]/FontFamily(Gotham Condensed)/FontFile3 88 0 R/FontName/GAABMK+GothamCondensed-Medium/FontStretch/Condensed/FontWeight 500/ItalicAngle 0/StemV 92/Type/FontDescriptor/XHeight 533>>
<</Ascent 922/CapHeight 700/Descent -170/Flags 32/FontBBox[-70 -170 1180 922]/FontFamily(Gotham)/FontFile2 91 0 R/FontName/GAABMK+Gotham-Medium/FontStretch/Normal/FontWeight 500/ItalicAngle 0/StemV 124/Type/FontDescriptor/XHeight 528>
>
