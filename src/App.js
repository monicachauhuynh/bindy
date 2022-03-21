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
import VoiceChat from "./Components/Questions/components/VoiceChat";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <main className="main">
          <div className="gradient-eclipse-1"></div>
          <div className="gradient-eclipse-2"></div>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<Account />} />
            <Route path="/home" element={<Home />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/questions/voice-chat" element={<VoiceChat />} />
            <Route path="/match" element={<Match />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
