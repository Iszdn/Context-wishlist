import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { WishlistContext } from "../../Context/WishlistContext";

const ProductsProps = ({
  colButton,
  image,
  category,
  name,
  price,
  brand,
  item,
}) => {
  const {wishlist, setWishlist} = useContext(WishlistContext);

  
  function addWishlist(item) {
    const finditem = wishlist.find((x) => x.id === item.id);

    if (finditem) {
      finditem.count++
      setWishlist([...wishlist]);
      return
    }
    setWishlist([...wishlist,{...item,count: 1}]);
  }



  return (
    <div className={`cards col-6 col-lg-4 col-md-4 ${colButton}`}>
      <div className="image-product">
        <img src={image} alt="" />
        <i onClick={()=>addWishlist(item)} className="fa-regular fa-heart"></i>
      </div>
      <div>
        <h3 className="category-prod">{category}</h3>
        <h3 className="name-prod">{name}</h3>
        <div className="price-prod">${price}</div>
        <p className="brand-prod">{brand}</p>
      </div>
    </div>
  );
};

export default ProductsProps;
