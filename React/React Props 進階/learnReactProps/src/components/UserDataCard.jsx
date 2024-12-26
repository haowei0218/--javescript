import React from 'react'
import UserData from './data/UserData'
function UserDataCard(props) {
  return (
    <div>
      <h4>hello user data</h4>
      <UserData {...props} />
    </div>
  )
}

export default UserDataCard
