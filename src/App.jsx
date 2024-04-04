import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Dashboard from './components/Dashboard'
import Cart from './components/Cart'

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path='/cart' element={<Cart />} />
    </Route>
  ))
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
