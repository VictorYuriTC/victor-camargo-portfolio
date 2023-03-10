import React from "react";
import "./App.css";
import Header from "./atomic/organisms/Header";
import Home from "./atomic/pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
