import React from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";

const ConferenceList = (props)=> {
    return (
        <Modal
          show={props.show}
          onHide={props.onHide}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered="centered"
          style={{ width: "100vw", display: "flex",
          alignItems: "center", justifyContent: "center",
          textAlign: "center"  
        }}
        >
          <Container >
            <Modal.Header>
              <Modal.Title id="contained-modal-title-vcenter">OO일 회의리스트</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Label>9시 회의 - 프로젝트회의</Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>10시 회의 - 프로젝트회의</Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>12시 회의 - 프로젝트회의</Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>14시 회의 - 프로젝트회의</Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>15시 회의 - 프로젝트회의</Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>16시 회의 - 프로젝트회의</Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>18시 회의 - 프로젝트회의</Form.Label>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Container>
        </Modal>
      );
    };

export default ConferenceList