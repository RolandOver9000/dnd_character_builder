import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CharacterSheet from "./components/pages/character/characterSheet";
import Header from "./components/layout/Header";

import { ItemProvider } from "./components/pages/shop/context/ItemContext";
import { CategoryProvider } from "./components/pages/shop/context/CategoryContext";
import Shop from "./components/pages/shop/element/Shop";

import { CharacterProvider } from "./components/context/CharacterContext";

import { MonsterProvider } from "./components/pages/monster/context/MonsterContext";
import Monsters from "./components/pages/monster/element/Monsters";
import Monster from "./components/pages/monster/element/Monster";
import MonsterDetail from "./components/pages/monster/element/MonsterDetail";
import { MonsterDetailProvider } from "./components/pages/monster/context/MonsterDetailContext";

import Characters from "./components/pages/charactersPage/Characters";
import AddCharacter from "./components/pages/charactersPage/AddCharacter";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" />

        <ItemProvider>
          <CategoryProvider>
            <Route path="/shop" component={Shop} />
          </CategoryProvider>
        </ItemProvider>

        <CharacterProvider>
          <Route path="/characters" component={Characters} />
          <Route path="/add-new-character" component={AddCharacter} />
        </CharacterProvider>
        <Route path="/new-character" component={CharacterSheet} />

        <MonsterProvider>
          <MonsterDetailProvider>
            <Route path="/monsters" component={Monsters} />
            <Route path="/monster" component={Monster} />
            <Route path="/MonsterDetail/:name" component={MonsterDetail} />
          </MonsterDetailProvider>
        </MonsterProvider>
      </div>
    </Router>
  );
}

export default App;
