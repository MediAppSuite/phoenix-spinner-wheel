import React, { useState, useEffect } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import * as firebase from "firebase/app";
import "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {firestoreApp} from "../firebase/firebase";
import { doc, getDoc,updateDoc,setDoc } from "firebase/firestore";
import { error } from "console";
import { NOTFOUND } from "dns";




export default function AddMyDetails() {

  const auth = getAuth();
  const [userEmail, setUserEmail] = useState<string>("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If the user is signed in, update the userEmail state
        setUserEmail(user.email || "");
      } else {
        // If the user is not signed in, handle it accordingly
        // For example, redirect to the login page or show a login form
      }
    });

    return () => {
      // Unsubscribe from the auth state observer when the component unmounts
      unsubscribe();
    };
  }, [auth]);

  console.log(userEmail);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: userEmail,
    addressLine1: "",
    addressLine2: "",
    city: "",
    cityCode: "",
    province: "",
  });

  useEffect(() => {
    // Fetch user data from Firestore when the component mounts
    const fetchUserData = async () => {
      try {
        
        if (userEmail) {
          // Use the user's email as the unique identifier
          const userDoc = await getDoc(doc(firestoreApp, "users", userEmail));

  
          if (userDoc.exists()) {
            // If user data exists, set it in the form state
            setFormData(userDoc.data() as any);
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    fetchUserData();
  }, [userEmail]); // Run this effect only once when the component mounts

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
     if (userEmail)
     {
      const userDoc = await getDoc(doc(firestoreApp, "users", userEmail));

      if (userDoc.exists()) {
        // If user data exists, update it
        await updateDoc(doc(firestoreApp, "users", userEmail), formData);
        console.log("Data updated successfully!");
      } else {
        // If user data doesn't exist, create a new document
        await setDoc(doc(firestoreApp, "users", userEmail), formData);
        console.log("Data saved successfully!");
      }
    }else
    {
      throw new Error('Invalid value');
    }
    } catch (error) {
      console.error("Error saving/updating data:", error);
    }
  
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
            Save/Update
          </Button>
        </div>
      </Form>
    </Card>
  );
}
