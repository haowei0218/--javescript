// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useMutation } from '@apollo/client'
import { UPDATE_USER } from '../api/Graphql'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
function UpdateForm() {
         const {id} = useParams()//從網址擷取出參數
         const [updateUser] = useMutation(UPDATE_USER)
         const [newUserName,setNewUserName] = useState('')
         const [newEmail,setNewEmail] = useState('')
         const [total,setTotal] = useState(0)
         const navigate = useNavigate()
         function handleUserNameChange(event){
                  setNewUserName(event.target.value);
         }
         function handleUserEmailChange(event){
                  setNewEmail(event.target.value);
         }
         function handleUserWalletChange(event){
                  let number = parseInt(event.target.value)
                  setTotal(number)
         }
         async function RequestUpdateUserApi(oldUserId,username,useremail,wallet){
                  try{
                    const {data} = await updateUser({
                      variables:{
                        id:oldUserId,
                        username:username,
                        email:useremail,
                        wallet:wallet
                      }
                    })
                    console.log(data)
                    navigate('/')      
                  }catch(error){
                    console.log(error)
                  }
                }

  return (
    <div key={id}>
      <input id='username' placeholder='Update your username' onChange={handleUserNameChange}></input>
      <input id='email' placeholder='Update your email' onChange={handleUserEmailChange}></input>
      <input id='wallet' placeholder='Update your wallet' onChange={handleUserWalletChange}></input>
      <button onClick={()=>RequestUpdateUserApi(id,newUserName,newEmail,total)}>Update</button>
    </div>
  )
}

export default UpdateForm
