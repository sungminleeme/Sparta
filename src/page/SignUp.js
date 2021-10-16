import React from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { idCheck, pwCheck } from "../shared/regExp";

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

    if (id === "" || pwd === "" || username === "") {
      window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
      return;
    }
    if (!idCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }
    if (pwd !== pwdcheck) {
      window.alert("패스워드와 패스워드 확인이 일치하지 않습니다!");
      return;
    }
    if (!pwCheck(pwd)) {
      window.alert("비밀번호 형식을 확인해주세요!!");
      return;
    }
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
                placeholder="비밀번호를 입력해주세요(문자,숫자,특수문자포함 4~10자)"
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
