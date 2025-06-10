import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

function About() {
    const parms=useParams()
  return (
    <>
        <div>About {parms.useid}</div>
        <Outlet/>
    </>
    
  )
}

export default About