import React from 'react'
import { useContext } from 'react'
import { WishlistContext } from '../../Context/WishlistContext'
import 'bootstrap/dist/css/bootstrap.min.css';

import "./index.css"
function WishList() {
  const { wishlist } = useContext(WishlistContext)
  console.log(wishlist);
  return (
    <>
      <div className='wishlist'>
        <h2 className='wishlist-title'>Wishlist <br /> <span className='shop'>SHOP</span></h2>
      </div>
      {wishlist && wishlist.map((x)=>{
        return  <div className={`cards col-6 col-lg-6 col-md-4 `}>
        <div className="image-product">
          <img src={x.image} alt="" />
        </div>
        <div>
          <h3 className="category-prod">{x.category}</h3>
          <h3 className="name-prod">{x.name}</h3>
          <div className="price-prod">${x.price}</div>
          <p className="brand-prod">{x.brand}</p>
        </div>
      </div>
      })}
    </>
  )
}

export default WishList