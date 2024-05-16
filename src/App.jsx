import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
<<<<<<< Updated upstream
import Header from "./components/Header";
=======
import Header from "./pages/Header";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Stashed changes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
<<<<<<< Updated upstream
=======
=======

function App() {
  return (
    <div>
      <Header />
    </div>
>>>>>>> cff6b43 (billeterie)
=======

function App() {
  return (
    <div>
      <Header />
    </div>
>>>>>>> cff6b43 (billeterie)
=======

function App() {
  return (
    <div>
      <Header />
    </div>
>>>>>>> cff6b43 (billeterie)
=======

function App() {
  return (
    <div>
      <Header />
    </div>
>>>>>>> cff6b43 (billeterie)
=======

function App() {
  return (
    <div>
      <Header />
    </div>
>>>>>>> cff6b43 (billeterie)
>>>>>>> Stashed changes
  );
}

export default App;
