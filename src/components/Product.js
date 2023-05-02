import { useState, useEffect } from "react";
import { Button, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import * as React from "react";
import NavBar from "./NavBar";
import Slider from "./Slider";
import useAddToCartHandler from "./AddToCartHandler";
import "./Product.css";

function Product() {
  const addToCart = useAddToCartHandler();
  const [images, setImg] = useState([]);

  const location = useLocation();
  const data = location.state?.item;

  // console.log('state:', location.state);
  // console.log(location);
  useEffect(() => {
    setImg(data.url);
  }, [data]);

  return (
    <>
      <NavBar />
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <Slider images={images} />
        </Grid>
        <Grid item xs={12} md={6} className="product-details" >
          <h1 className="product-title">{data.name}</h1>
          <h3 className="product-description">{data.description}</h3>
          <div className="product-price">
            <b>price:</b>
            {data.price}$
          </div>
          <Button
            variant="outlined"
            sx={{ color: "black" }}
            onClick={() => addToCart(data)}
            className="add-to-cart-button"
          >
            Add to bag
          </Button>
        </Grid>
      </Grid>
    </>
    // <>
    // {data.description}</>
  );
}

export default Product;
//rcfe
