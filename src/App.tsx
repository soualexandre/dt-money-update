import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Summary } from './components/Summary'
import { Transactionos } from './pages/Transactions'
import { GolbalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GolbalStyle/>
      <Transactionos/>
      <Summary/>
    </ThemeProvider>
  )
}

