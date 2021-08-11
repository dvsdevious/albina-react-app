import React from "react";
import "./css/nutrition.css";
import styled from "styled-components";

const MainImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

function Nutrition() {
  return (
    <>
      <MainImage src="/img/nutrition.jpg" alt="" />
    </>
  );
}

export default Nutrition;
