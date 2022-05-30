import axios from "axios";
import React, { useState } from "react";

function Register() {


 let [name,setName] = useState("")
 //let [namel,setNamel] = useState("")
 let [email,setEmail]= useState("")
 let [password,setPassword] = useState("")

 let url ="http://localhost:4000/bmail/register";
 
 function handleClick(val){
    val.preventDefault();
    let data = {"name": name,"email":email,"password":password};


    axios.post(url,{data},{headers:{'content-type':'application/json'}})
    .then((res)=> console.log("sent",res))
    .catch((err)=> console.log(err))
    alert("Account Created Successfully, Please Login")


 }
 

  return (
    <>
      <div className="row">
        <div className="col-lg-7">
          <div className="p-5">
            <div className="text-center">
              <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
            </div>
            <form className="user" onSubmit={handleClick}>
              <div className="form-group row">
                   <input
                    type="text"
                    className="form-control form-control-user"
                    id="exampleFirstName"
                    placeholder="Enter Your Name"
                    required
                    onChange={(val)=>setName(val.target.value)}
                  />
               
              </div>
              <div className="form-group">
                  <input
                  type="email"
                  className="form-control form-control-user"
                  id="exampleInputEmail"
                  placeholder="Email Address"
                  required 
                  onChange={(val)=>setEmail(val.target.value)}
                />
              </div>
              <div className="form-group row">
                   <input
                    type="password"
                    className="form-control form-control-user"
                    id="exampleInputPassword"
                    placeholder="Password"
                    required
                    onChange={(val)=>setPassword(val.target.value)}

                  />
                
                {/* <div className="col-sm-6">
                  <input
                    type="password"
                    className="form-control form-control-user"
                    id="exampleRepeatPassword"
                    placeholder="Repeat Password"
                  /> 
                </div>  */}
              </div>
              <button   className="btn btn-primary btn-user btn-block">
                Register Account
              </button>
              <hr />
              <a href="index.html" className="btn btn-google btn-user btn-block">
                <i className="fab fa-google fa-fw"></i> Register with Google
              </a>
              <a href="index.html" className="btn btn-facebook btn-user btn-block">
                <i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
              </a>
            </form>
            <hr />
            <div className="text-center">
              <a className="small" href="forgot-password.html">
                Forgot Password?
              </a>
            </div>
            <div className="text-center">
              <a className="small" href="login.html">
                Already have an account? Login!
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
