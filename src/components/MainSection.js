import React from "react";
import "./App.css";
import "./MainSection.css";
import styled from "styled-components";

const Main = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;
const MainImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

function MainSection() {
  return (
    <>
      <Main>
        <MainImage src="/img/mainphoto.jpg" alt="" />
      </Main>
    </>
  );
}

export default MainSection;
