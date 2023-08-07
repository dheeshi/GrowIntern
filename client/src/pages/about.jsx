import React from "react";

const about = () => {
  return (
    <div>
      {/*  <!-- Start Hero Section --> */}
      <div class="hero">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-5">
              <div class="intro-excerpt">
                <h1>About Us</h1>
                <p class="mb-4">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique.
                </p>
                <p>
                  <a href="/shop" class="btn btn-secondary me-2">
                    Shop Now
                  </a>
                  <a href="/" class="btn btn-white-outline">
                    Explore
                  </a>
                </p>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="hero-img-wrap">
                <img src="images/couch.png" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 	<!-- End Hero Section --> */}

      {/* <!-- Start Why Choose Us Section --> */}
      <div class="why-choose-section">
        <div class="container">
          <div class="row justify-content-between align-items-center">
            <div class="col-lg-6">
              <h2 class="section-title">Why Choose Us</h2>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>

              <div class="row my-5">
                <div class="col-6 col-md-6">
                  <div class="feature">
                    <div class="icon">
                      <img
                        src="images/truck.svg"
                        alt="Image"
                        class="imf-fluid"
                      />
                    </div>
                    <h3>Fast &amp; Free Shipping</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </p>
                  </div>
                </div>

                <div class="col-6 col-md-6">
                  <div class="feature">
                    <div class="icon">
                      <img src="images/bag.svg" alt="Image" class="imf-fluid" />
                    </div>
                    <h3>Easy to Shop</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </p>
                  </div>
                </div>

                <div class="col-6 col-md-6">
                  <div class="feature">
                    <div class="icon">
                      <img
                        src="images/support.svg"
                        alt="Image"
                        class="imf-fluid"
                      />
                    </div>
                    <h3>24/7 Support</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </p>
                  </div>
                </div>

                <div class="col-6 col-md-6">
                  <div class="feature">
                    <div class="icon">
                      <img
                        src="images/return.svg"
                        alt="Image"
                        class="imf-fluid"
                      />
                    </div>
                    <h3>Hassle Free Returns</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-5">
              <div class="img-wrap">
                <img
                  src="images/why-choose-us-img.jpg"
                  alt="Image"
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Why Choose Us Section --> */}

      {/* <!-- Start Contact Form --> */}
      <div class="untree_co-section">
        <div class="container">
          <div class="block">
            <h2 class="section-title">Contact Us</h2>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit.
            </p>
            <div class="row justify-content-center">
              <div class="col-md-8 col-lg-8 pb-4">
                <form>
                  <div class="row">
                    <div class="col-6">
                      <div class="form-group">
                        <label class="text-black" for="fname">
                          First name
                        </label>
                        <input type="text" class="form-control" id="fname" />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group">
                        <label class="text-black" for="lname">
                          Last name
                        </label>
                        <input type="text" class="form-control" id="lname" />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="text-black" for="email">
                      Email address
                    </label>
                    <input type="email" class="form-control" id="email" />
                  </div>

                  <div class="form-group mb-5">
                    <label class="text-black" for="message">
                      Message
                    </label>
                    <textarea
                      name=""
                      class="form-control"
                      id="message"
                      cols="30"
                      rows="5"
                    ></textarea>
                  </div>

                  <button type="submit" class="btn btn-primary-hover-outline">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Contact Form  */}
    </div>
  );
};

export default about;
