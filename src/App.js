import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CharacterSheet from "./components/pages/character/characterSheet";
import Shop from "./components/pages/shop/shop";

import Header from "./components/layout/Header";

import { ItemProvider } from "./components/pages/shop/ItemContext";

import { CharacterProvider } from "./components/context/CharacterContext";
import Monsters from "./components/pages/Monster/Monsters";
import MonsterProvider from "./components/pages/Monster/MonsterContext";
// import AddCharacter from './components/pages/AddCharacter'
// import Characters from './components/pages/character'
import Monster from "./components/pages/Monster/Monster";
import MonsterDetail from "./components/pages/Monster/MonsterDetail";
import MonsterDetailProvider from "./components/pages/Monster/MonsterDetailContext";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" />
        <Route path="/characters" />
        <Route path="/new-character" component={CharacterSheet} />
        <Route path="/monsters" />
        <ItemProvider>
          <Route path="/shop" component={Shop} />
        </ItemProvider>
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
        <MonsterDetailProvider>
          <Route path="/monsters" component={Monsters} />

          <Route path="/monster" component={Monster} />
          <Route path="/MonsterDetail/:name" component={MonsterDetail} />
        </MonsterDetailProvider>
      </MonsterProvider>
    </Router>
  );
}

export default App;
