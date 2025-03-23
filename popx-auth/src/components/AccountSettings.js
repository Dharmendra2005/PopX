import React from "react";
import { Container, Card } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa"; // Importing a user icon

function AccountSettings({ user }) {
  if (!user)
    return (
      <Container className="mt-5">
        <h3>No account found</h3>
      </Container>
    );

  return (
    <Container className="mt-5">
      <Card className="p-3">
        <Card.Body className="text-center">
          <FaUserCircle size={80} className="text-secondary mb-2" /> {/* User icon */}
          <h4 className="mb-1">{user.fullName}</h4>
          <p className="text-muted">{user.email}</p>
          <p className="text-secondary">{user.company}</p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AccountSettings;
