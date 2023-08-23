import React, { useContext, useEffect, useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import "./shop.css";
import { Store } from "../../Store";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const ProductDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { slug } = params;
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, [slug]);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const addToCartHandler = () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity },
    });
    navigate('/cart');
  };

  return (
    <div>
      {/*  <!-- Start Hero Section --> */}
      <div class="hero">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-5">
              <div class="intro-excerpt">
                <h1>Product</h1>
              </div>
            </div>
            <div class="col-lg-7"></div>
          </div>
        </div>
      </div>
      {/* <!-- End Hero Section --> */}

      {/* Start Product Section */}

      <div class="untree_co-section before-footer-section">
        <div class="container">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <main class="item" key={product.id}>
              <section class="img">
                <img src={product.image} alt="" class="img-main" />
              </section>

              <section class="price">
                <h1 class="price-sub__heading">{product.name}</h1>
                <p class="price-txt">{product.description}</p>
                <div class="price-box">
                  <div class="price-box__main">
                    <span class="price-box__main-new">${product.price}</span>
                  </div>
                  <button class="btn" onClick={addToCartHandler}>
                    Add to cart
                  </button>
                </div>
              </section>
            </main>
          )}
        </div>
      </div>
      {/* End Product Section */}
    </div>
  );
};

export default ProductDetails;
