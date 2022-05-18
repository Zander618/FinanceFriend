import React from 'react'
import "./App.css"

const Home = ( { friend } ) => {
  return (
    <div className="App">
    <header className="App-header">
      <h1>
        Finance Friend
      </h1>
    </header>
    <body>
      <h2>{friend.firstName.1}</h2>
      <h3>Your current networth</h3>
      <div>
        <h1>$1,777,110</h1>
      </div>
    </body>
  </div>
  )
}

export default Home