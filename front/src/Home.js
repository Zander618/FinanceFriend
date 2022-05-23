import React, { useState } from "react";
import AddUser from "./AddUser";
import "./App.css";

const Home = ({ users, userId = 1, setUserId, setUsers }) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  let id = parseInt(userId);

  let sum = 0;
  users.map((user) => {
    if (user.id === id) {
      user.assets.map((total) => (sum += total.estimated_value));
      return sum;
    }
  });

  const handleClick = (e) => {
    setUserId(e.target.id);
  };

  const user = users.map((user) => {
    return (
      <div align="left">
        <li align="left">
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
        setUsers={setUsers}
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
      />
      <h2>Welcome </h2>
      <h1>{userName}</h1>
      <h3>Your current networth</h3>
      <div>
        <h1>${sum}</h1>
      </div>
      <h1 align="left">Users</h1>
      <ul>{user}</ul>
    </div>
  );
};

export default Home;
