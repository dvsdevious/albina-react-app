import React from "react";
import "./AboutMe.css";
import styled from "styled-components";

const AboutMeContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem 0 rem;
`;
const AboutMeContent = styled.div`
  padding: 3rem calc((100vw-1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media sreen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5 rem, 6vw, 2 rem);
  }
  p {
    margin-bottom: 2rem;
  }
`;
const ColumnLeft = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  }
  
  img {
    width:80%;
    height:80%;
    object-fit:cover;
  }
  @media sreen and (max-width: 768px) {
    width:70%;
    height:70%;
`;

function aboutmeSection() {
  return (
    <>
      <AboutMeContainer>
        <AboutMeContent>
          <ColumnLeft>
            <img src="/img/about.jpg" alt="" />
          </ColumnLeft>
          <ColumnRight>
            <h2>About Me</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              dignissimos debitis eum, doloribus, qui iusto quia, porro eius
              animi fugit mollitia nobis assumenda obcaecati expedita fuga quae
              error. Quibusdam, expedita. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Delectus dignissimos debitis eum, doloribus, qui
              iusto quia, porro eius animi fugit mollitia nobis assumenda
              obcaecati expedita fuga quae error. Quibusdam, expedita.
            </p>
          </ColumnRight>
        </AboutMeContent>
      </AboutMeContainer>
    </>
  );
}

export default aboutmeSection;
