import React from 'react'
import logo from './logo.svg'
import './App.css'

import { ErrorReportingProvider } from '../../core/contexts'
import Example from './components/Example'
function App() {
  return (
    <ErrorReportingProvider>
      <div className="App">
        <header className="App-header">
          <Example />
        </header>
      </div>
    </ErrorReportingProvider>
  )
}

export default App
