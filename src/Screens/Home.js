import React, {useState, useEffect} from 'react'
import Navigator from '../Components/Navigator'
import Countries from '../Components/Countries'

import Countrie from './Country'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = () => {
  // State
  let [darkMode,setDarkMode] = useState(false)
  
  // UseEffect

  /**
   * Set the general styles for the theme of material ui
   */
  useEffect(() => {
    let theme = document.documentElement;
    var background, text, element, backgroundButton
    if(!darkMode) {
      element = 'hsl(0, 0%, 100%)';
      background = 'hsl(0, 0%, 98%)';
      text = 'black';
      backgroundButton = 'hsl(0, 0%, 98%)';
    }
    else{
      element = 'hsl(209, 23%, 22%)';
      background = 'hsl(207, 26%, 17%)';
      text = 'hsl(0, 0%, 100%)';
      backgroundButton = 'hsl(209, 23%, 22%)';
    }
    theme.style.setProperty('--elements', element);
    theme.style.setProperty('--text', text);
    theme.style.setProperty('--background', background);
    theme.style.setProperty('--backgroundButton', backgroundButton);
  },[darkMode])
  return[
      <Navigator dark={darkMode} setDarkMode={setDarkMode}/>,
      <Router>
      <Switch>
        <Route path="/countrie/:id">
          <Countrie />
        </Route>
        <Route path="/">
          <Countries />
        </Route>
      </Switch>
    </Router>,
  ]
}

export default Home