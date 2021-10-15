import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Form, Container } from "react-bootstrap";
import { useHistory } from "react-router";
import { postActions } from "../redux/modules/post";

const ConferenceDetail = (props) => {
  const dispatch = useDispatch();

  // const aaaa = (e) => {
  //   console.log(e.target.value);
  //   setTitle(e.target.value);
  // }

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [confirm, setConfirm] = useState("");
  const [member, setMember] = useState("");
  let dateInfo = React.useRef();
  const post = useSelector((state) => state.post.list);

  function TextInput(e, setState) {
    setState(e.target.value);
  }

  function CreatePost() {
    const content = {
      id: post.length + 1,
      title,
      date: date,
      member: member,
      text: text,
      confirm: confirm,
    };
    console.log(content);
    dispatch(postActions.addPostMiddleware(content));
  }

  return (
    <Container>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          OO일 회의리스트
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
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
              ref={dateInfo}
              onChange={(e) => TextInput(e, setDate)}
            />
            {/* 부트스트랩에서 date 가져와서 형식에 맞게 date: "값맞춰주기" */}
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
            <Form.Label>회의 내용</Form.Label>
            <Form.Control
              as="textarea"
              rows={16}
              onChange={(e) => TextInput(e, setText)}
            />
          </Form.Group>
          <Form.Group style={{ marginBottom: "16px" }}>
            <Form.Label>결정 사항</Form.Label>
            <Form.Control
              type=""
              placeholder="결정된 사항을 입력해주세요"
              onChange={(e) => TextInput(e, setConfirm)}
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
        >
          Save
        </Button>
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
  confirm: "",
};

export default ConferenceDetail;
