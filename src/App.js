import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import { CharacterProvider } from "./components/context/CharacterContext";
// import AddCharacter from './components/pages/AddCharacter'
import Characters from "./components/pages/charactersPage/Characters";
import AddCharacter from "./components/pages/charactersPage/AddCharacter";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" />
        <CharacterProvider>
          <Route exact path="/characters" render={(props) => <Characters />} />
          <Route
            exact
            path="/add-new-character"
            render={(props) => <AddCharacter />}
          />
        </CharacterProvider>

        <Route path="/monsters" />
        <Route path="/shop" />
      </div>
    </Router>
  );
}

export default App;
