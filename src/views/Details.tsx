import React, { Fragment } from 'react'
import Container from '@material-ui/core/Container'
import grey from '@material-ui/core/colors/grey'
import Typography from '@material-ui/core/Typography'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { useStore } from '../store'
import { RouteParams } from '../types'

const useStyles = makeStyles(theme => ({
  heroContainer: {
    backgroundColor: grey[900],
    color: grey[50],
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  heroImage: {
    display: 'block',
    margin: '0 auto',
    maxWidth: '300px',
    width: '30%'
  },
  contentContainer: {
    paddingTop: theme.spacing(2)
  }
}))

export const Details: React.FC = () => {
  const styles = useStyles()
  const { state } = useStore()
  const { clubIndex } = useParams<RouteParams>()
  const club = state.content[Number(clubIndex)]

  return (
    <Fragment>
      <Container className={styles.heroContainer} maxWidth={false}>
        <img src={club.image} alt={club.name} className={styles.heroImage} />
        <Typography variant="h6" color="inherit">
          {club.country}
        </Typography>
      </Container>
      <Container className={styles.contentContainer} maxWidth={false}>
        <Typography variant="body2">
          Der Club <strong>{club.name}</strong> aus {club.country} hat einen Wert von {club.value} Millionen Euro.{' '}
          {club.name} konnte bislang {club.european_titles} Siege auf europäischer Ebene erreichen.
        </Typography>
      </Container>
    </Fragment>
  )
}
