import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CharacterSheet from "./components/pages/character/characterSheet";
import Shop from "./components/pages/shop/shop";

import Header from "./components/layout/Header";

import { ItemProvider } from "./components/pages/shop/ItemContext";
import { CategoryProvider } from "./components/pages/shop/CategoryContext";

import { CharacterProvider } from "./components/context/CharacterContext";
import Monsters from "./components/pages/Monster/Monsters";
import MonsterProvider from "./components/pages/Monster/MonsterContext";
// import AddCharacter from './components/pages/AddCharacter'
// import Characters from './components/pages/character'
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
          <CategoryProvider>
            <Route path="/shop" component={Shop} />
          </CategoryProvider>
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
        <Route path="/monsters" component={Monsters} />
      </MonsterProvider>
    </Router>
  );
}

export default App;
