import React from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import { useHistory } from "react-router";

const ConferenceDetail = (show, onHide) => {
  const history = useHistory();
  function SaveB() {
    history.goBack();
  }

  function DetilB() {
    history.push("/");
    console.log("눌리면 좋겠네");
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered="centered"
      style={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
              />
            </Form.Group>
            <Form.Group style={{ marginBottom: "16px" }}>
              <Form.Label>회의 참석자</Form.Label>
              <Form.Control
                type=""
                readOnly
                placeholder="그룹원이 자동으로 들어갈 예정"
              />
            </Form.Group>
            <Form.Group style={{ marginBottom: "16px" }}>
              <Form.Label>회의 내용</Form.Label>
              <Form.Control as="textarea" rows={16} />
            </Form.Group>
            <Form.Group style={{ marginBottom: "16px" }}>
              <Form.Label>결정 사항</Form.Label>
              <Form.Control
                type=""
                placeholder="그룹원이 자동으로 들어갈 예정"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={DetilB}
            block
            variant="info"
            type="button"
            className="my-3"
          >
            Save
          </Button>
          <Button onClick={onHide} onClick={SaveB}>
            Close
          </Button>
        </Modal.Footer>
      </Container>
    </Modal>
  );
};

export default ConferenceDetail;
