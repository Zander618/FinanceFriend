import React from "react";
import { useState, useEffect } from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import MoneyTracker from "./MoneyTracker";
import Assets from "./Assets";
import Expenses from "./Expenses";

const App = () => {
  const [friends, setFriends] = useState([])
  const [userId, setUserId] = useState()
  // const [user, setUser] = useState([])

// console.log("user", user)


  // console.log("assets", assets)

  useEffect(() => {
    document.title = "Finance Friend"
    fetch("http://localhost:9292/friends")
    .then((resp) => resp.json())
    .then((data) => {
      setFriends(data)
      console.log("friend's full data", data)
    });
  }, []);

  if (!friends) return <h2>Loading...</h2>


  // const changeUser = (friend) => {
  //   }




  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route
          path="/moneytracker"
          element={<MoneyTracker />}
        />
        <Route
          path="/assets"
          element={<Assets friends={friends} userId={userId} setFriends={setFriends}/>}
        />
        <Route
          path="/expenses"
          element={<Expenses />}
        />
        <Route exact path="/" element={<Home friends={friends} userId={userId} setUserId={setUserId}/>} />
      </Routes>
    </Router>
  );
};

export default App;
