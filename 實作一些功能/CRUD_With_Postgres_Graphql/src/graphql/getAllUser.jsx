/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useMutation, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { GET_ALL_USERS } from '../api/userQuery'
import { DELETE_USER } from '../api/userQuery'
function GetAllUser() {
         const {loading,error,data} = useQuery(GET_ALL_USERS)
         const [deleteUser] = useMutation(DELETE_USER)
         const [editUserId,setEditUserId] = useState(null)
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
        <div key={user.id} style={{display:'flex',alignContent:'cetner',justifyContent:'center'}}>
          <li style={{listStyle:'none'}}  key={ user.id }>{ user.username  } / {user.email}</li> 
          <button id={`Update${user.id}_btn`}>update</button>
          <button id={`Delete${user.id}_btn`} onClick={()=>RequestDeleteUserApi(user.id)}>delete</button>
        </div>
        )}) }  
    </div>
  )
}

export default GetAllUser
 