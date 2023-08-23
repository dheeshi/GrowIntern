import React, { useContext } from "react";

import "./shop.css";
import { Link } from "react-router-dom";
import { Store } from "../../Store";

const Product = (props) => {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };
  return (
    <div>
      {/* Start Product Section */}

      <a class="active product-item" role="button" href="#">
        <Link
          to={`/product/${product.slug}`}
          style={{ textDecoration: "none" }}
        >
          <img src={product.image} alt="" class="img-fluid product-thumbnail" />
          <h3 class="product-title">{product.name}</h3>
        </Link>
        <strong class="product-price">${product.price}</strong>

        <span onClick={() => addToCartHandler(product)} class="icon-cross">
          <img src="images/cross.svg" alt="" class="img-fluid" />
        </span>
      </a>

      {/* End Product Section */}
    </div>
  );
};

export default Product;
