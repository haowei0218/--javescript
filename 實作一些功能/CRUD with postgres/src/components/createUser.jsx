// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { CREATE_USER } from '../api/Graphql'
function UserForm() {
const [createUser] = useMutation(CREATE_USER)

const [username,setUserName] = useState('')
const [id,setId] = useState('')
const [email,setEmail] = useState('')

function handleUserName(event){
         setUserName(event.target.value)
}
function handleUserId(event){
         setId(event.target.value)
}
function handleEmail(event){
         setEmail(event.target.value)
}

async function RequestCreateUserApi(){
         try{
                  const { data } = await createUser({variables:{
                           id:id,
                           username:username,
                           email:email}})
                  console.log('data',data)
         }catch(error){
                  console.log(error)
         }

}
  return (
    <div>
         <input type="text" onChange={handleUserId} name='id' placeholder='Enter your Id'></input>
         <input type="text" onChange={handleUserName} name='username' placeholder='Enter your username'></input>
         <input type="text" onChange={handleEmail} name='email' placeholder='Enter your email'></input>
         <button onClick={RequestCreateUserApi}>Create user</button>
    </div>
  )
}

export default UserForm
