import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./page/Main";
import Test from "./Test";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/test" exact component={Test} />
      </Switch>
    </>
  );
}

export default App;
