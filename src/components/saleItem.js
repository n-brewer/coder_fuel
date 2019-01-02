import React from 'react'

const SaleItem = props => {
  const {name, cost, inStock, imgId} = props.item;
  return (
    <div className={"saleItem"}>
      <ItemImage imgId={imgId}/>
      <div className={"itemInfo"}>
        <div>
          <span>{name}</span>
          {!inStock && <div className={"stock"}>Out of Stock</div>}
        </div>
        <div>
          ${cost.toFixed(2)}
        </div>
        <div>
          <button onClick={() => props.itemClicked(props.item)}
                  disabled={!inStock}>Add To Cart</button>
        </div>
      </div>
    </div>
  )
};

export default SaleItem

const ItemImage = props => {
  return (
    <div className={"imgContainer"}>
      <img alt='' src={`https://picsum.photos/120/?image=${props.imgId}`}/>
    </div>
  )
};