import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AccountSettings from "./components/AccountSettings";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/account" element={<AccountSettings user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;
