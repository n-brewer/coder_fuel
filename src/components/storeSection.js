import React from 'react'
import SaleItem from "./saleItem";

const StoreSection = props => {
  return (
    <div className={"storeSection"}>
      <h3>{props.section.category} ({props.section.items.length})</h3>
      <div className={'sectionContainer'}>
        {props.section.items.map((item, i) => {
          return (
            <SaleItem key={item.name}
                      item={item}
                      itemClicked={(item) => props.itemClicked(item)}
            />
          )
        })}
      </div>
    </div>
  )
};

export default StoreSection