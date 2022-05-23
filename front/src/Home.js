import React from 'react'
import Select from 'react-select'
import "./App.css"

const Home = ( { friends, userId, setUserId } ) => {

  const options = friends.map((friend) => {  
    return [
      {key :`${friend.id}`, value:`${friend.username}` , label: `${friend.username}` },
    ]  
  })
  
const handleChange = (e) => {
  setUserId(e[0].key)
}
  
  let sum = 0  
  friends.map((friend) => {
    if (`${friend.users[0].id}` === userId){
    friend.users[0].assets.map((total) => sum += total.estimated_value)
    return sum
    }
  })

 const userName = friends.map((friend) => { 
  if (`${friend.users[0].id}` === userId){
  return(
     <h3 key={friend.key}>{friend.users[0].first_name}</h3>
   )
  }
 })

  return (
    <div className="App">
    <header className="App-header">
      <h1>
        Finance Friend
      </h1>
    </header>
      <Select options={options} onChange={handleChange}/>
      <h2>Welcome </h2>
      {userName}
      <h3>Your current networth</h3>
      <div>
        <h1>${sum}</h1>
      </div>
  </div>
  )
}

export default Home