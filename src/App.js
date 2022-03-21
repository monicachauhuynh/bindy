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
  Signin
} from "./Components";
import "./App.css";
import Theme from "./Theme";

function App() {
  return (
    <Router>
      <Theme>
        <div className="App">
          <div className="header">
            <Header />
          </div>
          <main className="main">
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/account" element={<Account />} />
              <Route path="/home" element={<Home />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/questions" element={<Questions />} />
              <Route path="/match" element={<Match />} />
            </Routes>
          </main>
        </div>
      </Theme>
    </Router>
  );
}

export default App;
