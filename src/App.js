import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Axios from "axios";
import Character from "./components/pages/charactrer";

import Header from "./components/layout/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" />
        <Route path="/characters" component={Character} />
        <Route path="/monsters" />
        <Route path="/shop" />
      </div>
    </Router>
  );
}

export default App;
