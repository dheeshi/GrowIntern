import React, { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div>
      <div>
        {/*    <!-- Start Hero Section --> */}
        <div class="hero">
          <div class="container">
            <div class="row justify-content-between">
              <div class="col-lg-5">
                <div class="intro-excerpt">
                  <h1>Checkout</h1>
                </div>
              </div>
              <div class="col-lg-7"></div>
            </div>
          </div>
        </div>
        {/* <!-- End Hero Section --> */}

        <div class="untree_co-section">
          <div class="container">
            <div class="row mb-5">
              <div class="col-md-12">
                <div class="border p-4 rounded" role="alert">
                  Returning customer? <a href="/login">Click here</a> to login
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mb-5 mb-md-0">
                <h2 class="h3 mb-3 text-black">Billing Details</h2>
                <div class="p-3 p-lg-5 border bg-white">
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="c_fname" class="text-black">
                        First Name <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="c_fname"
                        name="c_fname"
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="c_lname" class="text-black">
                        Last Name <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="c_lname"
                        name="c_lname"
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <div class="col-md-12">
                      <label for="c_address" class="text-black">
                        Address <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="c_address"
                        name="c_address"
                        placeholder="Street address"
                      />
                    </div>
                  </div>

                  <div class="form-group mt-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Apartment, suite, unit etc. (optional)"
                    />
                  </div>

                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="c_state_country" class="text-black">
                        State / Country <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="c_state_country"
                        name="c_state_country"
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="c_postal_zip" class="text-black">
                        Posta / Zip <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="c_postal_zip"
                        name="c_postal_zip"
                      />
                    </div>
                  </div>

                  <div class="form-group row mb-5">
                    <div class="col-md-6">
                      <label for="c_email_address" class="text-black">
                        Email Address <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="c_email_address"
                        name="c_email_address"
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="c_phone" class="text-black">
                        Phone <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="c_phone"
                        name="c_phone"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="text-black d-flex gap-2">
                      <input
                        value="test"
                        type="checkbox"
                        id="c_create_account"
                        onChange={handleChange}
                      />{" "}
                      Create an account?
                    </label>

                    {checked ? (
                      <div class="py-2 mb-4">
                        {" "}
                        <p class="mb-5 text-start">
                          Create an account by entering the information below.
                          If you are a returning customer please login at the
                          top of the page.
                        </p>
                        <div class="form-group">
                          <label class="text-black d-flex p-2">
                            Account Password
                          </label>
                          <input
                            type="password"
                            class="form-control"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>

                  <div class="form-group">
                    <label class="text-black d-flex p-2">Order Notes</label>
                    <textarea
                      name="c_order_notes"
                      id="c_order_notes"
                      cols="30"
                      rows="5"
                      class="form-control"
                      placeholder="Write your notes here..."
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="row mb-5">
                  <div class="col-md-12">
                    <h2 class="h3 mb-3 text-black">Your Order</h2>
                    <div class="p-3 p-lg-5 border bg-white">
                      <table class="table site-block-order-table mb-5">
                        <thead>
                          <th>Product</th>
                          <th>Total</th>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              Top Up T-Shirt <strong class="mx-2">x</strong> 1
                            </td>
                            <td>$250.00</td>
                          </tr>
                          <tr>
                            <td>
                              Polo Shirt <strong class="mx-2">x</strong> 1
                            </td>
                            <td>$100.00</td>
                          </tr>
                          <tr>
                            <td class="text-black font-weight-bold">
                              <strong>Cart Subtotal</strong>
                            </td>
                            <td class="text-black">$350.00</td>
                          </tr>
                          <tr>
                            <td class="text-black font-weight-bold">
                              <strong>Order Total</strong>
                            </td>
                            <td class="text-black font-weight-bold">
                              <strong>$350.00</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <div class="form-group">
                        <Link to="/thankyou">
                          <button class="btn btn-black btn-lg py-3 btn-block">
                            Place Order
                          </button>
                        </Link>
                      </div>
                      <div class=" p-3 mb-3">
                        <div class="py-2 d-flex gap-1">
                          <span class="text-danger">*</span>
                          <p class="mb-0 gap-2 text-start">
                            Please use your Order ID as the payment reference.
                            Your order won’t be shipped until the funds have
                            cleared in our account.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- </form> --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
