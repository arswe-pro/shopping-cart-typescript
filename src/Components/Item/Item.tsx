import { Button } from "@material-ui/core";
import React from "react";
import { CartItemType } from "../../App";
import { Wrapper } from "./Item.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
    <h3 style={{ margin: "1rem" }}>Price: ${item.price}</h3>
    <Button
      color="secondary"
      variant="contained"
      size="large"
      onClick={() => handleAddToCart(item)}
    >
      Add To Cart
    </Button>
  </Wrapper>
);

export default Item;
