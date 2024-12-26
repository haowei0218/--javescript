import { useState } from 'react'
import './App.css'
import Request from './components/Request'
import UserDataCard from './components/UserDataCard'

function App() {
  const userData = {
    count: 24.24,
    rate: "8.98"
  }


  return (
    <>
      <Request>
        {({ loading, data }) => {
          if (loading) {
            return <h1>Loading...</h1>
          } else {
            return <h1>{data?.user}</h1>
          }
        }}
      </Request>
      <UserDataCard userData={userData} />
    </>
  )
}

export default App
