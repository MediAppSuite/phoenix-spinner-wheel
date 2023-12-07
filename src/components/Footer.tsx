import React from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="pt-2 pb-1 sticky">
      <h1>Follow Us On</h1>
      <i className="bi bi-facebook mx-2" />
      <i className="bi bi-youtube mx-2" />
      <i className="bi bi-instagram mx-2" />
      <i className="bi bi-tiktok mx-2" />

      <br />
      <i className="bi bi-x-diamond-fill mx-2"></i>
      <i className="bi bi-x-diamond-fill mx-2"></i>
      <i className="bi bi-x-diamond-fill mx-2"></i>
      <i className="bi bi-x-diamond-fill mx-2"></i>
      <i className="bi bi-x-diamond-fill mx-2"></i>
      <i className="bi bi-x-diamond-fill mx-2"></i>
      <i className="bi bi-x-diamond-fill mx-2"></i>

      <div className="container mt-4 mb-3">
        <Row>
          <Col>
            <p>Contact Us</p>
          </Col>
          <Col>
            <p>Downloads</p>
          </Col>
          <Col>
            <p>Privacy Policy</p>
          </Col>
        </Row>
      </div>
      <h1>Contact For Queries.</h1>
      <p>Have Questions? Get in touch.</p>
      <InputGroup className="mb-3 px-2">
        <Form.Control className="text-center get-in-touch" placeholder="Click To Get Connected" />
        <Button>
          <i className="bi bi-arrow-right"></i>
        </Button>
      </InputGroup>
      <p>Copyright © 2023 Phoenix Industries Limited.</p>
    </footer>
  );
}
