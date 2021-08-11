import React from "react";
import styled from "styled-components";

const MainImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

function Workouts() {
  return (
    <>
      <MainImage src="/img/workoutsmain.jpg" alt="" />
    </>
  );
}

export default Workouts;
