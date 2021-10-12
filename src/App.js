import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddGroup from "./page/AddGroup";
import Main from "./page/Main";

function App(props) {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/addgroup" exact component={AddGroup} />
      </Switch>
    </>
  );
}
export default App;
