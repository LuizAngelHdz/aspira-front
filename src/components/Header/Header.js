import { Grid } from '@mui/material'
import React from 'react'
import { Sidebar } from '../Sidebar'
import LogoAspira from '../../images/logo.svg'

export const Header = () => {
  return (
    <Grid container>
      <Grid item md={9} style={{ display: 'flex', justifyContent: 'flex-start', padding: '10px 0px 20px 20px' }}>
        <Sidebar />
      </Grid>
      <Grid item md={2} style={{ padding: '10px 0px 20px 20px' }}>
        <img src={LogoAspira} alt="Logo aspira" />
      </Grid>
    </Grid>
  )
}
