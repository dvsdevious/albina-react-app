import React from "react";
import Sidebar from "../pages/profile/Sidebar";
import styled from "styled-components";

const DashContainer = styled.div`
  margin-left: 250px;
  width: 1030px;
`;

function Dashboard() {
  return (
    <>
      <Sidebar />
      <DashContainer>
        <h1>Hello New User</h1>
      </DashContainer>
    </>
  );
}

export default Dashboard;
