import React from 'react'
import Container from '@material-ui/core/Container'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()

  return (
    <Container className={styles.container} maxWidth={false}>
      {t('PAGE_NOT_FOUND')}
    </Container>
  )
}
