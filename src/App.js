import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Signup,
  Header,
  Home,
  Account,
  Messages,
  Questions,
  Match,
} from "./Components";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <Header />
        </div>
        <main className="main">
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<Account />} />
            <Route path="/home" element={<Home />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/match" element={<Match />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
