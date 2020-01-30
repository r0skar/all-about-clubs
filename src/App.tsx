import React, { useEffect } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import ErrorIcon from '@material-ui/icons/Error'
import { makeStyles } from '@material-ui/core/styles'
import { useStore, Status } from './store'
import { API_ENDPOINT } from './constants'
import { Main } from './components/Main'
import { Header } from './components/Header'

const useStyles = makeStyles(() => ({
  content: {
    height: '100vh',
    position: 'relative',
    overflowY: 'scroll',
    overflowX: 'hidden',
    overscrollBehaviorY: 'none',
    scrollBehavior: 'smooth',
    WebkitOverflowScrolling: 'touch'
  },
  overlay: {
    backgroundColor: '#fff',
    overflow: 'hidden',
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  }
}))

export const App: React.FC = () => {
  const styles = useStyles()
  const { state, dispatch } = useStore()

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(API_ENDPOINT)
        const content = await response.json()
        dispatch({ type: 'setContent', content })
        dispatch({ type: 'setStatus', status: Status.FETCHED })
      } catch (e) {
        console.error(e)
        dispatch({ type: 'setStatus', status: Status.FAILED })
      }
    }

    fetchContent()
  }, [dispatch])

  switch (state.status) {
    case Status.FETCHED:
      return (
        <div className={styles.content}>
          <Header />
          <Main />
        </div>
      )
    case Status.FAILED:
      return (
        <div className={styles.overlay}>
          <ErrorIcon fontSize="large" color="error" />
          <br />
          <Typography variant="body2" color="error">
            Failed to fetch data.
          </Typography>
        </div>
      )
    case Status.FETCHING:
    default:
      return (
        <div className={styles.overlay}>
          <CircularProgress color="inherit" />
        </div>
      )
  }
}
