import GetAllUser from './graphql/getAllUser'
import UserForm from './graphql/createUser'
import './App.css'

function App() {
  

  return (
    <div style={{display:'grid',gap:'20px', alignContent:'center' ,justifyContent:'center'
    }}>
      <h2>All users</h2>
      <GetAllUser />
      <UserForm />
    </div>
  )
}

export default App
