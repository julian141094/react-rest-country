import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios'
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  generalGrid: {
    padding: theme.spacing(2),
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
  },
  paper:{
    padding: '5px 7px',
    backgroundColor:'var(--elements)',
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
      <Paper component="form" className={classes.paper}>
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon color="white"/>
        </IconButton>
        <InputBase id="search" placeholder="Search for a Country"
          inputProps={{ 'aria-label': 'search google maps' }} />
      </Paper>
      // <form className={classes.textField} noValidate autoComplete="off">
      // </form>
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
        <Grid item xs={12} sm={6} className={classes.filterGrid}>
          <Filters/>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.filterGrid}>
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