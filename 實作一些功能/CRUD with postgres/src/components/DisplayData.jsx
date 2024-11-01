// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useNavigate } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
function DisplayData({id,username,email,deleteFn,total}) {
  const navigate = useNavigate()
  return (
    <div key={id} style={{display:'flex',alignContent:'center',justifyContent:'center',gap:'10px'}}>
      <li style={{listStyle:'none'}} key={id}>{username} / {email} / {total === null ? 0: total}</li>
      
      <button id={`Update${id}_btn`} onClick={()=>navigate(`/update/${id}`)}>update</button>
      <button id={`Delete${id}_btn`} onClick={()=>deleteFn(id)}>delete</button>
    </div>
  )
}

//useNavigate("")裡面的參數一定要是真實存在於main.jsx的route path
//ex:
/*<Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/update" element={<UpdateForm />} /> 
        </Routes>
</Router>*/

export default DisplayData
