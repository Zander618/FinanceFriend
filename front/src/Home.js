import React from 'react'
import "./App.css"

const Home = ( { users, assets } ) => {
 

let sum = 0  
assets.map((asset) => {
  sum+=asset.estimated_value
  return sum
})

 const user = users.find((user) => user.id === 1)

  return (
    <div className="App">
    <header className="App-header">
      <h1>
        Finance Friend
      </h1>
    </header>
    <body>
      <h2>Welcome {user.first_name}</h2>
      <h3>Your current networth</h3>
      <div>
        <h1>${sum}</h1>
      </div>
    </body>
  </div>
  )
}

export default Home