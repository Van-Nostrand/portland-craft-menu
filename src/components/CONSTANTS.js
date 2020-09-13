import React from "react";
export const FOOD_MENU_DATA = {
  starters: [
    {
      name: "House Fries",
      price: "7",
      notes: "Hand-cut local Kennebec fries",
      vegetarian: true,
      vegan: true,
      glutenFree: false
    },
    {
      name: "Caesar Salad",
      price: "14",
      notes: "Romaine lettuce hearts, house caesar dressing, croutons, parmesan cheese",
      vegetarian: false,
      vegan: false,
      glutenFree: false
    },
    {
      name: "Korean Sticky Wings",
      price: "16",
      notes: "Gachujang (Korean chili paste), BBQ sauce, scallion, black sesame",
      vegetarian: false,
      vegan: false,
      glutenFree: false
    },
    {
      name: "House Salad",
      price: "12",
      notes: "Artisan salad mix, maple dijon vinaigrette",
      vegetarian: true,
      vegan: true,
      glutenFree: true
    },
    {
      name: "Salt & Pepper Wings",
      price: "14",
      notes: "'Nuff said. Comes with choice of dip",
      vegetarian: false,
      vegan: false,
      glutenFree: false
    },
    {
      name: "Maple-Miso Cauliflower",
      price: "12",
      notes: "Fried Cauliflower tossed in our signature maple miso glaze, sesame seeds",
      vegetarian: true,
      vegan: true,
      glutenFree: true
    },
    {
      name: "Poutine",
      price: "12",
      notes: "Hand-cut local Kennebec fries, curds, gravy, scallions",
      vegetarian: false,
      vegan: false,
      glutenFree: false
    },
    {
      name: "Old Bay Popcorn",
      price: "4",
      notes: "Real butter, Old Bay seasoning",
      vegetarian: true,
      vegan: false,
      glutenFree: true
    },
    {
      name: "Shrimp Taco",
      price: "7 each",
      notes: "Argentinian wild prawns breaded and fried, served with chipotle slaw, salsa verde, pickled onions, on a warm corn tortilla",
      vegetarian: false,
      vegan: false,
      glutenFree: false
    }
  ],
  happyHour: [
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
        {price: "5/7.50", size: ""}
      ]
    },
    {
      name: "Jameson",
      prices: [
        {price: "4.50", size: "(1oz)"}
      ]
    }
  ],
  burgers: [
    {
      name: "Portland Burger",
      price: "18",
      notes: "Beef patty, aged cheddar, tomatoes, lettuce, garlic aioli, relish",
      vegetarian: false,
      vegan: false,
      glutenFree: false
    },
    {
      name: "Portland Veggie Burger",
      price: "16",
      notes: "House-made chickpea and black bean patty with avocado, tomato, lettuce, onion, garlic aioli, relish",
      vegetarian: true,
      vegan: false,
      glutenFree: false
    },
    {
      name: "Portland Chicken Sandwich",
      price: "18",
      notes: "Organic free-run chicken breast breaded and fried, house-made slaw, tomato, bananna pepper relish, pickled onion, garlic aioli",
      vegetarian: false,
      vegan: false,
      glutenFree: false
    },
    {
      name: "Brisket Sandwich",
      price: "15",
      notes: "House-braised brisket, aged cheddar, tomatoes, lettuce, garlic aioli, pickled onions",
      vegetarian: false,
      vegan: false,
      glutenFree: false
    }
  ],
  snacks: [
    {
      name: "Felix Farm Kennebec Fries",
      price: "7",
      notes: "Black garlic aioli, fresh herbs",
      dairyFree: false,
      vegan: false,
      glutenFree: false,
      nutFree: false
    },
    {
      name: "Poutine",
      price: "11",
      notes: "Felix Farm Kennebec potatoes, cheese curd, house gravy",
      dairyFree: false,
      vegan: false,
      glutenFree: false,
      nutFree: false
    },
    {
      name: "Mixed Olives",
      price: "7",
      notes: "House marinated with citrus and herbs",
      dairyFree: false,
      vegan: false,
      glutenFree: false,
      nutFree: false
    },
    {
      name: "Spiced Candied Nuts",
      price: "7",
      notes: "House blends",
      dairyFree: false,
      vegan: false,
      glutenFree: false,
      nutFree: false
    },
    {
      name: "Crispy Rossdown Chicken Skin",
      price: "8",
      notes: "Lime, chilis, lemongrass",
      dairyFree: false,
      vegan: false,
      glutenFree: false,
      nutFree: false
    },
    {
      name: "Pickled Vegetables",
      price: "6",
      notes: "Seasonal selections",
      dairyFree: false,
      vegan: false,
      glutenFree: false,
      nutFree: false
    },
    {
      name: "Cashew Spread",
      price: "10",
      notes: "Fresh herbs, lightly toasted bread",
      dairyFree: false,
      vegan: false,
      glutenFree: false,
      nutFree: false
    },
    {
      name: "Candied Bacon",
      price: "2 / 10",
      notes: "Maple spiced. 2 for one strip, or 10 for 6 strips",
      dairyFree: false,
      vegan: false,
      glutenFree: false,
      nutFree: false
    },
  ],
  mains: [
    {
      name: "BBQ Stout Ribs",
      price: "23",
      notes: "Full rack of slow-braised back ribs, stout BBQ sauce, coleslaw, fries",
      vegetarian: false,
      vegan: false,
      glutenFree: false
    },
    {
      name: "Fried Chicken & Chips",
      price: "18",
      notes: "Our house-battered chicken breast, coleslaw, gravy, fries",
      vegetarian: false,
      vegan: false,
      glutenFree: false
    },  
    {
      name: "Mac & Cheese",
      price: "17",
      notes: "Three cheeses, pasta, truffle oil, chives",
      vegetarian: false,
      vegan: false,
      glutenFree: false
    }
  ]
};

export const DRINKS_MENU_DATA = {
  wine: {
    red: [
      {
        name: "Lake Breeze",
        varietal: "Meritage",
        sizes: [12, 16, 48],
        notes: "BC"
      },
      {
        name: "Septima",
        varietal: "Malbec",
        sizes: [10, 14, 42],
        notes: "Argentina"
      },
      {
        name: "James Mitchell",
        varietal: "Cabernet Sauvignon",
        sizes: [12, 16, 48],
        notes: "California"
      },
      {
        name: "Sandhill",
        varietal: "Cabernet Merlot",
        sizes: [11, 15, 45],
        notes: "BC"
      },
      {
        name: "See Ya Later Ranch",
        varietal: "Pinot Noir",
        sizes: [11, 15, 45],
        notes: "BC"
      },
      {
        name: "Kanazawa",
        varietal: "Merlot",
        sizes: [12, 16, 48],
        notes: "BC"
      },
    ],
    white: [
      {
        name: "Tightrope",
        varietal: "Pinot Gris",
        sizes: [10, 14, 42],
        notes: "BC"
      },
      {
        name: "Sandhill",
        varietal: "Pinot Blanc",
        sizes: [11, 15, 45],
        notes: "BC"
      },
      {
        name: "Gray Monk",
        varietal: "Chardonnay",
        sizes: [12, 16, 48],
        notes: "BC"
      },
      {
        name: "Bonamici",
        varietal: "Rose",
        sizes: [10, 14, 42],
        notes: "BC"
      },
      {
        name: "Kanazawa",
        varietal: "Nomu",
        sizes: [12, 16, 48],
        notes: "BC"
      },
      {
        name: "Charles Smith",
        varietal: "Riesling",
        sizes: [12, 16, 48],
        notes: "Washington"
      },
      {
        name: "Kim Crawford",
        varietal: "Sauvignon Blanc",
        sizes: [12, 16, 48],
        notes: "New Zealand"
      },
    ],
    bubbles: [
      {
        name: "Stellars Jay",
        sizes: [11, 45],
        notes: "BC"
      },
      {
        name: "Codorniu Cava",
        sizes: [10, 42],
        notes: "Spain"
      },
    ]
  },
  cocktails: [
    {
      name: "Spritz Veneziano",
      price: "11",
      notes: ["Ruffino Prosecco, soda, choice of liqueur:", ["Aperol", "Campari", "Elderflower & Cassis ($12)"]]
    },
    {
      name: "Margarita",
      price: "12",
      notes: "El Jimador Blanco tequila, lime, agave"
    },
    {
      name: "Moscow Mule / Dark & Stormy",
      price: "12",
      notes: "Absolut vodka or Goslings black rum, sugar, Angostura bitters, Fentiman's ginger beer"
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
      notes: "Flor de Ca\u00f1a rum, lime, sugar"
    },
    {
      name: "Negroni Sour",
      price: "13",
      notes: "Beefeater gin, Campari, Odd Society Amaro, orange, lemon, sugar, egg white. Cory's own creation!"
    },
    {
      name: "Best Bloody Caesar",
      price: "9 / 13",
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
    },
  ]
}

export const FEATURES_MENU_DATA = {
  
  freshSheet: [
    {
      name: "Corn on the Cob",
      price: "7",
      notes: "grilled corn with a cilantro lime butter and chilis",
      vegetarian: true,
      vegan: false,
      glutenFree: true
    },
    {
      name: "Grilled raddichio salad",
      price: "10",
      notes: "miso dressing",
      vegetarian: true,
      vegan: true,
      glutenFree: true
    }
  ]
}