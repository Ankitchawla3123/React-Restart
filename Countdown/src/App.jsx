import { useState } from 'react'

import './App.css'
import Inputfield from './components/Inputfield'
import Countdown from './components/Countdown'

function App() {
  const [started, setstarted] = useState(false)
  const [hours, sethours] = useState("");
  const [minutes, setminutes] = useState("");
  const [seconds, setseconds] = useState("");


  return (
    <>
    { started ? 
    <Countdown setstarted={setstarted} hours={hours} minutes={minutes} seconds={seconds} sethours={sethours} setminutes={setminutes} setseconds={setseconds}/> :
    <Inputfield hours={hours} minutes={minutes} seconds={seconds} setstarted={setstarted} sethours={sethours} setminutes={setminutes} setseconds={setseconds}></Inputfield>  }
    
    </>
  )
}

export default App
