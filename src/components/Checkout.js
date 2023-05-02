import React from "react";
import NavBar from "./NavBar";
import Paper from "@mui/material/Paper";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { selectedItemsAtom, amountAtom } from "../recoil/Atoms";
import { Container, Divider, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [amount, setAmount] = useRecoilState(amountAtom);
  const selectedItems = useRecoilValue(selectedItemsAtom);
  const setSelectedItems = useSetRecoilState(selectedItemsAtom);

  const navigate = useNavigate();

  const deleteItemHandler = (d) => {
    setAmount(amount - 1);
    setSelectedItems(() => {
      const newVal = selectedItems.filter((item) => item.id !== d.id);
      return newVal;
    });
    // console.log(d);
  };
  let totalPrice = 0;
  selectedItems.forEach((item) => {
    totalPrice += item.price;
  });
  const clickHandler = () => {
    navigate("/form",{ state: { totalPrice } });
  };
  return (
    <>
      <NavBar />
      <Container sx={{ marginTop: 2 }} style={{ minHeight: 40 }}>
        <Typography variant="h3">Checkout</Typography>
        <Divider sx={{ mt: 1 }} />
        {selectedItems.map((d) => (
          <Paper key={d.id} elevation={1}>
            <div className="task-card">
              <div className="task-dueDate">
                <img src={d?.url[0]?.url} height={100} width={100} />
              </div>
              <div className="task-name-description">
                <div className="task-description">
                  <b>{d.name}</b>
                </div>
                <b>Price:</b> {d.price}$
              </div>

              <div className="task-status">
                <Button onClick={() => deleteItemHandler(d)}>Delete</Button>
              </div>
            </div>
            <Divider sx={{ mt: 1 }} />
          </Paper>
        ))}
      </Container>
      <Container>
        <Paper elevation={5}>
          <div className="task-card">
            <div className="task-description">
              <b>Total:</b> {totalPrice}$
            </div>
            <div className="task-name-description"></div>

            <div className="task-status">
              <Button onClick={clickHandler} disabled={totalPrice === 0}>Order</Button>
            </div>
          </div>
        </Paper>
      </Container>
    </>
  );
};

export default Checkout;
