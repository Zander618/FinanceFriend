import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";

const App = () => {

  return (
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
