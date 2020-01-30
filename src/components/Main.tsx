import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Home } from '../views/Home'
import { Details } from '../views/Details'
import { NotFound } from '../views/NotFound'

const useStyles = makeStyles(theme => ({
  main: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  appHeaderOffset: {
    ...theme.mixins.toolbar
  }
}))

export const Main: React.FC = () => {
  const styles = useStyles()

  return (
    <main className={styles.main}>
      <div className={styles.appHeaderOffset} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detailsview/:clubIndex" component={Details} />
        <Route component={NotFound} />
      </Switch>
    </main>
  )
}
