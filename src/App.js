import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CharacterSheet from "./components/pages/character/characterSheet";
import Shop from "./components/pages/shop/shop";

import Header from "./components/layout/Header";
import { ItemProvider } from "./components/pages/shop/ItemContext";

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
      </div>
    </Router>
  );
}

export default App;
