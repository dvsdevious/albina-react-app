import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Sidebar";

export default function UserSettings() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const StyledCard = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
    margin-left: 30%;
  `;

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.pushState("/");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <>
      <div className="userSettings">
        <Sidebar />
        <StyledCard>
          <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong>
            {currentUser.email}
            <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
              Update Profile
            </Link>
          </Card.Body>
        </StyledCard>
        <div className="w-100 text-center mt-2">
          <Button variant="link" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      </div>
    </>
  );
}
