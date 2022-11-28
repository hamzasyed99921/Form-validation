import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  // console.log(email);

  const emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[a-zA-Z\d@$!%*#?&]{8,}$/g;
  const data = regEx.test(password);
  // const passwordValidation = (e) => {
  //   e.preventDefault();
  //   if (regEx.test(password)) {
  //     setMessage('Password is Valid')
  //   }else if(!regEx.test(password) && password !== ''){
  //     setMessage('Password is not Valid')
  //   }else{
  //     setMessage('')
  //   }
  // }

  return (
    <>
      <div className="bg_color">
        <div className="container " style={{ height: "100%" }}>
          <div className="login_form d-flex  justify-content-center py-5">
            <div
              className="card px-2 py-5 "
              style={{ width: "26rem" }}
              data-aos="zoom-in"
            >
              <h3 className="text-center">Sign Up</h3>
              <div className="card-body py-3 ">
                <form>
                  <label>Email:</label>
                  <input
                    type="text"
                    value={email}
                    className="form-control shadow-lg"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your Email"
                  />
                  {emailRegx.test(email) ? (
                    ""
                  ) : (
                    <p className="small_txt">
                      ** Email Must be Proper
                    </p>
                  )}
                  <label>Password:</label>
                  <input
                    type="password"
                    value={password}
                    className="form-control shadow-lg"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your Password"
                  />

                  {data ? (
                    ""
                  ) : (
                    <p className="small_txt">
                      ** Password must be at least one Capital , Small , Digit & one
                      Special Character
                    </p>
                  )}

                  <button
                    className="btn bg-primary text-white mt-3 batn w-100"
                    disabled={
                      password == "" ? true : false || data ? false : true
                    }
                  >
                    SIGNUP
                  </button>

                  {message}
                </form>
                <div className="text-center botm_link mt-4">
                  Already have an account!
                  <Link to="/" className="">
                    Login here
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
