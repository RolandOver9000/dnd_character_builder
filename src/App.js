import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Axios from "axios";

import Header from "./components/layout/Header";
import { CharacterProvider } from "./components/context/CharacterContext";
// import AddCharacter from './components/pages/AddCharacter'
// import Characters from './components/pages/character'
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
        <Route path="/monsters" />
        <Route path="/shop" />
      </div>
    </Router>
  );
}

export default App;
