import React, { useContext } from "react";
import styled from "styled-components";
import { cartContext } from "../contexts/cartContext";
import { Link, useNavigate } from "react-router-dom";

const Basket = () => {
  const navigate = useNavigate();
  const { getItems } = useContext(cartContext);
  const renderCart = () => {
    const cartItems = getItems();

    if (cartItems.length > 0) {
      return cartItems.map((item) => (
        <React.Fragment key={item.id}>
          <div>
            <Link to={`/products/${item.id}`}>{item.title}</Link>
          </div>
          <BasketQty>{item.quantity}</BasketQty>
          <BasketPrice>${item.price}</BasketPrice>
        </React.Fragment>
      ));
    } else {
      return <div>No items in cart</div>;
    }
  };
  return (
    <BasketConatiner>
      <BasketTitle>Shopping Basket</BasketTitle>
      <BasketButton>Checkout</BasketButton>
      <BasketTable>
        <BasketHeader>
          <h4>Items</h4>
          <h4>Quantity</h4>
          <h4>Price</h4>
        </BasketHeader>
        <BasketHeaderLine />

        <BasketHeader>{renderCart()}</BasketHeader>
        <BasketHeaderLine />

        <BasketButton>Clear</BasketButton>
        <BasketTotal>Total: Rp 0</BasketTotal>
      </BasketTable>
    </BasketConatiner>
  );
};

export default Basket;

const BasketConatiner = styled.div`
  display: grid;
  padding: 20px;
  grid-template-rows: 0.25fr 1fr 0.25fr;
  grid-template-columns: 0.1fr 1fr 0.1fr;
`;

const BasketTable = styled.div`
  grid-column: 1 / span 3;
  grid-template-rows: 0.25fr 1fr 0.25fr 1fr;
  column-gap: 20px;
  padding-left: 10px;
`;

const BasketHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.5fr;
`;

const BasketHeaderLine = styled.div`
  margin-bottom: 20px;
  border: 1px solid gray;
`;

const BasketTitle = styled.div`
  grid-column: 1 / span 2;
  padding-bottom: 20px;
`;

const BasketQty = styled.div`
  font-size: 10px;
  font-weight: bold;
  display: grid;
  grid-template-columns: 0.1fr 0.05fr 0.1fr 0.1fr;
`;

const BasketPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const BasketTotal = styled.div`
  justify-self: end;
`;

const BasketButton = styled.div`
  border-radius: 8px;
  height: 40px;
`;
