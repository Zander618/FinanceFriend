import React, { useState } from 'react'
import Select from 'react-select'
import "./App.css"

const Home = ( { friends } ) => {

  const [ userId, setUserId] = useState()
 
  const options = friends.map((friend) => {  
    return [
      {key :`${friend.id}`, value:`${friend.username}` , label: `${friend.username}` },
    ]  
  })
  
const handleChange = (e) => {
  setUserId(e[0].key)
}
  
// let sum = 0  
// assets.map((asset) => {
//   sum+=asset.estimated_value
//   return sum
// })

 const user = friends.map((friend) => {
   return(
     <h3 key={friend.id}>{friend.users.firstname}</h3>
   )
 })
 console.log("user", user)

  return (
    <div className="App">
    <header className="App-header">
      <h1>
        Finance Friend
      </h1>
    </header>
      <Select options={options} onChange={handleChange}/>
      <h2>Welcome </h2>
      {user}
      <h3>Your current networth</h3>
      <div>
        <h1>$</h1>
      </div>
  </div>
  )
}

export default Home