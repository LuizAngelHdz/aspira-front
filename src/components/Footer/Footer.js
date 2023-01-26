import { Grid, Typography } from '@mui/material'
import React from 'react'
import { LocationOn, LocalPhone } from '@mui/icons-material';
import { useStyles } from './FooterStyles';

export const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.customhape}>
      <Grid container sx={{ height: '100%' }}>
        <Grid item md={12} xs={12}  >
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={classes.shapeFill}></path>
          </svg>
        </Grid>

        <Grid item md={5} sx={{ p: 2, mt: -8 }}>
          <Typography className={classes.title}>Ubicacion</Typography>
          <Typography className={classes.text}>
            <LocationOn className={classes.icon} />Libertad 1966, Col Americana, Americana, 44160 Guadalajara, Jal
          </Typography>
        </Grid>
        <Grid item md={4} sx={{ p: 2, mt: -8 }}>
          <Typography className={classes.title}>Contacto</Typography>
          <Typography className={classes.text}>
            <LocalPhone className={classes.icon} /> 55 8526 2850
          </Typography>
        </Grid>
      </Grid >
    </div >
  )
}
