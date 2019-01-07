import React from "react";
import { URL } from "../utils/constants";

const Cart = props => {
  let cost = 0;
  const itemCount =
    props.cart.length === 1 ? "1 item" : `${props.cart.length} items`;
  props.cart.map(item => (cost += item.cost));
  const orderedCart = props.cart.sort((a, b) => {
    return a.name === b.name ? 0 : a.name > b.name || -1;
  });
  return (
    <div className={"shoppingCart"}>
      <div className={"cartItems"}>
        {orderedCart.map((item, i) => {
          return (
            <div key={item.name + i} className={"cartItem"}>
              <img alt="" src={URL.IMAGE_CART + item.imgId} />
              <div className={"cartItemDetails"}>
                <div>
                  <span>{item.name}</span>
                </div>
                <div>
                  <div>${item.cost.toFixed(2)}</div>
                </div>
                <div onClick={() => props.removeItem(item)}>
                  <p>delete</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={"cartTotal"}>
        Total: ({itemCount}) <span>${cost.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Cart;
