import GetAllUser from './components/getAllUser'
import UserForm from './components/createUser'
import './App.css'
import AutoCreateUserBtn from './components/AutoAddUser'

function App() {
  

  return (
    <div style={{display:'grid',gap:'20px', alignContent:'center' ,justifyContent:'center'
    }}>
      <h2>All users</h2>
      <GetAllUser />
      <UserForm />
      <AutoCreateUserBtn />
    </div>
  )
}

export default App
