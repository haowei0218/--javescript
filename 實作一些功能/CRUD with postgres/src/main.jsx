import React from 'react';
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client';
import App from './App';
import client from './apollo'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UpdateForm from './pages/UpdateForm';

  
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/update/:id" element={<UpdateForm />} /> 
        </Routes>
      </Router>
    </ApolloProvider>
  </React.StrictMode>
);