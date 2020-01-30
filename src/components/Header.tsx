import React, { Fragment, useMemo } from 'react'
import { matchPath, useLocation, useHistory } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import SortIcon from '@material-ui/icons/SortSharp'
import ArrowBackIcon from '@material-ui/icons/ArrowBackSharp'
import { APP_TITLE, HOME_ROUTE, DETAILS_ROUTE } from '../constants'
import { useStore, SortOrder } from '../store'
import { RouteParams } from '../types'

export const Header: React.FC = () => {
  const { pathname } = useLocation()
  const { state, dispatch } = useStore()
  const { push: navigateTo } = useHistory()
  const match = matchPath<RouteParams>(pathname, { path: DETAILS_ROUTE })
  const { clubIndex = 0 } = match?.params || {}
  const club = useMemo(() => state.content[Number(clubIndex)], [state.content, clubIndex])

  const toggleSorting = () => {
    return state.sortOrder === SortOrder.NAME
      ? dispatch({ type: 'setSortOrder', order: SortOrder.VALUE })
      : dispatch({ type: 'setSortOrder', order: SortOrder.NAME })
  }

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid container item xs={8} alignItems="center">
            {pathname === HOME_ROUTE ? (
              <Typography component="h1" variant="h6">
                {APP_TITLE}
              </Typography>
            ) : (
              <Fragment>
                <IconButton color="inherit" onClick={() => navigateTo('/')}>
                  <ArrowBackIcon />
                </IconButton>
                <Typography component="h1" variant="h6" display="inline">
                  {club.name}
                </Typography>
              </Fragment>
            )}
          </Grid>
          <Grid container item xs={4} justify="flex-end">
            <IconButton color="inherit" onClick={() => pathname === HOME_ROUTE && toggleSorting()}>
              <SortIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
