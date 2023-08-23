import React, { useEffect, useReducer } from "react";
import axios from "axios";

import "./shop.css";
import Product from "./Product";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Shop = () => {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {/*  <!-- Start Hero Section --> */}
      <div class="hero">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-5">
              <div class="intro-excerpt">
                <h1>Shop</h1>
              </div>
            </div>
            <div class="col-lg-7"></div>
          </div>
        </div>
      </div>
      {/* <!-- End Hero Section --> */}

      {/* Start Product Section */}
      <div class="untree_co-section product-section before-footer-section">
        <div class="container">
          <div class="row">
            <div className="products">
              {loading ? (
                <div>Loading...</div>
              ) : error ? (
                <div>{error}</div>
              ) : (
                products.map((product) => (
                  <div class="mb-5" key={product.slug}>
                    <Product product={product}></Product>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      {/* End Product Section */}
    </div>
  );
};

export default Shop;
