import React, { useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { Store } from "../../Store";

const Cart = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = (item, quantity) => {
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };
  const removeItemHandler = (item) => {
    ctxDispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  const checkoutHandler = () => {
    navigate("/signin?redirect=/shipping");
  };

  return (
    <div>
      {/* <!-- Start Hero Section --> */}
      <div class="hero">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-5">
              <div class="intro-excerpt">
                <h1>Cart</h1>
              </div>
            </div>
            <div class="col-lg-7"></div>
          </div>
        </div>
      </div>
      {/* <!-- End Hero Section --> */}

      <div class="untree_co-section before-footer-section">
        {cartItems.length === 0 ? (
          <div class="border p-4 rounded" role="alert">
            Cart is empty. <Link to="/shop">Go Shopping</Link>
          </div>
        ) : (
          <div class="container">
            {/* <!-- Start Cart Section --> */}
            <div class="row mb-5">
              <form class="col-md-12" method="post">
                <div class="site-blocks-table">
                  <table class="table">
                    <thead>
                      <tr>
                        <th class="product-thumbnail">Image</th>
                        <th class="product-name">Product</th>
                        <th class="product-price">Price</th>
                        <th class="product-quantity">Quantity</th>
                        <th class="product-remove">Remove</th>
                      </tr>
                    </thead>

                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item._id}>
                          <td class="product-thumbnail">
                            <img
                              src={item.image}
                              alt={item.name}
                              class="img-fluid"
                            />
                          </td>
                          <td class="product-name">
                            <h2
                              class="h5 text-black"
                              to={`/product/${item.slug}`}
                            >
                              {item.name}
                            </h2>
                          </td>
                          <td>${item.price}</td>
                          <td>
                            <div
                              class="input-group mb-3 d-flex align-items-center quantity-container"
                              style={{ maxWidth: "120px" }}
                            >
                              <button
                                onClick={() =>
                                  updateCartHandler(item, item.quantity - 1)
                                }
                                variant="light"
                                disabled={item.quantity === 1}
                                class="btn btn-outline-black decrease"
                                type="button"
                              >
                                <FontAwesomeIcon icon={faMinus} />
                              </button>

                              <span>{item.quantity}</span>

                              <button
                                variant="light"
                                onClick={() =>
                                  updateCartHandler(item, item.quantity + 1)
                                }
                                disabled={item.quantity === 1}
                                class="btn btn-outline-black increase"
                                type="button"
                              >
                                <FontAwesomeIcon icon={faPlus} />
                              </button>
                            </div>
                          </td>
                          <td>
                            <a
                              href="#"
                              class="btn btn-black btn-sm"
                              onClick={() => removeItemHandler(item)}
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
            {/* <!-- End Cart Section --> */}

            {/* <!-- Start Total Section --> */}
            <div class="row">
              <div class="col-md-6 pl-5">
                <div class="row justify-content-end">
                  <div class="col-md-7">
                    <div class="row">
                      <div class="col-md-12 text-right border-bottom mb-5">
                        <h3 class="text-black h4 text-uppercase">
                          Cart Totals
                        </h3>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-md-6">
                        <span class="text-black">Total items</span>
                      </div>
                      <div class="col-md-6 text-right">
                        <strong class="text-black">
                          {cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                        </strong>
                      </div>
                    </div>
                    <div class="row mb-5">
                      <div class="col-md-6">
                        <span class="text-black">Total price</span>
                      </div>
                      <div class="col-md-6 text-right">
                        <strong class="text-black">
                          {" "}
                          $
                          {cartItems.reduce(
                            (a, c) => a + c.price * c.quantity,
                            0
                          )}
                        </strong>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <Link to="/checkout">
                          <button
                            class="btn btn-black btn-lg py-3 btn-block"
                            onClick={checkoutHandler}
                            disabled={cartItems.length === 0}
                          >
                            Proceed To Checkout
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Total Section --> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
