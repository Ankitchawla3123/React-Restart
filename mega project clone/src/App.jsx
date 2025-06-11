import { useState } from 'react'
import './App.css'
import conf from './conf/conf'

function App() {
  const [count, setCount] = useState(0)
  // console.log(process.env.REACT_APP_APPWRITE_URL);// for create react app 
  // check vite documentation 
  console.log(import.meta.env.VITE_APPWRITE_URL)
  console.log(conf.appwriteurl);
  
  return (
    <>
    <h1>blog app in appwrite</h1>
    </>
  )
}

export default App
