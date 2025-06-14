import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



function Protected({children, authentication= true}) {
    const navigate = useNavigate()
    const [loader, setloader] = useState(true)

    const authstatus = useSelector(state => state.auth.status)

    useEffect (()=>{
        if (authentication && authstatus !== authentication) {
            navigate("/login")
        }
        else if(!authentication && authstatus !== authentication){
            navigate("/") 
        }
        setloader(false)
    },[authstatus, authentication, navigate])

  return (
    loader ? (<h1>Loading</h1>): <>(children)</>
  )
}

export default Protected