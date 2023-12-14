import { useEffect } from "react";
import { Modal, Button, Form, Row, Col, Image } from "react-bootstrap";
import {
  signInWithFacebook,
  signInWithGoogle,
} from "../services/FBAuthService";
import { auth } from "../firebase/firebase";
import { sendSignInLinkToEmail } from "firebase/auth";

type PropType = {
  show: boolean;
  setShow: (isVisible: boolean) => void;
};

export default function LoginModal(props: PropType) {
  const { show, setShow } = props;

  const handleClose = () => setShow(false);

  useEffect(() => {
    if (auth.currentUser) setShow(false); // eslint-disable-next-line
  }, [auth.currentUser]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;

    const actionCodeSettings = {
      url: `${process.env.REACT_APP_HOST}/verify-email`,
      handleCodeInApp: true,
    };
    
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        localStorage.setItem("emailForSignIn", email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <Modal show={show} onHide={handleClose} className="p-4" centered>
      <Modal.Header className="border-0">
        <Modal.Title className="w-100 text-center">
          Login to your account.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Col sm="10">
              <Form.Control name="email" placeholder="Email" />
            </Col>
          </Form.Group>
          <Button className="bg-cl-orange border-0 w-100 fw-bold" type="submit">
            Login
          </Button>
        </Form>
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
    </Modal>
  );
}
