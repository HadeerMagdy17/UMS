import React from "react";

export default function Login() {
  return (
   
      <>
        <div
          id="login"
          className="login-container vh-100 d-flex justify-content-center align-items-center"
        >
          <div className="bg-white rounded p-5 py-5">
            <div className="login-h1 ">
              <h2>User Management System</h2>
            </div>
            <div className=" text-center py-3">
              <h3>Sign In</h3>
              <span>Enter your credentials to access your account</span>
            </div>
            <form action="">
              <div className="mb-1">
                <label className="form-label">Username</label>
                <input
                  // value="emilys"
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your username"
                />
                {/* <small style={{}}>use this username : " emilys "</small> */}
              </div>
              <div className="my-1">
                <label className="form-label">Password</label>
                <input
                  // value="emilyspass"
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your password"
                />
              </div>
              <button className="btn btn-warning sign-btn w-100 text-white mt-3">
                SIGN IN
              </button>
            </form>
          </div>
        </div>
      </>
   
   
  );
}
