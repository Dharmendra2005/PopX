import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

function Signup({ setUser }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "",
  });

  const isFormValid = Object.values(formData).every((val) => val.trim() !== "");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
    navigate("/account");
  };

  return (
    <Container className="mt-5">
      <h3>Create your PopX account</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control name="fullName" value={formData.fullName} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone number</Form.Label>
          <Form.Control name="phone" value={formData.phone} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" value={formData.email} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" value={formData.password} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Company name</Form.Label>
          <Form.Control name="company" value={formData.company} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Are you an Agency?</Form.Label>
          <Form.Check
            type="radio"
            label="Yes"
            name="isAgency"
            value="Yes"
            checked={formData.isAgency === "Yes"}
            onChange={handleChange}
          />
          <Form.Check
            type="radio"
            label="No"
            name="isAgency"
            value="No"
            checked={formData.isAgency === "No"}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit" variant="primary" className="w-100" disabled={!isFormValid}>
          Create Account
        </Button>
      </Form>
    </Container>
  );
}

export default Signup;
