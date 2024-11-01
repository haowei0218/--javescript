
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
         
        function RefreshPage(){
          window.location.reload()
        }
         async function autoCreateUser(userId,name,userEmail,wallet){
                  try{
                           if(userId.length === 0 && name.length === 0 && userEmail.length === 0){
                                    console.log("the field is null")
                                    return `the field is null`
                           }
                           const {data} = await createUser({variables:{
                                    id:userId,
                                    username:name,
                                    email:userEmail,
                                    wallet:wallet
                           }})
                           console.log(data)
                           navigate('/')
                           RefreshPage()//實現網頁實時更新 但性能較差
                           
                  }catch(e){
                           console.log(e)
                  }
         }
  return (
    <div>
      <button onClick={()=> autoCreateUser(user.RandomUserId(),user.RandomName(),user.RandomEmail(),user.Wallet())}>Auto create</button>
    </div>
  )
}

export default AutoCreateUserBtn
