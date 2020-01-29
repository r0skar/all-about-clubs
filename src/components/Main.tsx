import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from '../views/Home'
import { Details } from '../views/Details'

export const Main: React.FC = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detailsview/:clubId" component={Details} />
    </Switch>
  </main>
)
