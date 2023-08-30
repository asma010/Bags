import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { amountAtom } from "../recoil/Atoms";
import Badge from "@mui/material/Badge";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const Container = styled.div`
  height: 60px;
  background-color: white;
  margin-bottom: 10px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-item: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  font-size: 6mm;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;
export default function NavBar() {
  const [amount, setAmount] = useRecoilState(amountAtom);
  // console.log(collectionRef);
  return (
    <Container width={window.innerWidth}>
      <Wrapper>
        <Left>
          <img alt="img1" src="../../logo.jpg" width={60} height={60} />
          {/* <SearchContainer>
            <Input />
            <Search style={{ color: "#bed8ad", fontSize: 16 }} />
          </SearchContainer> */}
        </Left>
        <Center>
          <Logo>GlamorousCarry</Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link to="/" className="NavLink">
              <b>Home</b>
            </Link>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={amount} color="secondary">
              <Link to="/checkout">
                <ShoppingCartOutlinedIcon />
              </Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
