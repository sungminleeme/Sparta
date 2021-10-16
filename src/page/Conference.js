import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Form, Container } from "react-bootstrap";
import { useHistory } from "react-router";
import { postActions } from "../redux/modules/post";

const Conference = ({ history, match }) => {
  const dispatch = useDispatch();

  const title = useSelector((store) => store.title);
  const date = useSelector((store) => store.date);
  const username = useSelector((store) => store.username);
  const member = useSelector((store) => store.member);
  const content = useSelector((store) => store.content);
  const confirm = useSelector((store) => store.confirm);

  const {
		params: { id },
	} = match;

  useEffect(() => {
    dispatch(postActions.getPostMiddleware());
  }, []);


  return (
    <div key={id}>
      <Container>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {date} 회의리스트
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group style={{ marginBottom: "16px" }}>
              <Form.Label>회의 제목</Form.Label>
              <Form.Control
                type="text"
                readOnly
              />
              {title}
            </Form.Group>
            <Form.Group style={{ marginBottom: "16px" }}>
              <Form.Label>작성자 아이디 </Form.Label>
              {username}
            </Form.Group>
            <Form.Group style={{ marginBottom: "16px" }}>
              <Form.Label>작성날짜 </Form.Label>
              {date}
            </Form.Group>
            <Form.Group style={{ marginBottom: "16px" }}>
              <Form.Label>회의 참석자</Form.Label>
              <Form.Control
                type=""
                readOnly
              />
              {member}
            </Form.Group>
            <Form.Group style={{ marginBottom: "16px" }}>
              <Form.Label>회의 내용</Form.Label>
              <Form.Control
                as="textarea"
                rows={16}
                readOnly
              />
              {content}
            </Form.Group>
            <Form.Group style={{ marginBottom: "16px" }}>
              <Form.Label>결정 사항</Form.Label>
              <Form.Control
                type=""
                readOnly
              />{confirm}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button block variant="info" type="button" className="my-3">
            Edit
          </Button>
          <Button block variant="info" type="button" className="my-3">
            Delete
          </Button>
          <Button onClick={()=>{
            history.replace('/');
          }}>Close</Button>
        </Modal.Footer>
      </Container>
    </div>
    
  );
};

Conference.defaultProps = {
  id: "",
  username: "song@gmail.com",
  title: "제목",
  date: "2021-10-15",
  member: "",
  content: "",
  confirm: "",
};

export default Conference;
