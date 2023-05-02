//from youtube
import { useState, useEffect } from "react";
//import styled from "@emotion/styled";
import styled from "@emotion/styled/macro";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import useAddToCartHandler from "./AddToCartHandler";
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
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
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
function Products({ item }) {
  const addToCart = useAddToCartHandler();
  const [fieldOpen, setFieldOpen] = useState(false);
  const [fav, setFav] = useState(false);
  const navigate = useNavigate();

  const clickHandler = () => {
    setFieldOpen(true);
    navigate("/ProductInfo", { state: { item } }); //{ state: { item } });
    // localStorage.setItem("clickedItem", item.id);
  };
  const favHandler = () => {
    setFav(!fav);
  };
  // useEffect(() => {
  //   console.log(myAtomValue);
  // }, [myAtomValue]);

  return (
    <>
      <Container>
        <Image src={item?.url[0]?.url} />
        <Info>
          <Icon onClick={() => addToCart(item)}>
            <ShoppingCartOutlinedIcon />
          </Icon>
          <Icon>
            <SearchOutlinedIcon onClick={clickHandler} />
            {/*onClick={()=>{setFieldOpen(true)}}*/}
          </Icon>
          <Icon onClick={favHandler}>
            {fav ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
          </Icon>
        </Info>
      </Container>
    </>
  );
}
// export {addToCartHandler};
export default Products; //default
