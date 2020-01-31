import React from 'react'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import { useStore } from '../store'

const useStyles = makeStyles(() => ({
  avatarCell: {
    width: '40px'
  }
}))

export const Home: React.FC = () => {
  const styles = useStyles()
  const { t } = useTranslation()
  const { state } = useStore()
  const { push: navigateTo } = useHistory()

  return (
    <TableContainer>
      <Table>
        <TableBody>
          {state.content.map((club, index) => (
            <TableRow key={club.name} hover={true} onClick={() => navigateTo(`/detailsview/${index}`)}>
              <TableCell className={styles.avatarCell}>
                <Avatar alt={club.name} src={club.image} />
              </TableCell>
              <TableCell>
                <Typography variant="body1">{club.name}</Typography>
                <Typography variant="body2" display="inline">
                  {club.country}
                </Typography>{' '}
                <Typography variant="body2" display="inline" color="textSecondary">
                  {club.value} {t('MILL_EURO')}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
