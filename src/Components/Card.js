import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

/**
 * Get the data of a country and return a card with the information
 * @param {*} Obj Object 
 */
const Card = ({
  image,
  name,
  population,
  region,
  capital
}) => {

  const useStyles = makeStyles((theme) => ({
    general: {
      padding: 10
    },
    generalCard:{
      backgroundColor:'var(--elements)',
      borderRadius: '8px',
      boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)'
    },
    img: {
      width: '100%',
      height: 220,
      borderRadius: '8px 8px 0px 0px',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    },
    textArea: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop: 10,
      marginLeft: 25,
      marginRight: 25,
      marginBottom: 25,
      color: 'var(--text)'
    },
    textName: {
      marginTop: 10,
      marginBottom: 10,
      fontWeight: 'bold',
    },
    textBold: {
      fontWeight: 'bold',
    }
  }));

  const classes = useStyles();
    return(
      <Grid container className={classes.general}>
        <Grid container className={classes.generalCard}>
          <Grid className={classes.img} >
            {/* <img src={image} width={'100%'} className={classes.img}/> */}
          </Grid>
          <Grid className={classes.textArea}>
            <Grid className={classes.textName}>
              <span>{name}</span>
            </Grid>
            <Grid>
              <span className={classes.textBold}>Population </span>
              <span>: {population}</span>
            </Grid>
            <Grid>
              <span className={classes.textBold}>Region </span>
              <span>: {region}</span>
            </Grid>
            <Grid>
              <span className={classes.textBold}>Capital </span>
              <span>: {capital}</span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
}

export default Card