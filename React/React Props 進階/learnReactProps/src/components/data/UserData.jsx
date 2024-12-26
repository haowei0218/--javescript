import React from 'react'

function UserData({ userData }) {
  return (
    <div style={{ display: 'grid', gap: '12px' }}>
      <h1>user info</h1>
      <h2>{userData.count}</h2>
      <h3>與上個月相比成長{userData.rate}%</h3>
    </div>
  )
}

export default UserData
