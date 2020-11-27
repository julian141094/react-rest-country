import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  generalGrid: {
    padding: theme.spacing(2),
    flexDirection: "column"
  },
  filterGrid: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 45
  },
  itemsGrid: {
    padding: 45
  },
  textField: {
    width: '65ch',
  }
  
}));

const Countries = () => {

  // States
  const [allCountries, setAllCountries] = useState([])
  
  // UseEffect
  useEffect(()=>{
    console.log('Hola al inicio');
    countries()
  }, [])

  const classes = useStyles();
  
  const countries = async () => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then((response)=>{
      console.log('Response ->', response);
    })
    .catch((error) => {
        console.log('Error on get https://restcountries.eu/rest/v2/all ->', error);
      })
  }
  
  const Filters = () => {
    return (
      <form className={classes.textField} noValidate autoComplete="off">
        <TextField id="search" label="Search for a Country" />
      </form>
    )
  }

  const SelectArea = () => {
    return (
      <span>SelectArea</span>
    )
  }

  const Cards = () => {
    return (
      <span>Banderas</span>
    )
  }

  return (
    <div className={classes.root}>
      <Grid container className={classes.generalGrid}>
        <Grid item xs={12} className={classes.filterGrid}>
          <Filters/>
          <SelectArea/>
        </Grid>
        <Grid item xs={3} className={classes.itemsGrid}>
          <Cards/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Countries