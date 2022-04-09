import styled from "styled-components";

const Container = styled.div`
  width: 80vw;
  height: 200vh;
  border: 3px solid black;
`;

const BodyContainer = ({children}) => {
  return (
    <>
      <Container className="container-fluid">
        <div className="justify-content-center">{children}</div>
      </Container>
    </>
  );
};

export default BodyContainer;
