import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./page/Main";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
    </>
  );
}
export default App;
