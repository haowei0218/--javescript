import React from 'react';
import { CSVLink, CSVDownload } from "react-csv";
import Download from 'react-csv/components/Download';
import {useQuery} from "@apollo/client"
import { GET_USER } from './api/queryUser';
import { GET_ALL_USERS } from './api/queryUser';

function App() {
//useQuery必須放在組建的頂層
//useQuery<{users:User[]}>(GET_ALL_USERS)表示查詢的返回數據是一個包含user類型陣列的物件
  const {loading,error,data} = useQuery<{users:User[]}>(GET_ALL_USERS)
  
  //定義一個User的結構
  interface User{
    id:string;
    username:string;
    email:string
  }
  
  //避免在data尚未加載時發生錯誤
  const users = data?.users //確保data和data.users都存在 當data = undefined, data.users = undefined
  if(!users) return <p>No users found</p>//處理未找到用戶的情況


  const csvData = users.map((user:User) => ({
    id:user.id,
    username:user.username,
    email:user.email
  }))
  return (
    <div className="App">
      <CSVLink data={csvData} filename="users.csv" target="_blank">Download me</CSVLink>
    </div>
  );
}

export default App;
