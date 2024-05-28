import React, { memo } from 'react'
const ListPage = ({addToCart,items,cart}) => {
  console.log("List page rendered")
  return (
    <div>
      {items.map((item) => {
        return (
          <div>
            {item.name}
            <button onClick={addToCart}>Add To cart</button>
          </div>
        )
      })}
    </div>
  ) 
}

export default memo(ListPage);


