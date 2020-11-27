import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import Paper from '@material-ui/core/Paper';
import getCountries from '../Services/CountriesService'


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

  const classes = useStyles();

  // States
  const [countries, setCountries] = useState([])
  const [region, setRegion] = useState('All')
  const options = [
    {
      value: 'All',
      label: 'All',
    },
    {
      value: 'africa',
      label: 'Africa',
    },
    {
      value: 'americas',
      label: 'Americas',
    },
    {
      value: 'asia',
      label: 'Asia',
    },
    {
      value: 'europe',
      label: 'Europe',
    },
    {
      value: 'oceania',
      label: 'Oceania',
    },
  ]
  
  
  // UseEffect
  useEffect(async ()=>{
    let qry = await getCountries('All')
    setCountries(qry)
  }, [])

  useEffect(()=>{
    console.log('Countries->', countries);
  }, [countries])

  
  const handleChange = async (event) => {
    setRegion(event.target.value);
    let qry = await getCountries(event.target.value)
    setCountries(qry)
  };
  
  const Filters = () => {
    return (
      <Paper component="form" className={classes.paper}>
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon/>
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
      <form noValidate autoComplete="off">
        <div>
          <TextField
            id="standard-select-region"
            select
            label="Filter by Region"
            value={region}
            onChange={handleChange}
            helperText="Please select your region"
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </form>
    )
  }

  const Card = () => {
    return (
      <span>Banderas</span>
    )
  }

  return (
    <div className={classes.root}>
      <Grid container className={classes.generalGrid}>
        <Grid item xs={12} sm={6}>
          <Filters/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectArea/>
        </Grid>
        <Grid item xs={12}>
          <Card/>
        </Grid>
        <Grid container>
          { countries.map((element, key) => {
            return (
              <Grid item xs={3} className={classes.itemsGrid}>
                {/* <Card/> */}
                <span>{key}</span>
              </Grid>
            )
          }) }
        </Grid>
      </Grid>
    </div>
  )
}

export default Countries