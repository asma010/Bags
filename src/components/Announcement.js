import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14;
  font-weight: 500;
`; //#bed8ad

const Announcement = () => {
  return <Container width={window.innerWidth}>Flash sale up to 25%</Container>;
};

export default Announcement;
