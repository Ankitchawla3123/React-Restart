import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import './App.css'

import authService from "./appwrite/auth"
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';
// import conf from './conf/conf'

function App() {
  
  // console.log(process.env.REACT_APP_APPWRITE_URL);// for create react app 
  // check vite documentation 
  // console.log(import.meta.env.VITE_APPWRITE_URL)
  // console.log(conf.appwriteurl);

  const [loading, setloading] = useState(true);
  const dispatch= useDispatch()
  
useEffect(() => {
  console.log("inside useeffect");
  
    authService.getCurrentuser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setloading(false);
      });
  }, []);

  
  return (
    <>
    {!loading? (    <div className=' min-h-screen flex flex-wrap content-between bg-gray-500'>
      <div className='w-full block'>
        <Header/>
        <main>
          todo {/* <Outlet/> */}
        </main>
        <Footer/>
      </div>

    </div>): 
    null}

    </>
  )
}

export default App
