import React, { useEffect, useState } from "react";
import AddUser from "./AddUser";
import "./App.css";

const Home = ({ users, userId, setUserId, addUser, setCurrentUser }) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  
  let id = parseInt(userId);

  useEffect(() => {
    let activeUser = users.find(u => u.id === id)
      setCurrentUser(activeUser)
  }, [id])

  let assetSum = 0;
  users.map((user) => {
    if (user.id === id) {
      user.assets.map((total) => (assetSum += total.estimated_value));
      return assetSum;
    }
  });

  let trackerSum = 0;
  users.map((user) => {
    if (user.id === id) {
      user.items.map((total) => (trackerSum += total.cost));
      return trackerSum;
    }
  });

  const handleClick = (e) => {
    setUserId(e.target.id);
  };

  const user = users.map((user) => {
    return (
      <div align="left">
        <li align="left" key={user.id}>
          {user.first_name} {user.last_name}
        </li>
        <button align="left" id={user.id} onClick={handleClick}>
          Select
        </button>
      </div>
    );
  });

  const userName = users.map((user) => {
    if (user.id === id) {
      return user.first_name;
    }
  });

  console.log("find", userName);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Finance Friend</h1>
      </header>
      <button
        onClick={() => {
          setButtonPopup(true);
        }}
      >
        Add User
      </button>
      <AddUser
        users={users}
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        addUser={addUser}
      />
      <h2>Welcome </h2>
      <h1>{userName}</h1>
      <h3>Your current networth</h3>
      <div>
        <h1>${assetSum}</h1>
      </div>
      <h3>Your Money Tracker total</h3>
      <div>
        <h1>${trackerSum}</h1>
      </div>
      <h1 align="left">Users</h1>
      <ul>{user}</ul>
    </div>
  );
};

export default Home;
