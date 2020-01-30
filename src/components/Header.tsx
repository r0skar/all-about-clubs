import React from 'react'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import SortIcon from '@material-ui/icons/SortSharp'
import { useStore, SortOrder } from '../store'

export const Header: React.FC = () => {
  const { state, dispatch } = useStore()

  const toggleSorting = () => {
    return state.sortOrder === SortOrder.NAME
      ? dispatch({ type: 'setSortOrder', order: SortOrder.VALUE })
      : dispatch({ type: 'setSortOrder', order: SortOrder.NAME })
  }

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid container item xs={8}>
            <Typography component="h1" variant="h6">
              all about clubs
            </Typography>
          </Grid>
          <Grid container item xs={4} justify="flex-end">
            <IconButton color="inherit" onClick={toggleSorting}>
              <SortIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
