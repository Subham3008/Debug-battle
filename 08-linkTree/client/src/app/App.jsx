import React from 'react'
import router from './app.routes.jsx'
import { RouterProvider } from 'react-router'
import { useTheme } from '../shared/theme/useTheme.js'

const App = () => {
  useTheme()

  return (
    <RouterProvider router={router}/>
  )
}

export default App
