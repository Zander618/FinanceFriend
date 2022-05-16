import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import MoneyTracker from "./MoneyTracker";
import Assests from "./Assests";
import Graphs from "./Graphs";
import SignIn from "./SignIn";

const App = () => {

  return (
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/MoneyTracker" element={<MoneyTracker />}/>
        <Route path="/Assests" element={<Assests />}/>
        <Route path="/Graphs" element={<Graphs />}/>
        <Route path="/SignIn" element={<SignIn />}/>
      </Routes>
    </Router>
  );
};

export default App;
