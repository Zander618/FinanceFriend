import React from "react";
import { useState, useEffect } from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import MoneyTracker from "./MoneyTracker";
import Assets from "./Assets";
import Expenses from "./Expenses";
import SignIn from "./SignIn";

const App = () => {
  const [items, setItems] = useState([]);
  const [assets, setAssets] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [users, setUsers] = useState([]);
  const [option, setOption] = useState()
  const [friends, setFriends] = useState([])

/**
 *   useEffect(() => {
    fetch("http://localhost:9292/users/1")
      .then((resp) => resp.json())
      .then((user) => {
        user.items
        setStuff(user)
      });
      
 * 
 * 
 * 
 * 
 * 
 */
console.log("option",option)

  useEffect(() => {
    fetch(`http://localhost:9292/users/1/items`)
      .then((resp) => resp.json())
      .then((data) => {
        setItems(data)
      });
      
      fetch(`http://localhost:9292/users/1/assets`)
      .then((resp) => resp.json())
      .then((data) => {
        setAssets(data)
      });
      
      fetch(`http://localhost:9292/users/1/expenses`)
      .then((resp) => resp.json())
      .then((data) => {
        setExpenses(data)
      });
      
      fetch("http://localhost:9292/users")
      .then((resp) => resp.json())
      .then((data) => setUsers(data));

      fetch("http://localhost:9292/friends")
      .then((resp) => resp.json())
      .then((data) => setFriends(data));
  }, []);



  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Home users={users}  assets={assets}/>} />
        <Route
          path="/moneytracker"
          element={<MoneyTracker items={items} setItems={setItems} />}
        />
        <Route
          path="/assets"
          element={<Assets assets={assets} setAssets={setAssets} />}
        />
        <Route
          path="/expenses"
          element={<Expenses expenses={expenses} setExpenses={setExpenses} />}
        />
        <Route path="/signIn" element={<SignIn  friends={friends} setOption={setOption} value={option}/>} />
      </Routes>
    </Router>
  );
};

export default App;
