import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Axios from "axios";
import Character from "./components/pages/character/character";
import Shop from "./components/pages/shop/shop";

import Header from "./components/layout/Header";
import { ItemProvider } from "./components/pages/shop/ItemContext";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" />
        <Route path="/characters" component={Character} />
        <Route path="/monsters" />
        <ItemProvider>
          <Route path="/shop" component={Shop} />
        </ItemProvider>
      </div>
    </Router>
  );
}

export default App;
