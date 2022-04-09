import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80vw;
  height: auto;
  background-color:red;
`;

const BodyContainer = ({children}) => {
    useEffect(() => {
        window.scrollTo(0,0)
    })
  return (
    <>
      <Container className="container-fluid">
        <div className="justify-content-center">{children}</div>
      </Container>
    </>
  );
};

export default BodyContainer;
