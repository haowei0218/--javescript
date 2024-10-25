
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import RandomData from '../Random_data/random_data';
import { CREATE_USER } from '../api/Graphql';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
let user = new RandomData()
function AutoCreateUserBtn() {

         const [createUser] = useMutation(CREATE_USER);
         const navigate = useNavigate()
         
       
         async function autoCreateUser(userId,name,userEmail){
                  try{
                           if(userId.length === 0 && name.length === 0 && userEmail.length === 0){
                                    console.log("the field is null")
                                    return `the field is null`
                           }
                           const {data} = await createUser({variables:{
                                    id:userId,
                                    username:name,
                                    email:userEmail
                           }})
                           console.log(data)
                           navigate('/')
                  }catch(error){
                           console.log(error)
                  }
         }
  return (
    <div>
      <button onClick={()=> autoCreateUser(user.RandomUserId(),user.RandomName(),user.RandomEmail())}>Auto create</button>
    </div>
  )
}

export default AutoCreateUserBtn
