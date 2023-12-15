import React from 'react'
import { ThemeProvider as Provider } from '@mui/material/styles'

import theme from "styles/theme.ts";
import Home from "pages/Home";
import { BackgroundApp } from "./style.tsx";

const App: React.FC = () => {
  return (
    <Provider theme={theme}>
      <BackgroundApp>
        <Home />
      </BackgroundApp>
    </Provider>
  )
}

export default App
