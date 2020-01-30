import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

export const NotFound: React.FC = () => {
  const styles = useStyles()

  return (
    <Container className={styles.container} maxWidth={false}>
      Page not found.
    </Container>
  )
}
