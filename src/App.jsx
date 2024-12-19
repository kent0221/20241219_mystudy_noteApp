/**
 * App.jsx
 */
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Router } from './router/Router'
import { CssBaseline } from '@mui/material'
import { NoteProvider } from './providers/NoteProvider'

function App() {

  return (
    <>
    <NoteProvider>
      <CssBaseline/>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
    </NoteProvider>
    </>
  )
}

export default App
