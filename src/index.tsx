import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as RouterProvider } from 'react-router-dom'
import { StoreProvider } from './store'
import { App } from './App'
import * as serviceWorker from './serviceWorker'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#01C13B',
      contrastText: '#ffffff'
    }
  }
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StoreProvider>
      <RouterProvider>
        <CssBaseline />
        <App />
      </RouterProvider>
    </StoreProvider>
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
