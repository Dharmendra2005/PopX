import React from "react";
import { Container, Form, Button } from "react-bootstrap";

function Login() {
  return (
    <Container className="mt-5">
      <h3>Sign in to your PopX account</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email address" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>

        <Button variant="dark" className="w-100" abled>
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
