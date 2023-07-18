import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back2 from "./Back2";

function Card31(){
    return(
        <>
        <Navbar/>
        <Back2/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"20%"}}>
            <div className="row">
                <div className="col-sm-7">
                    <img style={{width:"800px",height:"350px"}} src="https://static.vitra.com/media-resized/oc7cLYAZDSNzY_uygMPz0JqTpLUtsj8uFG_sgDpGY0Q/fill/1440/576/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzE3MzAwNDgvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC8zMTczNzYxOS5qcGc.jpg"></img>
                </div>
                <div className="col-sm-5" style={{paddingLeft:"65px",marginTop:"-60px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>Softshell Chair, four-legged base</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Ronan & Erwan Bouroullec, 2008</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>The Softshell Chair by Ronan and Erwan Bouroullec will</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>surprise users with its exceptional comfort: flexible ribs</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>are concealed in the back shell and adapt to the user,</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>providing freedom of movement. The four-legged version</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>of the elegant, lounge-style chair can be combined with</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>a wide selection of dining tables.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Card31;