import React from "react";
export const SIDES = [
  {
    name: "House Aioli",
    price: "1"
  },
  {
    name: "Extra Bread",
    price: "3"
  },
  {
    name: "Maple Syrup",
    price: "2"
  },
  {
    name: "Salad",
    price: "5"
  },
  {
    name: "Coconut Gravy",
    price: "2"
  },
  {
    name: "Chicken Gravy",
    price: "2"
  },
  {
    name: "Waffle",
    price: "5"
  },
  {
    name: "Fried Chicken Breast",
    price: "8"
  },
  {
    name: "Tofu",
    price: "6"
  },
];

export const SNACKS = [
  {
    name: "Pickled Vegetables",
    price: "6",
    notes: "House-pickled seasonally sourced selections",
    vegetarian: false,
    vegan: true,
    glutenFree: true, 
    nutFree: true, 
    dairyFree: true
  },
  {
    name: "Felix Farm Kennebec Fries",
    price: "7",
    notes: "Double-cooked Felix Farm Kennebec potatoes, black garlic aioli, fresh herbs",
    vegetarian: false,
    vegan: false,
    glutenFree: true, 
    nutFree: true, 
    dairyFree: true
  },
  {
    name: "Warm Mixed Olives",
    price: "7",
    notes: "House marinated with citrus and herbs",
    vegetarian: false,
    vegan: true,
    glutenFree: true, 
    nutFree: true, 
    dairyFree: true
  },
  {
    name: "Spiced Candied Nuts",
    price: "7",
    notes: "Roasted in-house with our own spice blend",
    vegetarian: false,
    vegan: true,
    glutenFree: true, 
    nutFree: false, 
    dairyFree: true
  },
  {
    name: "Crispy Rossdown Chicken Crackling",
    price: "8",
    notes: "Fried chicken skin seasoned with a blend of lime, chilis, lemongrass, herbs",
    vegetarian: false,
    vegan: false,
    glutenFree: true, 
    nutFree: true, 
    dairyFree: true
  },
  {
    name: "Cashew Spread",
    price: "10",
    notes: "With pickled vegetables, fresh herbs, fresh bread, all made in-house",
    vegetarian: false,
    vegan: true,
    glutenFree: false, 
    nutFree: false, 
    dairyFree: true
  },
  {
    name: "Candied Bacon",
    price: "2 for 1 or $10 for 6",
    notes: "Johnston Farm smoked bacon baked with house-spice blend",
    vegetarian: false,
    vegan: false,
    glutenFree: true, 
    nutFree: true, 
    dairyFree: true
  }
];

export const OMNIVORES = [
  {
    name: "Craft Poutine",
    price: "11",
    notes: "Double-cooked Felix Farm Kennebec potatoes, Quebec cheese curds, house-made chicken gravy",
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    nutFree: true, 
    dairyFree: false
  },
  {
    name: "Rossdown Wings",
    price: "16",
    notes: "1lb of wings, daikon, carrots, celery, garlic chili butter sauce",
    vegetarian: false,
    vegan: false,
    glutenFree: true, 
    nutFree: false, 
    dairyFree: false
  },
  {
    name: "Pacific Humboldt Squid",
    price: "12",
    notes: "Tomato, leeks, garlic, chilis, herbs",
    vegetarian: false,
    vegan: false,
    glutenFree: true, 
    nutFree: true, 
    dairyFree: true
  },
  {
    name: "Pacific Wild Shrimp Fritter",
    price: "10",
    notes: "Corn, soy bean, herbs, spicy black garlic aioli",
    vegetarian: false,
    vegan: false,
    glutenFree: false, 
    nutFree: true, 
    dairyFree: true
  },
  {
    name: "Westcoast Crab Dip",
    price: "15",
    notes: "Bacon, leeks, herbs, house bread",
    vegetarian: false,
    vegan: false,
    glutenFree: false, 
    nutFree: true, 
    dairyFree: false
  },
  {
    name: "Fraser Valley Pork Belly",
    price: "13",
    notes: "Seared pork belly, house pickles, green onions, smoked onion jam",
    vegetarian: false,
    vegan: false,
    glutenFree: true, 
    nutFree: true, 
    dairyFree: true
  },
  {
    name: "Cache Creek Beef Tartar",
    price: "18",
    notes: "Black garlic, celery, radish, egg yolk, shallots, toast",
    vegetarian: false,
    vegan: false,
    glutenFree: false, 
    nutFree: true, 
    dairyFree: true
  },
];

export const HERBIVORES = [
  {
    name: "B.C. Kale Salad",
    price: "9",
    notes: "Tomato, radish, pumpkin seeds, balsamic soy dressing",
    vegetarian: false,
    vegan: true,
    glutenFree: true, 
    nutFree: true, 
    dairyFree: true
  },
  {
    name: "Chilliwack Corn-on-the-Cob",
    price: "7",
    notes: "Grilled corn, chili lime butter, citrus herb crumble",
    vegetarian: true,
    vegan: false,
    glutenFree: false, 
    nutFree: true, 
    dairyFree: true
  },
  {
    name: "Heirloom Tomato Salad",
    price: "11",
    notes: "Avocado, basil, radish, balsamic aioli, sourdough",
    vegetarian: true,
    vegan: false,
    glutenFree: false, 
    nutFree: true, 
    dairyFree: true
  },
  {
    name: "Biscuit and Gravy",
    price: "14",
    notes: "House-made lemon herb biscuit, honey butter, braised greens, coconut gravy",
    vegetarian: true,
    vegan: false,
    glutenFree: false, 
    nutFree: true, 
    dairyFree: false
  },
  {
    name: '"Fried Rice"',
    price: "14",
    notes: "Mushrooms, gai lan, corn, shallots, sesame sauce",
    vegetarian: false,
    vegan: true,
    glutenFree: true, 
    nutFree: true, 
    dairyFree: true
  },
  {
    name: "B.C. Brassica",
    price: "8",
    notes: "Gai Lan, broccoli, kale, cashews, garlic, herbs",
    vegetarian: false,
    vegan: true,
    glutenFree: true, 
    nutFree: false, 
    dairyFree: true
  },
];

export const LARGER = [
  {
    name: "Cache Creek Dry-Aged Burger",
    price: "20",
    notes: "Cheddar, bacon, onion, lettuce, tomato, daikon, aioli",
    vegetarian: false,
    vegan: false,
    glutenFree: false, 
    nutFree: true, 
    dairyFree: false,
  },
  {
    name: "Rossdown Chicken and Waffle",
    price: "23",
    notes: "Fried chicken breast, mushroom, bacon, butter, coconut gravy",
    vegetarian: false,
    vegan: false,
    glutenFree: false, 
    nutFree: true, 
    dairyFree: false
  },
  {
    name: "Pacific Wild Salmon",
    price: "24",
    notes: "Fried rice, corn, broccoli, sesame leek sauce",
    vegetarian: false,
    vegan: false,
    glutenFree: true, 
    nutFree: true, 
    dairyFree: true
  },
  {
    name: "Grain Bowl",
    price: "21",
    notes: "Organic farro, organic greens, tomato, cucumber, soy bean, tofu, cashew herb dressing",
    vegetarian: false,
    vegan: true,
    glutenFree: false, 
    nutFree: false, 
    dairyFree: true
  },
  
];

export const SWEETS = [
  {
    name: "Chocolate Mousse",
    price: "9", 
    notes: "Sponge cake, whipped cream, cacao nibs",
    vegetarian: true,
    vegan: false,
    glutenFree: false, 
    nutFree: true, 
    dairyFree: false
  },
  {
    name: "Fried Pear Pie",
    price: "8",
    notes: "Deep fried pear hand pie, hazelnuts, spiced sugar",
    vegetarian: true,
    vegan: false,
    glutenFree: false, 
    nutFree: false, 
    dairyFree: false
  },
]


// =========
// BEVERAGES
// =========

export const WHITE_WINE = [
  {
    name: "Tightrope",
    varietal: "Pinot Gris",
    sizes: [10, 14, 42],
    notes: "B.C."
  },
  {
    name: "Sandhill",
    varietal: "Pinot Blanc",
    sizes: [11, 15, 45],
    notes: "B.C."
  },
  {
    name: "Gray Monk",
    varietal: "Chardonnay",
    sizes: [12, 16, 48],
    notes: "B.C."
  },
  {
    name: "Bonamici",
    varietal: "Rose",
    sizes: [10, 14, 42],
    notes: "B.C."
  },
  {
    name: "Kanazawa",
    varietal: "Nomu",
    sizes: [12, 16, 48],
    notes: "B.C."
  },
  {
    name: "Charles Smith",
    varietal: "Riesling",
    sizes: [12, 16, 48],
    notes: "Wash."
  },
  {
    name: "Kim Crawford",
    varietal: "Sauvignon Blanc",
    sizes: [12, 16, 48],
    notes: "N.Z."
  }
];

export const RED_WINE = [
  {
    name: "Lake Breeze",
    varietal: "Meritage",
    sizes: [12, 16, 48],
    notes: "B.C."
  },
  {
    name: "Septima",
    varietal: "Malbec",
    sizes: [10, 14, 42],
    notes: "Arg."
  },
  {
    name: "James Mitchell",
    varietal: "Cabernet Sauvignon",
    sizes: [12, 16, 48],
    notes: "Cal."
  },
  {
    name: "Sandhill",
    varietal: "Cabernet Merlot",
    sizes: [11, 15, 45],
    notes: "B.C."
  },
  {
    name: "See Ya Later Ranch",
    varietal: "Pinot Noir",
    sizes: [11, 15, 45],
    notes: "B.C."
  },
  {
    name: "Kanazawa",
    varietal: "Merlot",
    sizes: [12, 16, 48],
    notes: "B.C."
  }
]

export const BUBBLES = [
  {
    name: "Stellars Jay",
    sizes: [11, 45],
    notes: "B.C."
  },
  {
    name: "Codorniu Cava",
    sizes: [10, 42],
    notes: "Spain"
  }
]

export const COCKTAILS = [
  {
    name: "Aperol or Elderflower Spritz",
    price: "11",
    notes: "Choice of Aperol or St Germain and Cassis (+$1), mixed with soda and sparkling white wine"
  },
  {
    name: "Margarita",
    price: "12",
    notes: "El Jimador Silver tequila, Cointreau, lime"
  },
  {
    name: "Moscow Mule / Dark & Stormy",
    price: "12",
    notes: "Absolut vodka or Goslings black rum, lime, sugar, Angostura bitters, Fentiman's ginger beer"
  },
  {
    name: "Whiskey Sour",
    price: "13",
    notes: "Wild Turkey bourbon, lemon, sugar, Angostura bitters, egg white"
  },
  {
    name: "Corpse Reviver #2",
    price: "12",
    notes: "Beefeater gin, Cointreau, Lillet Blanc, Absinthe, lemon"
  },
  {
    name: "Daquiri",
    price: "12",
    notes: "Flor de Ca\u00f1a rum, lime, sugar"
  },
  {
    name: "Negroni Sour",
    price: "13",
    notes: "Beefeater gin, Campari, Odd Society Amaro, orange, lemon, sugar, egg white. Cory's own creation!"
  },
  {
    name: "Best Bloody Caesar",
    price: "9 / $13",
    notes: "Absolut vodka, house caesar mix, Clamato, pickled veg"
  }
]


export const HAPPY_HOUR = [
  {
    name: "Select US Craft Beer",
    prices: [
      {price: "5.75", size: "(14oz)"}
    ]
  },
  {
    name: "Select Local Draught Beer",
    prices: [
      {price: "4", size: "(12oz)"},
      {price: "5", size: "(20oz)"}
    ]
  },
  {
    name: "House Red, White, & Rose Wine",
    prices: [
      {price: "5.50", size: "(5oz)"},
      {price: "9", size: "(8oz)"}
    ]
  },
  {
    name: "Aperol Spritz & Moscow Mule",
    prices: [
      {price: "9", size: ""},
    ]
  },
  {
    name: "Select Single/Double Highballs",
    prices: [
      {price: "5 / $7.50", size: ""}
    ]
  },
  {
    name: "Jameson",
    prices: [
      {price: "4.50", size: "(1oz)"}
    ]
  }
]

export const NON_ALCOHOLIC = [
  {
    name: "Pop",
    price: "3.50",
    notes: "Pepsi, Diet Pepsi, Sprite, Ginger Ale, Soda, Tonic"
  },
  {
    name: "Orange Juice",
    price: "3.50"
  },
  {
    name: "Cranberry Juice",
    price: "3.50"
  },
  {
    name: "Fentimans Sodas",
    price: "5",
    notes: "Ginger beer or Burdock and Dandelion"
  },
  {
    name: "Mocktails",
    price: "5",
    notes: "PLACEHOLDER"
  }
];