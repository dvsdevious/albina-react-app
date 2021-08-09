import React from "react";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const TrainingContainer = styled.div`
  margin-left: 250px;
  width: 1030px;
  position: relative;
`;
const TrainingImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;
const TrainingContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: calc(100%-100px);
  margin: auto;

  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    padding-top: 50vh;
  }
`;

function Training() {
  return (
    <>
      <TrainingImg src="/img/training.jpg" alt="" />
      <Sidebar />
      <TrainingContainer>
        <TrainingContent>
          <h1>Hello</h1>
        </TrainingContent>
      </TrainingContainer>
    </>
  );
}

export default Training;
