import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

type PropType = {
  show: boolean;
  setShow: (isVisible: boolean) => void;
};

export default function LoginModal(props: PropType) {
  const { show, setShow } = props;

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} className="p-4" centered>
      <Modal.Header className="border-0">
        <Modal.Title className="w-100 text-center">
          Login to your account.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Col sm="10">
              <Form.Control placeholder="Email" />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Col sm="10">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
        </Form>
        <div className="w-100 d-flex justify-content-between">
          <Form.Check
            type="checkbox"
            id="custom-switch"
            label="Remember me"
            className="f-cl-grey"
          />
          <p className="f-cl-grey">Forgot password?</p>
        </div>
        <Button
          className="bg-cl-orange border-0 w-100 fw-bold"
          onClick={handleClose}
        >
          Login
        </Button>
        <div className="separator my-4">Or Login With</div>
        <div></div>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
