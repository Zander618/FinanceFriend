import React from 'react'
import "./App.css"

const Home = ( { users } ) => {


  
  let sum = 0  
  users.map((user) => {
    user.assets.map((total) => sum += total.estimated_value)
    return sum
    }
  )

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Finance Friend
        </h1>
      </header>
      <h2>Welcome </h2>
        {users.map((user) => 
        <h1>{user.first_name} {user.last_name}</h1>
        )}
        <h3>Your current networth</h3>
        <div>
          <h1>${sum}</h1>
      </div>
  </div>
  )
}

export default Home