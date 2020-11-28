import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import {getAlphaCode} from '../Services/CountriesService'
import Grid from '@material-ui/core/Grid';
import Navigator from '../Components/Navigator'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowBack } from '@material-ui/icons';

const Countrie = () => {

    // States
  const [country, setCountry] = useState('')
  const [borderCountry, setBorderCountry] = useState([])

   // useEffects
  useEffect(() => {
    getAlpha()
  }, [])
   
  async function getAlpha() {
    // Search data Country
    let id = location.pathname.split('/:')
    let qry = await getAlphaCode(id[1])
    qry.topLevelDomain = qry.topLevelDomain.toString()
    let currencies = []
    qry.currencies.forEach(element => {
      currencies.push(`${element.name} `)
    });
    qry.currencies = currencies.toString()
    let languages = []
    qry.languages.forEach(element => {
      languages.push(`${element.name}, `)
    });
    qry.languages = languages
    // Search data Border Countries
    let borders = []
    let border = ''
    let arr = Object.values(qry.borders)
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      border = await getAlphaCode(element)
      borders.push(border)
    }      
    setCountry(qry)
    setBorderCountry(borders)      
  }
  
  const useStyles = makeStyles((theme) => ({
    backButton: {
      padding: 50,
      color: 'var(--text)'
    },
    internArea: {
      color: 'var(--text)'
    },
    imageArea: {
      display: 'flex',
      justifyContent: 'center'
    },
    img: {
      width: 500,
      height: 300,
      backgroundImage: `url(${country.flag})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    },
    textGeneralContainer: {
    },
    textName: {
      paddingTop: 40,
      paddingBottom: 30,
      fontWeight: 900,
      fontSize: 24
    },
    textBold: {
      fontWeight: 'bold',
    },
    areaBorderCountries: {
      paddingTop: 30,
      paddingBottom: 40,
    },
    textBorderCountries: {
      fontWeight: 'bold',
      paddingTop: 40,
      paddingBottom: 30,
    },
    buttons: {
      backgroundColor: 'var(--backgroundButton)',
      borderColor: 'var(--background)',
      boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
      color: 'var(--text)',
      marginLeft: 10,
      marginTop: 10
    },
    contentText: {
      paddingLeft: 40,
      paddingRight: 40
    }
    }));
    
  const classes = useStyles();
  const history = useHistory()
  const location = useLocation()

  function goBack() {
    history.push(`/home`)
  }

  function goBorder(alpha) {
    history.push(`/countrie/:${alpha}`)
    getAlpha()
  }

  const ViewOne = () => {
    return(
      <Grid container>
        <Grid xs={12} className={classes.backButton}>
          <Button className={classes.buttons} variant="outlined" size="large" color="primary" onClick={() =>  goBack()} >
            <ArrowBack/>
             Back
          </Button>
        </Grid>
        <Grid xs={12} className={classes.internArea}>
          <Grid container>
            <Grid xs={12} md={6} className={classes.imageArea}>
              <Grid className={classes.img}/>
            </Grid>
            <Grid xs={12} md={6}>
              <Grid container className={classes.contentText}>
                <Grid xs={12}>
                  <Grid className={classes.textArea}>
                    <Grid className={classes.textName}>
                      <span>{country.name}</span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid xs={12} md={6} >
                  <Grid className={classes.textArea}>
                    <Grid>
                      <span className={classes.textBold}>Native Name </span>
                      <span>: {country.nativeName}</span>
                    </Grid>
                    <Grid>
                      <span className={classes.textBold}>Population </span>
                      <span>: {country.population}</span>
                    </Grid>
                    <Grid>
                      <span className={classes.textBold}>Region </span>
                      <span>: {country.region}</span>
                    </Grid>
                    <Grid>
                      <span className={classes.textBold}>Sub Region </span>
                      <span>: {country.subregion}</span>
                    </Grid>
                    <Grid>
                      <span className={classes.textBold}>Capital </span>
                      <span>: {country.capital}</span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid xs={12} md={6}>
                  <Grid className={classes.textArea}>
                    <Grid>
                      <span className={classes.textBold}>Top Level Domain </span>
                      <span>: {country.topLevelDomain}</span>
                    </Grid>
                    <Grid>
                      <span className={classes.textBold}>Currencies </span>
                      <span>: {country.currencies}</span>
                    </Grid>
                    <Grid>
                      <span className={classes.textBold}>Languages </span>
                      <span>: {country.languages}</span>
                      <span>: {country.borders}</span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid xs={12}className={classes.areaBorderCountries}>
                  <Grid>
                    <span className={classes.textBorderCountries}>Border Countries </span>
                    <span>:</span>
                    {  
                      borderCountry.map((element, key) => {
                        return (
                          <Button 
                            key={key}
                            variant="outlined" 
                            size="medium" 
                            onClick={() =>  goBorder(element.alpha3Code)} 
                            className={classes.buttons}
                          >
                              {element.name}
                          </Button>
                          )
                      }) 
                    }
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }

  return [
    <ViewOne/>
  ]
} 

export default Countrie