import { Grid } from '@mui/material'
import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'


export const ContentLayout = ({ children }) => {

  return (
    <Grid container sx={{ minHeight: '90vh' }}>
      <Grid item md={12}>
        <Header />
      </Grid>
      <Grid md={12} xs={12} sx={{ p: 1, minHeight: '80vh' }}>
        {children}
      </Grid>
      <Grid item md={12} sx={{ backgroundColor: 'black', height: '100%' }} xs={12}>
        <Footer />
      </Grid>
    </Grid>
  )
}
