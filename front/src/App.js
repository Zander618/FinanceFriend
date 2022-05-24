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
  const [userId, setUserId] = useState();

  console.log("USERID", userId);

  useEffect(() => {
    document.title = "Finance Friend";
    fetch("http://localhost:9292/users")
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data);
        console.log("user's full data", data);
      });
  }, []);

  if (!users) {
    return <h2>Loading...</h2>;
  }

  const addUser = (user) => {
    const updateUsers = [...users, user];
    setUsers(updateUsers);
  };


  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route
          path="/moneytracker"
          element={
            <MoneyTracker users={users} setUsers={setUsers} userId={userId} />
          }
        />
        <Route
          path="/assets"
          element={<Assets users={users} setUsers={setUsers} userId={userId} />}
        />
        <Route
          path="/expenses"
          element={
            <Expenses users={users} setUsers={setUsers} userId={userId} />
          }
        />
        <Route
          exact
          path="/"
          element={
            <Home
              users={users}
              userId={userId}
              setUserId={setUserId}
              addUser={addUser}

            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
