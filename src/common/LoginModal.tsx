import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Row, Col, Image } from "react-bootstrap";
import {
  signInWithFacebook,
  signInWithGoogle,
} from "../services/FBAuthService";
import { auth } from "../firebase/firebase";

type PropType = {
  show: boolean;
  setShow: (isVisible: boolean) => void;
};

export default function LoginModal(props: PropType) {
  const { show, setShow } = props;

  const handleClose = () => setShow(false);

  useEffect(() => {
    if (auth.currentUser) setShow(false);
  }, [auth.currentUser]);

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
        <div className="d-flex justify-content-center w-100">
          <Image
            className="auth-providers mx-1"
            src={"/images/ic-facebook.png"}
            onClick={() => signInWithFacebook(handleClose)}
          />
          <Image
            className="auth-providers mx-1"
            src={"/images/ic-google.png"}
            onClick={() => signInWithGoogle(handleClose)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer className="border-0 justify-content-center flex-column">
        <p className="f-cl-grey fs-6 fw-light m-0">Don't have an account?</p>
        <p className="f-cl-orange fs-6 fw-light m-0">Register Now</p>
      </Modal.Footer>
    </Modal>
  );
}
