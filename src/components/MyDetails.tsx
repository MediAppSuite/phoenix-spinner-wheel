import React, { useState } from "react";
import { Form, Row, Col, Button, Card, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MyDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="m-4">
      <Card
        style={{ borderRadius: "20px", cursor: "pointer" }}
        onClick={() => navigate("/add-details")}
      >
        <Card.Body>
          <Card.Title>
            <h1>My Details</h1>
          </Card.Title>
          <Card.Text className="mt-5"><h3>Saman Kumara</h3></Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>221B, Bakers St.</ListGroup.Item>
          <ListGroup.Item>London</ListGroup.Item>
          <ListGroup.Item>Vestibulum at</ListGroup.Item>
        </ListGroup>
        <Card.Body></Card.Body>
      </Card>
    </div>
  );
};

export default MyDetails;
