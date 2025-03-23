import React from "react";
import { Container, Card } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa"; // Using an icon instead of an image

function AccountSettings({ user }) {
  if (!user) {
    return (
      <Container className="mt-5">
        <h3>No account found</h3>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Card className="p-3">
        <Card.Body>
          <div className="text-center">
            <FaUserCircle size={80} className="mb-2" /> {/* Profile icon */}
            <h4>{user.fullName}</h4>
            <p>{user.email}</p>
            <p className="text-muted">
              Welcome, {user.fullName}! Here you can update your profile, change settings, and make your experience even better.
            </p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AccountSettings;
