import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Axios from "axios";

import Header from "./components/layout/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" />
        <Route path="/characters" />
        <Route path="/monsters" />
        <Route path="/shop" />
      </div>
    </Router>
  );
}

export default App;
