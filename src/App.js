import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./page/Main";
import ConferenceList from "./page/ConferenceList";
import ConferenceDetail from "./page/ConferenceDetail";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/conferencelist" exact component={ConferenceList} />
        <Route path="/conferencedetail" exact component={ConferenceDetail} />
      </Switch>
    </>
  );
}
export default App;
