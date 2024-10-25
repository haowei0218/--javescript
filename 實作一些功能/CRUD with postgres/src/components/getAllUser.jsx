
import { useMutation, useQuery } from '@apollo/client'
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { GET_ALL_USERS,DELETE_USER} from '../api/Graphql'
import DisplayData from './DisplayData'
function GetAllUser() {
         const {loading,error,data} = useQuery(GET_ALL_USERS)
         const [deleteUser] = useMutation(DELETE_USER)
         if(loading)return <p>Loading....</p>
         if(error)return <p>Error:{error}</p>
         const users = data?.users
         if(!users)return <p>No users found</p>
         async function RequestDeleteUserApi(userid){
          try{
            const {data} = await deleteUser({variables:{
              id:userid
            }})
            console.log(data)
          }catch(e){
            console.log(e)
          }
        }
        
        
  return (
    <div>
      { users.map( (user) =>{return (
       //fn使用箭頭函數 意味著只有在發生事件時才會掉用 如果沒有加上箭頭 在每次渲染組件的時候 該函數就會被執行
       <DisplayData key={user.id} id={user.id} username={user.username} email={user.email} deleteFn={()=>RequestDeleteUserApi(user.id)} />
        )}) }  
    </div>
  )
}

export default GetAllUser
 