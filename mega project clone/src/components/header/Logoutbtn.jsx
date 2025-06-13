import React from 'react'
import { useDispatch } from 'react-redux'
import {logout } from '../../store/authSlice'
import authService from '../../appwrite/auth'
function Logoutbtn() {
    const dispatch = useDispatch();
    const logouthandler= ()=>{
        authService.logout().then(()=>{
            dispatch(logout())

        })
    }
    useEffect(() => {
      
    }, [])
    
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
        logout
    </button>
  )
}

export default Logoutbtn