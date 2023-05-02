import react from "react";
import styled from "@emotion/styled/macro";
const Info = styled.div`

font-weight: bold;
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
////////////

function OutOfStock({ item }) {
  return (
    <>
      <Container>
        <Image src={item?.url[0]?.url} />
        <Info>Out Of Stock</Info>
      </Container>
    </>
  );
}

export default OutOfStock;
