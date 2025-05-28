import React, { useState } from "react";

import "../index.css";


function Inputfield({ setstarted , sethours, setminutes, setseconds, hours,minutes, seconds }) {
    const [validation, setvalidation] = useState(true)
    const hourevent=(e)=>{
        const val=e.target.value;
        if (/^\d*$/.test(val)) {
            if (val=="") {
                sethours("")
            }
            else{
                sethours(parseInt(val))
                setvalidation(true);
            }
            
        }
        else{
            setvalidation(false);
        }
    }
    const minuteevent=(e)=>{
        const val=e.target.value;
        if (/^\d*$/.test(val)) {
            if (val=="") {
                setminutes("")
            }
            else if (parseInt(val)>=0 && parseInt(val)<=59) {
                    setminutes(parseInt(val))
                    setvalidation(true);
            }
        }
        else{
            setvalidation(false);
        }
    }
    const secondschange=(e)=>{
        const val=e.target.value;
        if (/^\d*$/.test(val)) {
            if (val=="") {
                setseconds("")
            }
            else if (parseInt(val)>=0 && parseInt(val)<=59) {
                    setseconds(parseInt(val))
                    setvalidation(true);
            }
        }
        else{
            setvalidation(false);
        }
    }
    const startset=()=>{
        if (hours=="" && minutes == "" && seconds == "") {
            alert("empty set of val")
        }
        else{
            if (minutes=="") {
                setminutes(0);
            }
            if (hours=="") {
                sethours(0)
            }
            if (seconds=="") {
                setseconds(0)
            }
            setstarted(true)
        }
    }



  return (
    <div className=" flex-col flex gap-4 items-center  ">
      <div className=" flex justify-center gap-5">
        <input
          className="yo"
          onChange={(e) => hourevent(e)}
          placeholder="HH"
          id="hour"
          value={hours}
        />
        :
        <input
 
          className="yo"
          onChange={(e) => minuteevent(e)}
          placeholder="MM"
          id="min"
          value={minutes}
        />
        :
        <input

          className="yo"
          placeholder="SS"
          id="sec"
          onChange={(e) => secondschange(e)}
          value={seconds}
        />
      </div>
      <button onClick={(e) => startset(e)}> Start</button>
    </div>
  );
}

export default Inputfield;
