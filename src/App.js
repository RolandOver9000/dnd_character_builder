import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CharacterSheet from "./components/pages/character/characterSheet";
import Shop from "./components/pages/shop/shop";
import Header from "./components/layout/Header";
import { ItemProvider } from "./components/pages/shop/ItemContext";
import { CharacterProvider } from "./components/context/CharacterContext";
import Monsters from "./components/pages/Monster/Monsters";
import MonsterProvider from "./components/pages/Monster/MonsterContext";
import Characters from "./components/pages/charactersPage/Characters";
import AddCharacter from "./components/pages/charactersPage/AddCharacter";

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
          <Route exact path="/characters" render={(props) => <Characters />} />
          <Route
            exact
            path="/add-new-character"
            render={(props) => <AddCharacter />}
          />
        </CharacterProvider>

        <Route path="/monsters" />
        {(props) => (
          <React.Fragment>
            {/* <AddCharacter /> */}
            {/* <Characters/> */}
          </React.Fragment>
        )}
        <Route path="/shop" />

        <MonsterProvider>
          <Route path="/monsters" component={Monsters} />
        </MonsterProvider>
      </div>
    </Router>
  );
}

export default App;
