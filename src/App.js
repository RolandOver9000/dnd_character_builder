import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CharacterSheet from "./components/pages/character/characterSheet";
import Shop from "./components/pages/shop/shop";
import Header from "./components/layout/Header";

import { ItemProvider } from "./components/pages/shop/ItemContext";
import { CategoryProvider } from "./components/pages/shop/CategoryContext";
import { CharacterProvider } from "./components/context/CharacterContext";
import { MonsterProvider } from "./components/pages/Monster/MonsterContext";

import Monsters from "./components/pages/Monster/Monsters";
import Characters from "./components/pages/charactersPage/Characters";
import AddCharacter from "./components/pages/charactersPage/AddCharacter";
import Monster from "./components/pages/Monster/Monster";
import MonsterDetail from "./components/pages/Monster/MonsterDetail";
import MonsterDetailProvider from "./components/pages/Monster/MonsterDetailContext";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" />
        <Route path="/new-character" component={CharacterSheet} />

        <ItemProvider>
          <CategoryProvider>
            <Route path="/shop" component={Shop} />
          </CategoryProvider>
        </ItemProvider>

        <CharacterProvider>
          <Route exact path="/characters" render={(props) => <Characters />} />
          <Route
            exact
            path="/add-new-character"
            render={(props) => <AddCharacter />}
          />
        </CharacterProvider>

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
