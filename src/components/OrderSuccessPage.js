import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./OrderSuccessPage.css";

function OrderSuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const totalPrice = location.state?.totalPrice;
  return (
    <div className="order-success-page">
      <img  src="../../logo.jpg"/>
      <h1>Thank you for your order!</h1>
      <p>Your order has been received and is being processed.</p>
      <ul>
        {/* <li>Order Number: {props.orderNumber}</li> */}
        {/* <li>Date and Time: {props.orderDateTime}</li> */}
        <li>Total Amount: {totalPrice}$</li>
      </ul>
      <p>
        You will receive an email confirmation shortly with further details.<br/>
        Thank you for choosing GlamorousCarry!
      </p>
      <button className= "return-home-button" onClick={() => navigate("/",{ state: { refreshPage: true } })}>
        Continue Shopping
      </button>
    </div>
  );
}

export default OrderSuccessPage;
