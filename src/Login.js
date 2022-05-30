import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";


function Login() {

let [userName,setUserName] = useState("");
let [password,setPassword] = useState("");

    let url = "http://localhost:4000/bmail/login";

 function handleClick(val){
   val.preventDefault();
   let data = {"userName":userName,"Password":password};

   axios.post(url,{data},{headers:{"content-type":"application/json"}})
   .then((res)=> console.log("sent",res))
   .catch((err)=> console.log(err))
 }

  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <div className="p-5">
            <div className="text-center">
              <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
            </div>
            <form className="user"  onSubmit={handleClick}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-user"
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter Username..."
                  required
                  onChange={(val)=>setUserName(val.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-user"
                  id="exampleInputPassword"
                  placeholder="Password"
                  required
                  onChange={(val)=>setPassword(val.target.value)}

                />
              </div>
              <div className="form-group">
                <div className="custom-control custom-checkbox small">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck"
                  />
                  <label className="custom-control-label" for="customCheck">
                    Remember Me
                  </label>
                </div>
              </div>
              <Link to="/">
               <button   className="btn btn-primary btn-user btn-block">
                Login
              </button>
              </Link>

               <hr />
              <p   className="btn btn-google btn-user btn-block">
                <i className="fab fa-google fa-fw"></i> Login with Google
              </p>
              <p  className="btn btn-facebook btn-user btn-block">
                <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
              </p>
            </form>
            <hr />
            <div className="text-center">
            
            </div>
            <div className="text-center">
              <p className="small"  >
                Create an Account!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
