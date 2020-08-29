export const FOOD_MENU_DATA = {
  starters: [
    {
      name: "house fries",
      price: "7",
      notes: "Hand-cut local Kennebec fries",
      vegetarian: true,
      vegan: true,
      glutenFree: false
    },
    {
      name: "caesar salad",
      price: "14",
      notes: "Romaine lettuce hearts, house caesar dressing, croutons, parmesan cheese",
      vegetarian: false,
      vegan: false,
      glutenFree: false
    },
    {
      name: "house salad",
      price: "12",
      notes: "Artisan salad mix, maple dijon vinaigrette",
      vegetarian: true,
      vegan: true,
      glutenFree: true
    },
    {
      name: "korean sticky wings",
      price: "16",
      notes: "Gachujang (Korean chili paste), BBQ sauce, scallion, black sesame",
      vegetarian: false,
      vegan: false,
      glutenFree: false
    },
    {
      name: "salt & pepper wings",
      price: "14",
      notes: "'Nuff said. Comes with choice of dip",
      vegetarian: false,
      vegan: false,
      glutenFree: false
    },
    {
      name: "poutine",
      price: "12",
      notes: "Hand-cut local Kennebec fries, curds, gravy, scallions",
      vegetarian: false,
      vegan: false,
      glutenFree: false
    },
    {
      name: "Maple-Miso green beans",
      price: "12",
      notes: "Beans tossed in our signature maple miso glaze, sesame seeds",
      vegetarian: true,
      vegan: true,
      glutenFree: true
    },
    {
      name: "Tacos Carnitas",
      price: "15",
      notes: "Sliced steak served with salsa verde, pickled onions, chipotle sauce, on a warm corn tortilla",
      vegetarian: false,
      vegan: false,
      glutenFree: false
    },
    {
      name: "old bay popcorn",
      price: "4",
      notes: "Real butter, Old Bay seasoning",
      vegetarian: true,
      vegan: false,
      glutenFree: true
    },
    {
      name: "shrimp taco",
      price: "7 each",
      notes: "Argentinian wild prawns breaded and fried, served with chipotle slaw, salsa verde, pickled onions, on a warm corn tortilla",
      vegetarian: false,
      vegan: false,
      glutenFree: false
    }
  ],
  burgers: [
    {
      name: "portland burger",
      price: "17",
      notes: "Beef patty, aged cheddar, tomatoes, lettuce, garlic aioli, relish",
      vegetarian: false,
      vegan: false,
      glutenFree: false
    },
    {
      name: "portland veggie burger",
      price: "16",
      notes: "House-made chickpea and black bean patty with avocado, tomato, lettuce, onion, garlic aioli, relish",
      vegetarian: true,
      vegan: false,
      glutenFree: false
    },
    {
      name: "portland chicken sandwich",
      price: "18",
      notes: "Organic free-run chicken breast breaded and fried, house-made slaw, tomato, bananna pepper relish, pickled onion, garlic aioli",
      vegetarian: false,
      vegan: false,
      glutenFree: false
    },
    {
      name: "brisket sandwich",
      price: "15",
      notes: "House-braised brisket, aged cheddar, tomatoes, lettuce, garlic aioli, pickled onions",
      vegetarian: false,
      vegan: false,
      glutenFree: false
    }
  ],
  mains: [
    {
      name: "BBQ stout ribs",
      price: "23",
      notes: "Full rack of slow-braised back ribs, stout BBQ sauce, coleslaw, fries",
      vegetarian: false,
      vegan: false,
      glutenFree: false
    },
    {
      name: "fried chicken & chips",
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
  ],
  draught: [
    {
      name: "",
      sizes: [],
      notes: ""
    },
  ]
}