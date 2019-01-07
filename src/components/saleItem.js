import React from "react";
import { URL } from "../utils/constants";

const SaleItem = props => {
  const { name, cost, inStock, imgId } = props.item;
  return (
    <div className={"saleItem"}>
      <div className={"imgContainer"}>
        <img alt="" src={URL.IMAGE_SALE_ITEM + imgId} />
      </div>
      <div className={"itemInfo"}>
        <>
          <span>{name}</span>
          {!inStock && <div className={"stock"}>Out of Stock</div>}
        </>
        <div>${cost.toFixed(2)}</div>
        <>
          <button
            onClick={() => props.itemClicked(props.item)}
            disabled={!inStock}
          >
            Add To Cart
          </button>
        </>
      </div>
    </div>
  );
};

export default SaleItem;
