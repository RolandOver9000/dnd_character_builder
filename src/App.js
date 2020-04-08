import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Axios from "axios";

import Header from "./components/layout/Header";
import { CharacterProvider } from "./components/context/CharacterContext";
import Monsters from "./components/pages/Monster/Monsters";
import MonsterProvider from "./components/pages/Monster/MonsterContext";
// import AddCharacter from './components/pages/AddCharacter'
// import Characters from './components/pages/character'
import Monster from "./components/pages/Monster/Monster";
import MonsterDetail from "./components/pages/Monster/MonsterDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" />
        <CharacterProvider>
          <Route
            exact
            path="/characters"
            render={(props) => (
              <React.Fragment>
                {/* <AddCharacter /> */}
                {/* <Characters/> */}
              </React.Fragment>
            )}
          />
        </CharacterProvider>

        <Route path="/shop" />
      </div>
      <MonsterProvider>
        <Route path="/monsters" component={Monsters} />
        <Route path="/monster" component={Monster} />
        <Route path="/MonsterDetail/:name" component={MonsterDetail} />
      </MonsterProvider>
    </Router>
  );
}

export default App;
