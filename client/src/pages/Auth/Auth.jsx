import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./Auth.css";
import { signup, login } from "../../actions/auth";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitch = () => {
    setIsSignup(!isSignup);
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      //alert("Enter email and password");
    }
    if (isSignup) {
      if (!name) {
        //alert("Enter a name to continue");
      }
      dispatch(signup({ name, email, password }, navigate));
    } else {
      dispatch(login({ email, password }, navigate));
    }
    console.log({name, email, password});
  };

  return (
    <div>
      {/* <!-- Start Hero Section --> */}
      <div class="hero">
        <div class="container ">
          <div class="row justify-content-between">
            <div class="col-lg-5">
              <div class="intro-excerpt"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Hero Section --> */}

      <section className="auth-section ">
        <div className="auth-container">
          <div class="tab-content">
            <div
              class="tab-pane fade show active"
              id="pills-login"
              role="tabpanel"
              aria-labelledby="tab-login"
            >
              <form onSubmit={handleSubmit}>
                {isSignup && (
                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="registerName"
                      class="form-control"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                )}
                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="loginName"
                    class="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="loginPassword"
                    class="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  {!isSignup && (
                    <p class="small d-flex">
                      <a class="text-muted" href="#!">
                        Forgot password?
                      </a>
                    </p>
                  )}
                </div>

                <button type="submit" class="btn btn-primary btn-block mb-4">
                  {isSignup ? "Sign up" : "Log in"}
                </button>
              </form>
            </div>
          </div>
          <p>
            {isSignup ? "Already have an account?" : "Don't have an account?"}
            <button
              type="button"
              className="handle-switch-btn"
              onClick={handleSwitch}
            >
              {isSignup ? "Log in" : "Sign up"}
            </button>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Auth;
