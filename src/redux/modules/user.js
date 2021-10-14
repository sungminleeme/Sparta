import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
// import { apis } from "../../shared/axios";
import { apis } from "../../shared/axios";

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

const loginDB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    console.log("react");
    apis
      .signin(id, pwd)
      .then((res) => {
        dispatch(logIn(id));
        console.log(res);
        window.alert("환영합니다");
        history.push("/");
      })
      .catch((err) => {
        console.log("loginDB에서 오류발생", err);
        window.alert("로그인에 실패했습니다.");
      });
  };
};

const logOutDB = () => {
	return function (dispatch, getState, { history }) {
		// deleteCookie('token');
		localStorage.removeItem('id');
		dispatch(logOut());
		history.replace('/login');
	};
};

// const loginAction = (user) => {
//   return function (dispatch, getState, { history }) {
//     console.log(history);
//     dispatch(logIn(user));
//     history.push("/");
//   };
// };

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
  logIn,
  logOut,
  getUser,
  registerDB,
  loginDB,
  logOutDB,
};

export { actionCreators };
