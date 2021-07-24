import { Button } from "@material-ui/core";
import React from "react";
import { CartItemType } from "../../App";
import CartItem from "../CartItem/CartItem";
import { Wrapper } from "./Cart.Styles";

type CartProps = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<CartProps> = ({
  cartItems,
  addToCart,
  removeFromCart,
}) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  return (
    <Wrapper>
      <h2>Your Shopping Cart List</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h4 style={{ margin: "2rem 0" }}>
        Total: ${calculateTotal(cartItems).toFixed(2)}
      </h4>

      <Button fullWidth color="secondary" variant="outlined">
        CheckOut
      </Button>
    </Wrapper>
  );
};
export default Cart;
