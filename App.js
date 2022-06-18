import React,{useState} from 'react'
import { useEffect } from 'react';

const App = () => {
  const[hour,setHour]=useState(0);
  const[min,setMin]=useState(0);
  const[second,setSecond]=useState(0);
  const[stop,setStop]=useState(false);
  const starthandler=()=>{
    setStop(true);
  }
  const stophandler=()=>{
    setStop(false);
  }
  const resethandler=()=>{
    setHour(0);
    setMin(0);
    setSecond(0);
    setStop(false);
  }
  useEffect(()=>{
    let interval=null;
    if(stop){
      interval=setInterval(() => {
        setSecond(second+1);
        if(second>58){
          setMin(min+1);
          setSecond(0);
          clearInterval(interval);
        }
        if(min>59){
          setHour(hour+1);
          setMin(0);
          setSecond(0);
          clearInterval(interval);
        }
      },1000 );
    }
    else{
      clearInterval(interval);
    }
    return ()=>{
      clearInterval(interval);
    }
  });
  return <>
  <div style={{textAlign:'center'}}>
    <h1>Stop Watch</h1>
  <p style={{textAlign:'center',fontSize:'30px'}}>{hour}:{min}:{second}</p>
  <button style={{fontSize:'30px'}} onClick={starthandler}>Start</button>
  <button style={{fontSize:'30px'}} onClick={stophandler}>Stop</button>
  <button style={{fontSize:'30px'}} onClick={resethandler}>Reset</button>
  </div>
  </>
}

export default App;