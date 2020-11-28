import React, {useState, useEffect} from 'react'
import Navigator from '../Components/Navigator'
import Countries from '../Components/Countries'

const Home = () => {
  // State
  let [darkMode,setDarkMode] = useState(false)
  
  // UseEffect

  /**
   * Set the general styles for the theme of material ui
   */
  useEffect(() => {
    let theme = document.documentElement;
    var background, text, element
    if(!darkMode) {
      element = 'hsl(0, 0%, 100%)';
      background = 'hsl(0, 0%, 98%)';
      text = 'black'
    }
    else{
      element = 'hsl(209, 23%, 22%)';
      background = 'hsl(207, 26%, 17%)';
      text = 'hsl(0, 0%, 100%)'
    }
    theme.style.setProperty('--elements', element);
    theme.style.setProperty('--text', text);
    theme.style.setProperty('--background', background);
  },[darkMode])
  return[
      <Navigator dark={darkMode} setDarkMode={setDarkMode}/>,
      <Countries />
  ]
}

export default Home