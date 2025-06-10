import { useState } from "react"
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom'
import Header from "./components/Header"
import './index.css'



function App() {

  return (
    <>
    <div>yo</div>
    <Header/>
    <Outlet/>
    </>
  )
}

export default App
