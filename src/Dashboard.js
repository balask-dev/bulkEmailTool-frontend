import axios from "axios";
import React, { useState } from "react";

function Dashboard() {
  let [from, setFrom] = useState("");
  let [service,setService] = useState("");
  let [password,setPassword] = useState("");
  let [to, setTo] = useState("");
  let [msg, setMsg] = useState("");
 
  const url = "http://localhost:4000/bmail/compose";
  let data = {"From":from,"Password":password,"Service":service,"To":to,"Message":msg};

   function handleSubmit(val) {
  
    val.preventDefault();
      axios.post(url, {data},{ headers: {'Content-Type': 'application/json'}})
      .then((res) => console.log("sent",res))
      .catch((err) => console.log(err));
      alert("Check Your Inbox")
  }

   
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">BMAIL - Create Account Gives Unlimited Mails</h1>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <div className="p-5">
            <div className="text-center">
              <h1 className="h4 text-gray-900 mb-4">Compose Your Bulk Mail</h1>
            </div>
            <form className="user" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-user"
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your Email"
                  name="from"
                  onChange={(val) => setFrom(val.target.value)}
                />
              </div>
            



              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-user"
                  id="exampleInputEmail"
                  placeholder="Enter your Service...  [ Ex : gmail ]"
                  name="text"
                  required
                  onChange={(val) => setService(val.target.value)}
                />
              </div>
             

              <div className="form-group">
                <input
                  type="Password"
                  className="form-control form-control-user"
                  id="exampleInputEmail"
                  placeholder="Password"
                  name="password"
                  required
                  onChange={(val) => setPassword(val.target.value)}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-user"
                  id="exampleInputEmail"
                  placeholder="To...  [EX : abc@gmail.com, bac@gmail.com...]"
                  name="to"
                  required
                  onChange={(val) => setTo(val.target.value)}
                />
              </div>
              <div className="form-group">
                <textarea
                  type="message"
                  className="form-control form-control"
                  id="message"
                  aria-describedby="emailHelp"
                  placeholder="Compose Your Message Here..."
                  name="msg"
                  required
                  onChange={(val) => setMsg(val.target.value)}
                ></textarea>
              </div>

              <button    
                className="btn btn-primary btn-user btn-block"
                
              >
                Send
              </button>

              <hr />
            </form>
            <hr />
            <div className="text-center">
              {/* <a className="small" href="forgot-password.html">
                Forgot Password?
              </a>
            </div>
            <div className="text-center">
              <a className="small" href="register.html">
                Create an Account!
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
