import React from "react";

import { Route, Switch } from "react-router-dom";

import AddGroup from "./page/AddGroup";
import ConferenceList from "./page/ConferenceList";
import ConferenceDetail from "./page/ConferenceDetail";
import {ConnectedRouter} from "connected-react-router";
import {history} from "../src/redux/configureStore"

import Main from "./page/Main";
import Header from "../src/components/Header"

function App(props) {
  return (
    <>
      
        <Header></Header>
        <ConnectedRouter history={history}>
        <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/conferencelist" exact component={ConferenceList} />
        <Route path="/conferencedetail" exact component={ConferenceDetail} />
        <Route path="/addgroup" exact component={AddGroup} />
        </Switch>
        </ConnectedRouter>
      
    </>
  );
}
export default App;
