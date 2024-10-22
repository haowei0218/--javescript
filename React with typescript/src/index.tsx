import React from 'react';
import ReactDOM from 'react-dom/client'; // 注意這裡的改變
import App from './App';
import { ApolloProvider } from '@apollo/client';
import client from './apollo client/client'



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
    
  </React.StrictMode>
);

//從 React 18 開始，React 不再支持使用 ReactDOM.render 來渲染組件，
//而是使用 createRoot 方法。你需要將 index.tsx 中的渲染代碼改為如上所示


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

