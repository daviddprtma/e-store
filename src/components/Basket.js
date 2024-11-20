import React, { useContext } from "react";
import styled from "styled-components";
import { cartContext } from "../contexts/cartContext";
import { Link, useNavigate } from "react-router-dom";
import { UpIcon, DownIcon, TrashIcon } from "./Icons";

const Basket = () => {
  const navigate = useNavigate();
  const {
    getItems,
    clearBasket,
    increaseQuantity,
    decreaseQuantity,
    removeProduct,
  } = useContext(cartContext);
  const renderCart = () => {
    const cartItems = getItems();

    if (cartItems.length > 0) {
      return cartItems.map((item) => (
        <React.Fragment key={item.id}>
          <div>
            <Link to={`/products/${item.id}`}>{item.title}</Link>
          </div>
          <BasketQty>
            {item.quantity}
            <UpIcon
              width={20}
              onClick={() => increaseQuantity({ id: item.id })}
            />
            <DownIcon
              width={20}
              onClick={() => decreaseQuantity({ id: item.id })}
            />
            <TrashIcon
              width={20}
              onClick={() => removeProduct({ id: item.id })}
            />
          </BasketQty>

          <BasketPrice>£{item.price}</BasketPrice>
        </React.Fragment>
      ));
    } else {
      return <div>No items in cart</div>;
    }
  };
  const renderTotal = () => {
    const cartItems = getItems();
    const total = cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }
    , 0);
    return total;
  };
  return (
    <BasketContainer>
      <BasketTitle>Shopping Basket</BasketTitle>
      <BasketButton onClick={() => navigate("/checkout")}>
        Checkout
      </BasketButton>
      <BasketTable>
        <BasketHeader>
          <h4>Items</h4>
          <h4>Quantity</h4>
          <h4>Price</h4>
        </BasketHeader>
        <BasketHeaderLine />

        <BasketHeader>{renderCart()}</BasketHeader>
        <BasketHeaderLine />
      </BasketTable>

      <BasketButton onClick={() => clearBasket()}>Clear</BasketButton>
      <BasketTotal>Total: £{renderTotal()}</BasketTotal>
    </BasketContainer>
  );
};

export default Basket;

const BasketContainer = styled.div`
  display: grid;
  padding: 20px;
  grid-template-rows: 0.25fr 1fr 0.25fr;
  grid-template-columns: 0.1fr 1fr 0.1fr;
`;

const BasketTable = styled.div`
  grid-column: 1 / span 3;

  grid-template-rows: 0.25fr 1fr 0.25fr 0.25fr;
  column-gap: 20px;
  padding-left: 10px;
`;

const BasketHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.5fr;
`;

const BasketHeaderLine = styled.hr`
  margin-bottom: 20px;
  border: 1px solid gray;
`;

const BasketTitle = styled.h2`
  grid-column: 1 / span 2;

  padding-bottom: 20px;
`;

const BasketQty = styled.h3`
  font-size: 18px;
  font-weight: bold;
  display: grid;
  grid-template-columns: 0.1fr 0.05fr 0.1fr 0.1fr;
`;

const BasketPrice = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

const BasketTotal = styled.h2`
  justify-self: end;
`;

const BasketButton = styled.button`
  border-radius: 8px;
  height: 40px;
`;
