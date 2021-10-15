import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

// action 생성
const LOAD_POST = "LOAD_POST";
const ADD_POST = "ADD_POST";
// const EDIT_POST = 'EDIT_POST';
// const DEL_POST = 'DEL_POST';

// action creators
const loadPost = createAction(LOAD_POST, (list) => ({ list }));
const AddPost = createAction(ADD_POST, (post) => ({ post }));
// const editPost = createAction(EDIT_POST, (post) => ({ post }));
// const deletePost = createAction(DEL_POST, (post) => ({ post }));

// initialState
const initialState = {
  list: [],
};

// middleware
const getPostMiddleware = () => {
  return (dispatch) => {
    apis
      .getPost()
      .then((res) => {
        const post_list = res.data;
        dispatch(loadPost(post_list));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

const addPostMiddleware = (post) => {
  return (dispatch) => {
    console.log("addPost 미들웨어도착");
    // 인자로 받은 post값이 명세서와 같아야한다. 매우중요!!
    console.log(post);
    apis
      .createPost(post)
      .then((res) => {
        console.log(res);
        window.alert("addPost 통신");
        dispatch(AddPost(post));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

// const editPostMiddleware = (post) => {
//   return (dispatch) => {
//     console.log('editPost미들웨어도착');
//     console.log(apis);
//     apis
//       .createPost(post)
//       .then((res) => {
//         console.log(res);
//         window.alert('editPost통신되었습니다.')
//         dispatch(EditPost(post));
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };
// };

const deletePostMiddleware = (post) => {
  return (dispatch) => {
    console.log("addPost 미들웨어도착");
    console.log(apis);
    apis
      .createPost(post)
      .then((res) => {
        console.log(res);
        window.alert("addPost 통신");
        dispatch(AddPost(post));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

// reducer
export default handleActions(
  {
    [LOAD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.post);
      }),
  },
  initialState
);

const postCreators = {
  getPostMiddleware,
  addPostMiddleware,
  // editPostMiddleware
};

export { postCreators };
