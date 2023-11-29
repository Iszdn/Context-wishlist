import React, { createContext, useState } from "react";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  return (
    <WishlistContext.Provider value={{wishlist, setWishlist}}>
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;
