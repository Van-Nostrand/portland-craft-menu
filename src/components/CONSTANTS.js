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
    name: "Chicken Gravy",
    price: "2"
  },
  {
    name: "Waffle",
    price: "5"
  },
  {
    name: "Tofu",
    price: "6"
  },
  {
    name: "Fried Chicken Breast",
    price: "8"
  },
];

export const SNACKS = [
  {
    name: "Candied Bacon",
    price: "2 for 1 or $10 for 6",
    notes: "Johnston Farm smoked bacon baked with house-spice blend",
    diet: "gluten and dairy free", 
  },
  {
    name: "Pickled Vegetables",
    price: "6",
    notes: "House-pickled seasonally sourced selections",
    diet: "vegan, gluten free", 
  },
  {
    name: "Felix Farm Kennebec Fries",
    price: "7",
    notes: ["Double-cooked Felix Farm Kennebec potatoes, black garlic aioli, fresh herbs.", "Substitute truffle fries (+$2.50)"],
    diet: "gluten and dairy free", 
  },
  {
    name: "Warm Mixed Olives",
    price: "7",
    notes: "House marinated with citrus and herbs",
    diet: "vegan, gluten free", 
  },
  {
    name: "Spiced Candied Nuts",
    price: "7",
    notes: "Roasted in-house with our own spice blend",
    diet: "vegan, gluten free", 
  },
  {
    name: "Crispy Farmcrest Chicken Crackling",
    price: "8",
    notes: "Fried chicken skin seasoned with a blend of lime, chilis, lemongrass, herbs",
    diet: "gluten and dairy free", 
  },
  {
    name: "Cashew Spread",
    price: "10",
    notes: "With pickled vegetables, fresh herbs, fresh bread, all made in-house",
    diet: "vegan", 
  }
];

export const OMNIVORES = [
  {
    name: "Meat Skillet Pie",
    price: "*",
    notes: "Rotating styles - ask your server!",
    diet: ""
  },
  {
    name: "Pacific Wild Shrimp Fritter",
    price: "10",
    notes: "Corn, soy bean, herbs, spicy black garlic aioli",
    diet: "dairy free", 
  },
  {
    name: "Roasted Organic Carrot and Brussel Sprouts Salad",
    price: "10",
    notes: "Carrots, brussel sprouts, parsnip, radish, sunflower seeds, double smoked bacon vinaigrette",
    diet: "gluten free"
  },
  {
    name: "Craft Poutine",
    price: "11",
    notes: "Double-cooked Felix Farm Kennebec potatoes, Quebec cheese curds, house-made chicken gravy",
    diet: "", 
  },
  {
    name: "Pacific Humboldt Squid",
    price: "12",
    notes: "Tomato, leeks, garlic, chilis, herbs",
    diet: "gluten and dairy free", 
  },
  {
    name: "Pork Ribs",
    price: "10 for 3 or $13 for 5",
    notes: "Peanuts, fresh herbs, tamarind soy glaze",
    diet: "contains nuts, dairy free"
  },
  // {
  //   name: "Fraser Valley Pork Belly",
  //   price: "13",
  //   notes: "Seared pork belly, house pickles, green onions, smoked onion jam",
  //   diet: "gluten and dairy free", 
  // },
  {
    name: "Westcoast Crab Dip",
    price: "15",
    notes: "Bacon, leeks, herbs, house bread",
    diet: "", 
  },
  {
    name: "Farmcrest Wings",
    price: "16",
    notes: "1lb of wings, daikon, carrots, celery, garlic chili butter sauce",
    diet: "gluten free", 
  }
];

export const HERBIVORES = [
  {
    name: "Veggie Skillet Pie",
    price: "*",
    notes: "Rotating styles - ask your server!",
    diet: ""
  },
  {
    name: "B.C. Brassica",
    price: "8",
    notes: "Broccoli, kale, cashews, garlic, herbs",
    diet: "vegan, gluten free, contains nuts", 
  },
  {
    name: "B.C. Kale Salad",
    price: "9",
    notes: "Tomato, radish, pumpkin seeds, balsamic soy dressing",
    diet: "vegan, gluten free", 
  },
  {
    name: "Cauliflower Soup",
    price: "12",
    notes: "Cauliflower, cheddar crumble, buttermilk biscuit",
    diet: "vegetarian"
  },
  {
    name: '"Fried Rice"',
    price: "14",
    notes: "Compressed rice cubes, mushrooms, gai lan, corn, shallots, sesame sauce",
    diet: "vegan, gluten free", 
  }
];

export const LARGER = [
  {
    name: "Cache Creek Dry-Aged Burger",
    price: "18",
    notes: ["Cheddar, bacon, onion, lettuce, tomato, daikon, aioli. Served with fries.", "Substitute salad (+$2), truffle fries (+$2.50), or poutine (+$4)"],
    diet: "", 
  },
  {
    name: "Grain Bowl",
    price: "21",
    notes: "Organic farro, organic greens, tomato, cucumber, soy bean, tofu, cashew herb dressing",
    diet: "vegan, contains nuts", 
  },
  {
    name: "Farmcrest Chicken and Waffle",
    price: "23",
    notes: "Fried chicken breast, mushroom, bacon butter, gravy",
    diet: "", 
  },
  {
    name: "Wild Pacific Lingcod",
    price: "25",
    notes: "Poached, with confit carrots, potatoes, brussel sprouts",
    diet: "gluten free", 
  }  
];

export const SWEETS = [
  {
    name: "Dark Chocolate Mousse",
    price: "9", 
    notes: "Pear, hazelnut crumble, and chantilly",
    diet: "vegetarian, contains nuts", 
  },
  {
    name: "Fried Bread",
    price: "8",
    notes: "Bourbon caramel, maple pastry, cream",
    diet: "vegetarian, contains nuts"
  }
]

export const WHITE_WINE = [
  {
    name: "Tightrope",
    varietal: "Pinot Gris",
    sizes: [10, 14, 42],
    notes: "B.C."
  },
  {
    name: "Bonamici",
    varietal: "Rose",
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
    name: "Septima",
    varietal: "Malbec",
    sizes: [10, 14, 42],
    notes: "Arg."
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
    name: "Lake Breeze",
    varietal: "Meritage",
    sizes: [12, 16, 48],
    notes: "B.C."
  },
  {
    name: "James Mitchell",
    varietal: "Cabernet Sauvignon",
    sizes: [12, 16, 48],
    notes: "Cal."
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
    name: "Codorniu Cava",
    sizes: [10, 42],
    notes: "Spain"
  },
  {
    name: "Stellars Jay",
    sizes: [11, 45],
    notes: "B.C."
  }
]

export const OLD_COCKTAILS = [
  {
    name: "Aperol or Elderflower Spritz",
    price: "11",
    notes: "Choose either Aperol or St Germain & Cassis (+$1), sparkling white wine, soda"
  },
  {
    name: "Margarita",
    price: "12",
    notes: "El Jimador Blanco tequila, triple sec, lime"
  },
  
  {
    name: "Whiskey Sour",
    price: "13",
    notes: "Wild Turkey bourbon, lemon, sugar, Angostura bitters, egg white"
  },
  {
    name: "Corpse Reviver #2",
    price: "12",
    notes: "Beefeater gin, Cointreau, Lillet Blanc, Pernod rinse, lemon"
  },
  {
    name: "Daquiri",
    price: "12",
    notes: "Dark rum, lime, sugar"
  },
  {
    name: "Negroni Sour",
    price: "13",
    notes: "Beefeater gin, Campari, Odd Society Amaro, orange, lemon, sugar, egg white. Cory's own creation!"
  },
  {
    name: "Best Bloody Caesar",
    price: "9 / $13",
    notes: "Absolut vodka, house caesar mix, Clamato, pickled veg. Can be ordered as a single or double"
  },
  {
    name: "Fraser Collins",
    price: "13",
    notes: "Beefeater gin, lemon, sugar, cucumber, black pepper, topped off with pilsner. Mike's twist on the Tom Collins!"
  },
  {
    name: "Spanish Fashion",
    price: "13",
    notes: "Cazadores A\u00f1ejo tequila, Cinzano Rosso, Angostura bitters"
  }
]

export const HOUSE_COCKTAILS = [
  {
    name: "Aperol / Elderflower Spritz",
    price: "11",
    notes: "Choose either Aperol or St Germain & Cassis (+$1), sparkling white wine, soda"
  },
  {
    name: "Moscow Mule",
    price: "12",
    notes: "Absolut vodka, lime, sugar, Angostura bitters, ginger beer"
  },
  {
    name: "Nelson Iced Tea",
    price: "13",
    notes: "Gin, Cointreau, Nelson Olive Oil Black Cherry balscamic vinegar, lemon, soda"
  },
  {
    name: "Gastown",
    price: "13",
    notes: "Sons of Vancouver amaretto and chili vodka, lemon juice, egg whites, citrus zest"
  },
  {
    name: "Charlotte's Tick Bite",
    price: "13",
    notes: "Pisco, Cocalero, Cointreau, lime, salt, rimmed with spicy seasoning"
  },
  {
    name: "Mt Hood Warmer",
    price: "14",
    notes: "Chai infused whiskey, Ampersand \"Nocino!\", brandy, Grand Marnier, orange, sugar, absinthe"
  },
  {
    name: "Lonsdale Quay",
    price: "15",
    notes: "Vodka, Galliano, St Germain, earl grey tea, lemon, sugar, egg white"
  },
  {
    name: "Rose City Pearing",
    price: "15",
    notes: "McClellands Islay scotch, Lot 40 Rye, Guiseppe Carpano Vermouth, pear, lemon, sugar"
  }
]
export const COCKTAILS = [
  {
    name: "Gastown",
    price: "13",
    notes: "Sons of Vancouver amaretto and chili vodka, lemon juice, egg whites, citrus zest"
  },
  {
    name: "Portland Spritz",
    price: "11",
    notes: "Absolut vodka, St Germain, cassis, lemon, raspberries"
  },
  {
    name: "Mt Hood Warmer",
    price: "14",
    notes: "Chai infused whiskey, Ampersand \"Nocino!\", Grand Marnier, orange, sugar, absinthe"
  },
  {
    name: "Eastburn Daquiri",
    price: "13",
    notes: "Butter infused rum, lemon, sugar, house-made candied ginger"
  },
  {
    name: "Lonsdale Quay",
    price: "15",
    notes: "Vodka, Galliano, St Germain, earl grey tea, lemon, sugar, egg white"
  },
  {
    name: "Charlotte's Tick Bite",
    price: "13",
    notes: "Pisco, Cocalero, Cointreau, lime, salt, rimmed with spicy seasoning"
  },
  {
    name: "Rose City Pearing",
    price: "15",
    notes: "McClellands Islay scotch, Lot 40 Rye, Guiseppe Carpano Vermouth, pear, lemon, sugar"
  },
  {
    name: "Forest Park",
    price: "14",
    notes: "Tequila, Green Chartreuse, sugar, lime, cassis, egg white"
  },
]

export const FEATURES = [ 
  {
    name: "Baked Pacific Shrimp",
    price: "12",
    notes: "Cherry tomato, chili garlic butter",
    diet: ""
  },   
  {
    name: "Onion Chips",
    price: "8",
    notes: "Buttermilk batter, house ranch dip",
    diet: "vegetarian"
  },  
  {
    name: "Buttermilk Fried Chicken Sandwich",
    price: "18",
    notes: ["Available before 5pm.", "Buttermilk waffle, carrot slaw, pickled jalapenos and shallots, chili citrus aioli. Served with fries.", "Substitute salad (+$2), truffle fries (+$2.50), or poutine (+$4)"],
    diet: ""
  }
  
];

export const HAPPY_HOUR_FOOD = [
  {
    name: "Pickled Vegetables",
    price: "4",
    notes: "House-pickled seasonally sourced selections",
    diet: "vegan, gluten free", 
  },
  {
    name: "Felix Farm Kennebec Fries",
    price: "5",
    notes: "Double-cooked Felix Farm Kennebec potatoes, black garlic aioli, fresh herbs",
    diet: "gluten and dairy free", 
  },
  {
    name: "Spiced Candied Nuts",
    price: "5",
    notes: "Roasted in-house with our own spice blend",
    diet: "vegan, gluten free", 
  },
  {
    name: "Crispy Farmcrest Chicken Crackling",
    price: "5",
    notes: "Fried chicken skin seasoned with a blend of lime, chilis, lemongrass, herbs",
    diet: "gluten and dairy free", 
  },
  {
    name: "Craft Poutine",
    price: "8",
    notes: "Double-cooked Felix Farm Kennebec potatoes, Quebec cheese curds, house-made chicken gravy",
    diet: "", 
  },
  {
    name: "Westcoast Crab Dip",
    price: "12",
    notes: "Bacon, leeks, herbs, house bread",
    diet: "", 
  },
  {
    name: "B.C. Kale Salad",
    price: "7",
    notes: "Tomato, radish, pumpkin seeds, balsamic soy dressing",
    diet: "vegan, gluten free", 
  },
  {
    name: "Pacific Wild Shrimp Fritter",
    price: "8",
    notes: "Corn, soy bean, herbs, spicy black garlic aioli",
    diet: "dairy free", 
  }
];

export const HAPPY_HOUR = [
  {
    name: "Select US Craft Beer",
    prices: [
      {price: "5.75", size: "14oz"}
    ]
  },
  {
    name: "Select Local Draught Beer",
    prices: [
      {price: "4", size: "12oz"},
      {price: "5", size: "20oz"}
    ]
  },
  {
    name: "House Red, White, & Rose Wine",
    prices: [
      {price: "5.50", size: "5oz"},
      {price: "9", size: "8oz"}
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
      {price: "4.50", size: "1oz"}
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

export const PACKAGED_BEER = [
  {
    name: "Steamworks Kolsch",
    price: "3",
  },
  {
    name: "Steamworks Hazy Pale Ale",
    price: "3",
  },
  {
    name: "Parkside Dawn Pilsner",
    price: "3",
  },
  {
    name: "Deschutes Mirror Pond Pale Ale",
    price: "3.5",
  },
]