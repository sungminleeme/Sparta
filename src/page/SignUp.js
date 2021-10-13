import React from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Signup = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [username, setUserName] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwdcheck, setPwdCheck] = React.useState("");

  const changeId = (e) => {
    setId(e.target.value);
  };

  const changePwd = (e) => {
    setPwd(e.target.value);
  };
  const changePwdCheck = (e) => {
    setPwdCheck(e.target.value);
  };

  const changeUserName = (e) => {
    setUserName(e.target.value);
  };

  const signup = () => {
    // console.log(id, username, pwd, pwdcheck);
    dispatch(userActions.registerDB(id, username, pwd, pwdcheck));
  };

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered="centered"
    >
      <Container>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">회원가입</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>아이디</Form.Label>
              <Form.Control
                value={id}
                type="id"
                onChange={changeId}
                placeholder="이메일을 입력해주세요"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>이름</Form.Label>
              <Form.Control
                value={username}
                onChange={changeUserName}
                placeholder="이름을 입력해주세요"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>비밀번호</Form.Label>
              <Form.Control
                value={pwd}
                type="password"
                onChange={changePwd}
                placeholder="비밀번호를 입력해주세요"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>비밀번호 확인</Form.Label>
              <Form.Control
                value={pwdcheck}
                type="password"
                onChange={changePwdCheck}
                placeholder="비밀번호를 다시 입력해주세요"
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
            onClick={() => {
              console.log("회원가입  성공!");
              signup();
            }}
          >
            회원가입
          </Button>
          {/* 회원가입 버튼옆에 닫기버튼,필요없을꺼 같아서 일단 주석처리 */}
          <Button onClick={props.onHide}>취소</Button>
        </Modal.Footer>
      </Container>
    </Modal>
  );
};

export default Signup;
