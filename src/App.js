import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import FoodMenu from "./pages/FoodMenu";
import DrinksMenu from "./pages/DrinksMenu";
import HappyHour from "./pages/HappyHour";
import BrunchMenu from './pages/BrunchMenu';
import NavHat from "./components/nav/NavHat";
import Footer from "./components/Footer";

import {
  WHITE_WINE,
  RED_WINE,
  BUBBLES,
  HOUSE_COCKTAILS,
  HAPPY_HOUR,
  HAPPY_HOUR_FOOD,
  SNACKS,
  SMALL_PLATES,
  PIZZA,
  BURGERS,
  LARGE_PLATES,
  SWEETS,
  SIDES,
  PACKAGED_BEER,
  NON_ALCOHOLIC,
} from "./constants/CONSTANTS";

export default function App() {
  return (
    <Router>
      <NavHat />

      <Switch>
        <Route exact path="/" render={() => <Redirect to="/food" />} />
        <Route path="/food">
          <FoodMenu
            menuData={{
              SNACKS,
              SMALL_PLATES,
              LARGE_PLATES,
              PIZZA,
              BURGERS,
              SWEETS,
              SIDES,
            }}
          />
        </Route>
        <Route path="/drinks">
          <DrinksMenu
            menuData={{
              WHITE_WINE,
              RED_WINE,
              BUBBLES,
              HOUSE_COCKTAILS,
              PACKAGED_BEER,
              NON_ALCOHOLIC,
            }}
          />
        </Route>
        <Route path="/happyhour">
          <HappyHour
            menuData={{
              HAPPY_HOUR,
              HAPPY_HOUR_FOOD,
            }}
          />
        </Route>
        <Route path="/brunch">
          <BrunchMenu
            menuData={{

            }}
          />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
