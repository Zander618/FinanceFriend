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

// console.log("option",option)



  useEffect(() => {
    fetch("http://localhost:9292/friends")
    .then((resp) => resp.json())
    .then((data) => {
      console.log("friend's full data", data)
      setFriends(data)
    });
  }, []);


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
          element={<Assets />}
        />
        <Route
          path="/expenses"
          element={<Expenses />}
        />
        <Route exact path="/" element={<Home friends={friends}/>} />
      </Routes>
    </Router>
  );
};

export default App;
