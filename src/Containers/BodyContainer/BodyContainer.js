import { useEffect } from "react";
import styled from "styled-components";
import { device } from "../../styles/devices";


const Container = styled.div`
  width: 80vw;
  height: auto;
  // height: 61vh;
  // background-color: #b60c2040;
  @media ${device.mobile} {
    width: 100vw;
  }
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
