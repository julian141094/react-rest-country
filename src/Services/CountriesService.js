import React from 'react'
import axios from 'axios'

export default async function getCountries(zone) {
  let to_return = null
  if (zone === 'All') {
    await axios.get('https://restcountries.eu/rest/v2/all')
      .then((response)=>{
        to_return = response.data
      })
      .catch((error) => {
        console.log('Error on get https://restcountries.eu/rest/v2/all ->', error);
      }) 
  } else {
    await axios.get(`https://restcountries.eu/rest/v2/region/${zone}`)
      .then((response)=>{
        to_return = response.data
      })
      .catch((error) => {
        console.log('https://restcountries.eu/rest/v2/region/ ->', error);
      })
  }
  return to_return
}