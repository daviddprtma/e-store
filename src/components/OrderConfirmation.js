import React from "react";
import styled from "styled-components";

function OrderConfirmation() {
  return (
    <div>
      <OrderConfirm>Order Confirmation</OrderConfirm>
      <p>Thanks for pricing an order</p>
    </div>
  );
}

export default OrderConfirmation;

const OrderConfirm = styled.h2`
  grid-column: 1 / span 2;
  padding-bottom: 20px;
`;
