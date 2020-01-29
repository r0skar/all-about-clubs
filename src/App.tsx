import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Main } from './components/Main'
import { Header } from './components/Header'

const useStyles = makeStyles(() => ({
  container: {
    height: '100vh',
    position: 'relative',
    overflowY: 'scroll',
    overflowX: 'hidden',
    overscrollBehaviorY: 'none',
    scrollBehavior: 'smooth',
    WebkitOverflowScrolling: 'touch'
  }
}))

export const App: React.FC = () => {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <Header />
      <Main />
    </div>
  )
}
