import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
// import { apis } from "../../shared/axios";
import { apis } from "../../shared/axios";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

//actions (액션타입)
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

// action creators
const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
};

// middleware actions
const registerDB = (id, username, pwd, pwdcheck) => {
  return function (dispatch, getState, { history }) {
    console.log("react");
    console.log(apis);
    apis

      .signup(id, username, pwd, pwdcheck)
      .then((res) => {
        console.log(res); // signup 정보 확인
        window.alert("축하합니다");
        history.push("/");
      })
      .catch((err) => {
        console.log("signupDB에서 오류발생", err);
        window.alert("회원가입에 실패했습니다.");
      });
  };
};
const loginAction = (user) => {
  return function (dispatch, getState, { history }) {
    console.log(history);
    dispatch(logIn(user));
    history.push("/");
  };
};

// reducer
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// action creator export
const actionCreators = {
  registerDB,
  logIn,
  logOut,
  getUser,
  loginAction,
};

export { actionCreators };
