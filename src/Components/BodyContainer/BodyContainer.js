import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80vw;
  // height: auto;
  height: 61vh;
  background-color: #b60c2040;
`;

const BodyContainer = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Container className="container-fluid">
        <div className="justify-content-center">{children}</div>
      </Container>
    </>
  );
};

export default BodyContainer;
