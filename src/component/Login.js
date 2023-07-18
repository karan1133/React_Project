import React from "react";
import Navbar from "./Navbar";
function Login(){
    return(
        <>
        <Navbar/>
        <div className="container" style={{width:"800px" , textAlign:"center"}}>
       <h1 className="mb-5" style={{fontWeight:"lighter"}}>Login</h1>
       <p className="mb-4">If you are already with Vitra, please login, or click 'forgot password' if this is the first time you have logged in.</p>

       <div>
       <form>
  <div class="form-group">
    <label for="email" style={{marginRight:"87%"}}>Email address:</label>
    <input type="email" class="form-control" placeholder="Enter email" id="email"/>
  </div>
  <div class="form-group">
    <label for="pwd" style={{marginRight:"90%"}}>Password:</label>
    <input type="password" class="form-control" placeholder="Enter password" id="pwd"/>
  </div>
  <button type="submit" className="btn btn-lg btn-dark w-50 mt-3 p-2">LOGIN</button><br/>
  <button type="submit" style={{border:"1px solid black",borderRight:"none",borderLeft:"none",borderRadius:"0px"}} className="btn btn-outline-dark w-50 mt-3 p-2">FORGOT PASSWORD</button><br/>
  <button type="submit" style={{border:"1px solid black",borderRight:"none",borderLeft:"none",borderRadius:"0px"}} className="btn btn-outline-dark w-50 mt-3 p-2">HELP</button>

</form>

       </div>
       </div>
        </>
    )
};

export default Login;