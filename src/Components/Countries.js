import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import getCountries, { getSingleCountry } from '../Services/CountriesService'
import Card from '../Components/Card'


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
  primartText:{
    color:'var(--text)',
    textAlign: 'center'
  },
  paper:{
    padding: '15px',
    backgroundColor:'var(--elements)',
    boxShadow:'0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);'
  },
}));

const Countries = () => {

  const classes = useStyles();

  // States
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState([])
  const [region, setRegion] = useState('All')
  const searchRef = React.createRef();
  const options = [
    {
      value: 'All',
      label: 'Filter by Region',
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

  /**
   * First load Countries
  */
  useEffect(async ()=>{
    let qry = await getCountries('All')
    setCountries(qry)
  }, [])
  
  /**
   * Handler select region change
   * @param {*} event 
   */
  const handleChange = async (event) => {
    setRegion(event.target.value);
    let qry = await getCountries(event.target.value)
    setCountries(qry)
  };
  
  /**
   * Filter a Country with the word
   */
  const Filters = () => {
    return (
      <span className={classes.paper}>
        <IconButton onClick={()=> handleSearch()} className={classes.iconButton} aria-label="search">
          <SearchIcon/>
        </IconButton>
        <InputBase id="search" 
          ref={searchRef}
          // onChange={(evt) => handleSearch(evt)}
          onBlur={(evt) => handleSearch(evt.target.value)}
          defaultValue = {search}
          placeholder="Search for a Country"
          inputProps={{ 'aria-label': 'search google maps' }} />
      </span>
      // <form className={classes.textField} noValidate autoComplete="off">
      // </form>
    )
  }

  const handleSearch = async (val) => {
    let qry = await getSingleCountry(val === undefined ? searchRef.current.children[0].value : val)
    setCountries(qry)
    if(val !== undefined){
      setSearch(val)
    }
  }

  /**
   * Select to render countries of a specific region
   */
  const SelectArea = () => {
    return (
      <select
        label="Filter by Region"
        placeholder="Please select your region"
        value={region}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    )
  }

  return (
    <div className={classes.root}>
      <Grid container className={classes.generalGrid}>
        <Grid item xs={12} sm={6}>
          <Filters/>
        </Grid>
        <Grid container justify="flex-end" item xs={12} sm={6}>
          <SelectArea/>
        </Grid>
        <Grid container>
          {
            countries === null ? <h1 className={classes.primartText}>
              Sin registros
            </h1> :
              countries.map((element, key) => {
                return (
                  <Grid item xs={3} className={classes.itemsGrid}>
                    <Card
                      image = {element.flag}
                      name = {element.name}
                      population = {element.population}
                      region = {element.region}
                      capital = {element.capital}
                    />
                  </Grid>
                )
              }) 
          }
        </Grid>
      </Grid>
    </div>
  )
}

export default Countries