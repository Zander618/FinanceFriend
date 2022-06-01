import React from "react";
import { useState, useEffect } from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import MoneyTracker from "./MoneyTracker";
import Assets from "./Assets";
import Expenses from "./Expenses";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState();
  const [selectedUser, setSelectedUser] = useState([0]);


  // let selectedUser

  // create selected User variable derived from "user" state

  console.log("USERID", selectedUserId);
  console.log("Selected usssssser", selectedUser);

  useEffect(() => {
    document.title = "Finance Friend";
    fetch("http://localhost:9292/users")
      .then((resp) => resp.json())
      .then((data) => {
        console.log("All Data", data);
        setUsers(data);
      });
  }, []);

  if (!users) {
    return <h2>Loading...</h2>;
  }

  const addUser = (user) => {
    const updatedUsers = [...users];
    updatedUsers.push(user)
    setUsers(updatedUsers);
  };

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route
          path="/moneytracker"
          element={
            <MoneyTracker
              users={users}
              setSelectedUser={setSelectedUser}
              selectedUserId={selectedUserId}
              selectedUser={selectedUser}
              setUsers={setUsers}
            />
          }
        />
        <Route
          path="/assets"
          element={
            <Assets
              users={users}
              setSelectedUser={setSelectedUser}
              selectedUserId={selectedUserId}
              selectedUser={selectedUser}
              setUsers={setUsers}
            />
          }
        />
        <Route
          path="/expenses"
          element={
            <Expenses
              users={users}
              setSelectedUser={setSelectedUser}
              selectedUserId={selectedUserId}
              selectedUser={selectedUser}
              setUsers={setUsers}
            />
          }
        />
        <Route
          exact
          path="/"
          element={
            <Home
              setSelectedUser={setSelectedUser}
              users={users}
              selectedUserId={selectedUserId}
              setSelectedUserId={setSelectedUserId}
              addUser={addUser}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
