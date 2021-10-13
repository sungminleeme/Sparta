import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import { postCreators } from '../redux/modules/post';

function TestAxios() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.list);

  const [title, setTitle] = useState('');
  const [subTitle, setSubTtitle] = useState('');
  const [url, setUrl] = useState('');

  function TextInput(e, setState) {
    setState(e.target.value);
  }

  // axios data create 입니다 테스트 실행을 위해선 ' npx json-server ./data.json --port 4000 ' 실행 후  ' npm start ' 실행
  function CreatePost() {
    const content = {
      id: post.length + 1,
      title,
      body: subTitle,
      url: url,
    };

    dispatch(postCreators.addPostMiddleware(content));
  }

  useEffect(() => {
    dispatch(postCreators.getPostMiddleware());
  }, []);

  return (
    <div className='App'>
      {post &&
        post.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <p>{item.url}</p>
            </div>
          );
        })}
      <div>
        <input type='text' onChange={(e) => TextInput(e, setTitle)} />
        <br />
        <input type='text' onChange={(e) => TextInput(e, setSubTtitle)} />
        <br />
        <input type='text' onChange={(e) => TextInput(e, setUrl)} />
        <br />
        <button onClick={CreatePost}>작성하기</button>
      </div>
    </div>
  );
}

export default TestAxios;
