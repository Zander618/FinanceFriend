import React, { useEffect, useState } from "react";
import AddUser from "./AddUser";
import "./App.css";

const Home = ({ setSelectedUser, users, selectedUserId, setSelectedUserId, addUser }) => {
  const [buttonPopup, setButtonPopup] = useState(false);

  let id = parseInt(selectedUserId);


  useEffect(() => {
    let activeUser = users.find((u) => u.id === id);
    setSelectedUser(activeUser);
  }, [id]);

  const handleClick = (e) => {
    setSelectedUserId(e.target.id)
    let activeUser = users.find((u) => u.id === id);
    setSelectedUser(activeUser)
    // selectedUser = activeUser
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


  // logical and selected user AND render their name
  // selected user should be set to null
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
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        addUser={addUser}
      />
      <h2>Welcome </h2>
      <h1>{userName}</h1>
      <h1 align="left">Users</h1>
      <ul>{user}</ul>
    </div>
  );
};

export default Home;
