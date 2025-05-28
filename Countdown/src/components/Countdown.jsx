import React, { useEffect, useState } from "react";

function Countdown({
  setstarted,
  sethours,
  setminutes,
  setseconds,
  hours,
  minutes,
  seconds,
}) {
  const [pause, setpause] = useState(false);
  const [timerid, settimerid] = useState("");
  const [isallzero, setisallzero] = useState(false)

  function sbt() {
    if (!pause) {
      clearInterval(timerid);
    } else {
      changetimer();
    }
    setpause((prev) => !prev);
  }
  
  function valuereset(){
    setseconds("")
    sethours("")
    setminutes("")
  }



  function changetimer() {
    if (seconds > 0) {
      setseconds((s) => s - 1);
    } else if (minutes > 0) {
      setminutes((m) => m - 1);
      setseconds(59);
    } else if (hours > 0) {
      sethours((h) => h - 1);
      setminutes(59);
      setseconds(59);
    }
  }

  useEffect(() => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
        setisallzero(true);
        false
    }

    const timer = setInterval(() => {
      changetimer();
    }, 1000);
    settimerid(timer);

    return () => clearInterval(timer);
  }, [hours, minutes, seconds]);

  return (
    <div className="flex flex-col justify-center  items-center gap-2  ">
      <div className="flex gap-4 text-center">
        <div className="yo flex items-center justify-center">{hours}</div>
        <div className="yo flex items-center justify-center">{minutes}</div>
        <div className="yo flex items-center justify-center">{seconds}</div>
      </div>
      <div className="flex gap-2">
        {!isallzero && (
          <button
            className=" w-16 h-11 border-solid border-black border-2"
            style={
              pause
                ? {
                    width: "auto ",
                    paddingLeft: "0.5rem",
                    paddingRight: "0.5rem ",
                  }
                : null
            }
            onClick={() => sbt()}
          >
            {pause ? "Resume" : "Pause"}
          </button>
        )}

        <button className="yo" onClick={() => {
            valuereset()
            setstarted(false)}}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Countdown;
