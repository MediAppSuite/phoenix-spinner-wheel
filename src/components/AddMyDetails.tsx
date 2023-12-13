import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

export default function AddMyDetails() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    cityCode: "",
    province: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <Card className="m-4 p-3 text-start" style={{ borderRadius: "20px" }}>
      <Card.Title>
        <h1 className="text-center mb-3">Update Details</h1>
      </Card.Title>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="addressLine1" className="mb-3">
          <Form.Label>Address Line 1</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address line 1"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="addressLine2" className="mb-3">
          <Form.Label>Address Line 2</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address line 2"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleChange}
          />
        </Form.Group>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="cityCode">
              <Form.Label>City Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city code"
                name="cityCode"
                value={formData.cityCode}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="province" className="mb-3">
          <Form.Label>Province</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter province"
            name="province"
            value={formData.province}
            onChange={handleChange}
          />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button className="bg-cl-orange border-0" type="submit">
            Save
          </Button>
        </div>
      </Form>
    </Card>
  );
}
