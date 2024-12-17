// eslint-disable-next-line no-unused-vars
import React, {createContext,useContext, useState } from 'react'

//創建一個新的context(內部是默認值)
const ThemeContext = createContext({theme:"light",toggle:()=>{}});

function Toolbar(){
  return <ThemedButton/>
}
function ThemedButton(){
  const {theme,toggleTheme} = useContext(ThemeContext);//讀取ThemeContext內的theme,toggle
  return <button onClick={toggleTheme} style={{background:theme === "dark"? "#333":"#fff" , color:theme === "dark"?"#333":"#fff"}}>Switch to {theme === "dark"?"Light":"Dark"} Mode</button>
}
function App() {
  const [theme,setTheme] = useState('light')
  function toggleTheme(){
    setTheme((prevTheme)=>(prevTheme === 'light'?"dark":"light"))
  }
  return (
    <>
    <ThemeContext.Provider value={{theme,toggleTheme}}> 
      <Toolbar />
    </ThemeContext.Provider>
    </>
  )
}
export default App

/**
 * useContext:有兩個元件（Provider,Consumer) 用於useContext存取全域數據
 * 1. Provider:包裝需要存取上下文值的元件
 * 2. Consumer(useContext)
 * 
 * 流程：
 * 1. 創建上下文：React.createContext
 * 2. Provider包裝文件並提供共享資料（或狀態)
 * 3. 此提供者中的元件useContext用於存取共用資料
 * 
 * 重點：
 * 1. 一開始createContext裡面有兩個參數(是默認值)
 * 2. 使用Context.Provider透過value往創建的createContext傳遞新的值
 * 3. 子組件透過useContext(創建的context)使用內部的值
 */
