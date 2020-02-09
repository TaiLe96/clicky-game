import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return(
    <div className="App">
      <Header/>
      <Navbar/>
      <Card/>
    </div>
  )
}

export default App;
