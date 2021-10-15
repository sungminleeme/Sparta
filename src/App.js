import React from "react";

import { Route, Switch } from "react-router-dom";

import AddGroup from "./page/AddGroup";
import Conference from "./page/Conference";
import ConferenceDetail from "./page/ConferenceDetail";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../src/redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "./redux/modules/user";

import Main from "./page/Main";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(userActions.loginCheckDB());
  }, []);

  return (
    <div style={{ padding: "0px 180px" }}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/conference" exact component={Conference} />
          <Route path="/conferencedetail" exact component={ConferenceDetail} />
          <Route path="/addgroup" exact component={AddGroup} />
        </Switch>
      </ConnectedRouter>
    </div>
  );
}
export default App;
