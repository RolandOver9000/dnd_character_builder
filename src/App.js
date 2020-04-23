import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CharacterSheet from "./components/pages/character/characterSheet";
import Header from "./components/fixLayout/element/Header";

import { ItemProvider } from "./components/pages/shop/context/ItemContext";
import { CategoryProvider } from "./components/pages/shop/context/CategoryContext";
import Shop from "./components/pages/shop/element/ItemGrid";

import GlobalStyle from "./components/style/GlobalStyle";
import AppFontStyle from "./components/style/AppStyle";

import { CharacterProvider } from "./components/context/CharacterContext";

import { MonsterProvider } from "./components/pages/monster/context/MonsterContext";
import Monsters from "./components/pages/monster/element/Monsters";
import Monster from "./components/pages/monster/element/Monster";
import MonsterDetail from "./components/pages/monster/element/MonsterDetail";
import { MonsterDetailProvider } from "./components/pages/monster/context/MonsterDetailContext";
import AddMonster from "./components/pages/monster/element/AddMonster";

import Characters from "./components/pages/charactersPage/Characters";
import AddCharacter from "./components/pages/charactersPage/AddCharacter";

import { Home } from "./components/pages/home/element/Home";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppFontStyle>
        <div className="app">
          <Route exact path="/" component={Home} />
          <Header />

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
          <Route path="/AddMonster" component={AddMonster}></Route>
        </div>
      </AppFontStyle>
    </Router>
  );
}

export default App;
