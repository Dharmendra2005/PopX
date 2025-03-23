import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

function Home() {
  const navigate = useNavigate();

  return (
    <Container className="text-center mt-5">
      <h2>Welcome to PopX</h2>
      <Button variant="primary" className="w-100 mt-2" onClick={() => navigate("/signup")}>
        Create Account
      </Button>
      <Button variant="secondary" className="w-100 mt-2" onClick={() => navigate("/login")}>
        Already Registered? Login
      </Button>
    </Container>
  );
}

export default Home;
