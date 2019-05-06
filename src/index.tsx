import * as React from 'react'
import { render } from 'react-dom'
import { GlobalStyles } from './GlobalStyles'
import { Scene } from './Scene'

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Scene />
    </React.Fragment>
  )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
