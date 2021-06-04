import React from "react";
import NavHat from "./NavHat";
import Footer from "./Footer";
import SectionWrapper from './SectionWrapper';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';
import { FoodMenu } from "./FoodMenu";
import { DrinksMenu } from "./DrinksMenu";
import { HappyHour } from "./HappyHour";

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
  NON_ALCOHOLIC
} from "./CONSTANTS";

export default function App() {

  return (
    <Router>
      <NavHat />

      <Switch>
        <Route 
          exact 
          path='/' 
          render={() => <Redirect to='/food' />} 
        />
        <Route path='/food'>
          <FoodMenu 
            menuData={{
              SNACKS,
              SMALL_PLATES,
              LARGE_PLATES,
              PIZZA,BURGERS,
              SWEETS,
              SIDES
            }} 
          />
        </Route>
        <Route path='/drinks'>
          <DrinksMenu 
            menuData={{
              WHITE_WINE, 
              RED_WINE, 
              BUBBLES, 
              HOUSE_COCKTAILS, 
              PACKAGED_BEER, 
              NON_ALCOHOLIC
            }} 
          />
        </Route>
        <Route path='/happyhour'>
          <HappyHour 
            menuData={{
              HAPPY_HOUR, 
              HAPPY_HOUR_FOOD
            }} 
          />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}


