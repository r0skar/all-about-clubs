import React from 'react'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import SortIcon from '@material-ui/icons/SortSharp'

export const Header: React.FC = () => (
  <AppBar position="fixed">
    <Toolbar>
      <Grid container alignItems="center">
        <Grid container item xs={8}>
          <Typography component="h1" variant="h6">
            all about clubs
          </Typography>
        </Grid>
        <Grid container item xs={4} justify="flex-end">
          <IconButton color="inherit">
            <SortIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
)
