import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Form, Container } from "react-bootstrap";
import { useHistory } from "react-router";
import { postActions } from "../redux/modules/post";
import "moment";
import moment from "moment";

const ConferenceDetail = (props) => {
  const dispatch = useDispatch();

  // const aaaa = (e) => {
  //   console.log(e.target.value);
  //   setTitle(e.target.value);
  // }

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [contents, setContents] = useState("");
  const [purpose, setPurpose] = useState("");
  const [member, setMember] = useState("");

  let dateTime = React.useRef();

  function TextInputDate(e) {
    const originDate = e.target.value;
    const formatDate = moment(originDate).format('YYYY-MM-DD hh:mm');
    setDate(formatDate);
  }

  function TextInput(e, setState){
    setState(e.target.value);
  }

  // let changDate = { date };
  // moment(changDate.date).format("YYYY-MM-DD hh-mm");
  // console.log(changDate);

  function CreatePost() {
    const content = {
      title,
      date: date,
      member: member,
      contents: contents,
      purpose: purpose,
    };
    console.log(content);
    dispatch(postActions.addPostMiddleware(content));
  }

  // const history = useHistory();
  // function SaveB() {
  //   history.goBack();
  // }

  // function DetilB() {
  //   history.push("/");
  //   console.log("눌리면 좋겠네");
  // }
  
  // const [userList, setUserList] = useState([]);
  // const [name, setName] = useState("test");
  
  // const handleOnClick = () => {
  //   setUserList([...userList, { member: name}]);
  // };

  return (
    <Container>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {date} 회의리스트
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div>
            <p>
              {title} {contents} {date} {member} {purpose}
            </p>

          </div>

          {/* <div>
            <h1>여기에 테스트</h1>
            <ul>
              {userList && userList.map((ele, idx) => <li key={idx}>{ele.member}</li>)}
            </ul>
            <button onClick={handleOnClick}>클릭</button>
          </div> */}
          <Form.Group style={{ marginBottom: "16px" }}>
            <Form.Label>회의 제목</Form.Label>
            <Form.Control
              type="text"
              placeholder="회의 제목을 입력해주세요"
              onChange={(e) => TextInput(e, setTitle)}
            />
          </Form.Group>
          <Form.Group style={{ marginBottom: "16px" }}>
            <Form.Label>작성날짜 </Form.Label>
            <input
              style={{ marginLeft: "7px", border: "1px solid grey" }}
              type="datetime-local"
              ref={dateTime}
              onChange={(e) => TextInputDate(e, setDate)}
            />
          </Form.Group>
          <Form.Group style={{ marginBottom: "16px" }}>
            <Form.Label>회의 참석자</Form.Label>
            <Form.Control
              type=""
              placeholder="참석자를 입력해주세요."
              onChange={(e) => TextInput(e, setMember)}
            />
          </Form.Group>
          <Form.Group style={{ marginBottom: "16px" }}>
            <Form.Label>회의 목적</Form.Label>
            <Form.Control
              type=""
              placeholder="회의주제를 적어주세요"
              onChange={(e) => TextInput(e, setPurpose)}
            />
          </Form.Group>
          <Form.Group style={{ marginBottom: "16px" }}>
            <Form.Label>회의 내용</Form.Label>
            <Form.Control
              as="textarea"
              rows={16}
              onChange={(e) => TextInput(e, setContents)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          block
          variant="info"
          type="button"
          className="my-3"
          onClick={CreatePost}
        >Save</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Container>
    // </Modal>
  );
};

ConferenceDetail.defaultProps = {
  title: "제목",
  date: "2021-10-15",
  member: "",
  content: "",
  purpose: "",
};

export default ConferenceDetail;