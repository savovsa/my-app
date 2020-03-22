import React from "react";

import "./App.css";
import Home from "./screens/Home";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
