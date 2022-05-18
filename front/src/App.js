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
  const [items, setItems] = useState();
  const [assets, setAssets] = useState();
  const [expenses, setExpenses] = useState();
  const [friends, setFriends] = useState()

  useEffect(() => {
    fetch("http://localhost:9292/items")
      .then((resp) => resp.json())
      .then((data) => setItems(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/assets")
      .then((resp) => resp.json())
      .then((data) => setAssets(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/expenses")
      .then((resp) => resp.json())
      .then((data) => setExpenses(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/friends")
      .then((resp) => resp.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Home friends={friends} />} />
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
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
