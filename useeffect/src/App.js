import { useState, useEffect } from "react";
import "./styles.css";

function App() {
  return (
   <div></div>
  );

}

export default function App(){
  const [time, setTime] = useState('')

  function formatTime(val){
    if (val < 10){
      return '0'
    } else{
      return '';
    }
  }

  useEffect(() => {
    const timerID = setInterval(
      () => tick(), 1000)
  })
}


