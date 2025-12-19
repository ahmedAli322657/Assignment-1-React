import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './Comps/About/About'
import Contact from './Comps/Contact/Contact'
import Portfolio from './Comps/Portfolio/Portfolio'
import Navbar from './Comps/Navbar/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Comps/Layout/Layout'
let route = createBrowserRouter([
  {path:"" , element:<Layout/>, children:[
    {index:true , element:<About/>},
    {path:"portfolio" , element:<Portfolio/>},
    {path:"contact" , element:<Contact/>},
  ]},
  
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App
