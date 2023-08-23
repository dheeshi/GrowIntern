import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import decode from "jwt-decode";
import { Badge } from "react-bootstrap";

import { setCurrentUser } from "../actions/currentUser";
import { Store } from "./../Store";

const Navbar = () => {
  const { state } = useContext(Store);
  const { cart } = state;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  var User = useSelector((state) => state.currentUserReducer);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [User?.token, dispatch]);

  return (
    <div>
      {/*  Start Header/Navigation  */}
      <nav
        class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
        arial-label="Furni navigation bar"
      >
        <div class="container">
          <a class="navbar-brand" href="/">
            Furni<span>.</span>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarsFurni">
            <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li class="nav-item ">
                <a class="nav-link" href="/">
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link" href="/shop">
                  Shop
                </a>
              </li>
              <li>
                <a class="nav-link" href="/about">
                  About us
                </a>
              </li>
            </ul>

            <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              {User === null ? (
                <li>
                  <a
                    class="nav-link"
                    href="/login"
                    style={{ fontWeight: "500" }}
                  >
                    Sign in
                  </a>
                </li>
              ) : (
                <>
                  <li>
                    <a
                      class="nav-link"
                      href="/login"
                      style={{ fontWeight: "500" }}
                      onClick={handleLogout}
                    >
                      Sign out
                    </a>
                  </li>
                  <li>
                    <a class="nav-link" href="/user">
                      <img alt="user" src="images/user.svg" />
                    </a>
                  </li>
                </>
              )}

              <li>
                <a class="nav-link" href="/cart">
                  <img alt="cart" src="images/cart.svg" />
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="warning">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/*  End Header/Navigation  */}
    </div>
  );
};

export default Navbar;
