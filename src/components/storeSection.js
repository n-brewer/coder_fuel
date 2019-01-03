import React from 'react'
import SaleItem from "./saleItem";
import ErrorBoundary from './errorBoundary'

const StoreSection = props => {
  return (
    <div className={"storeSection"}>
      <h3>{props.section.category} ({props.section.items.length})</h3>
      <div className={'sectionContainer'}>
        {props.section.items.map(item => {
          return (
            <ErrorBoundary key={item.name}>
              <SaleItem item={item}
                        itemClicked={(item) => props.itemClicked(item)}
              />
            </ErrorBoundary>
          )
        })}
      </div>
    </div>
  )
};

export default StoreSection