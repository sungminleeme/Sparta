import React from "react";
import { Route, Switch } from "react-router-dom";
import AddGroup from "./page/AddGroup";
import Main from "./page/Main";
import ConferenceList from "./page/ConferenceList";
import ConferenceDetail from "./page/ConferenceDetail";

function App(props) {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/conferencelist" exact component={ConferenceList} />
        <Route path="/conferencedetail" exact component={ConferenceDetail} />
        <Route path="/addgroup" exact component={AddGroup} />
      </Switch>
    </>
  );
}
export default App;
