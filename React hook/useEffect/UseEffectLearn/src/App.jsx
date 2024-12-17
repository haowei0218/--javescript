import { useEffect } from 'react'
import { useState } from 'react'


function App() {
  const [second, setSecond] = useState(0)
  const [minute,setMinute] = useState(0);
  
  
  const [isRunning,setIsRunning] = useState(true)
  useEffect(()=>{
    let SecondTimer;
    if(isRunning){
      // eslint-disable-next-line no-unused-vars
      //setInterval：重複執行一個函數呼叫 每一次執行間隔固定的延遲時間
      SecondTimer=setInterval(()=>{
        setSecond((prevSecond)=>{
          if(prevSecond === 59){
            setMinute((prevMinute)=>prevMinute+1)
            return 0
          }else{
            return prevSecond + 1
          }
        })
      },100)
    }
    return ()=>{
      clearInterval(SecondTimer); 
    
    }
  },[isRunning,second,minute])
  function toggleTimer(){
    setIsRunning(prevState=>!prevState)
  }

  return (
    <>
    <div>
      <h1>計時器 : {minute} minutes : {second} seconds</h1>
      <button onClick={toggleTimer}>
        {isRunning ? "Pause" : "Resume"}
      </button>
    </div>
      
    </>
  )
}

export default App

/**
 * useEffect(<didUpdate>,[dependencies])
 * 1. UseEffect在每次畫面被渲染後 才會呼叫內部的函數(didUpdate)
 * 2. 第二個參數是一個陣列,如果在每次重新渲染後 dependencies陣列內的元素沒有改變,任何在useEffect內的函數就不會被執行
 * 3. 如果第二個參數是空陣列 代表useEffect內的函式只會執行一次
 */
