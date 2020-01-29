import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Home } from '../views/Home'
import { Details } from '../views/Details'

const useStyles = makeStyles(theme => ({
  main: {
    paddingTop: theme.spacing(7),
    minHeight: '100vh'
  }
}))

export const Main: React.FC = () => {
  const styles = useStyles()

  return (
    <main className={styles.main}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detailsview/:clubId" component={Details} />
      </Switch>
    </main>
  )
}
