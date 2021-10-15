import React from "react";

import { Route, Switch } from "react-router-dom";

import AddGroup from "./page/AddGroup";
import ConferenceList from "./page/ConferenceList";
import ConferenceDetail from "./page/ConferenceDetail";
import {ConnectedRouter} from "connected-react-router";
import {history} from "../src/redux/configureStore"

import Main from "./page/Main";
import TestAxios from "./page/TestAxios";

function App() {
  return (
    <div style={{padding: "0px 180px"}} >
        <ConnectedRouter history={history}>
        <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/conferencelist" exact component={ConferenceList} />
        <Route path="/conferencedetail" exact component={ConferenceDetail} />
        <Route path="/addgroup" exact component={AddGroup} />
        <Route path="/testaxios" exact component={TestAxios} />
        </Switch>
        </ConnectedRouter>
    </div>
  );
}
export default App;
