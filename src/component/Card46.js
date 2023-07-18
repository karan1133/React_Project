import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back3 from "./Back3";

function Card46(){
    return(
        <>
        <Navbar/>
        <Back3/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"20%"}}>
            <div className="row">
                <div className="col-sm-7">
                    <img style={{width:"900px",height:"350px"}} src="https://static.vitra.com/media-resized/JU6dATcHDzQfPjQspijTClTmPRGMOTMhVWYMUJwVqzw/fill/1440/576/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzE5NDc3NTQvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC8yODg1OTA5MC5qcGc.jpg"></img>
                </div>
                <div className="col-sm-5" style={{paddingLeft:"65px",marginTop:"10px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>Wall Clocks - Sunflower Clock</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>George Nelson, 1948-1960</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>With his collection of Wall Clocks (1948-1960), George</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>Nelson conceived a wide array of timepieces, many of</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>which have since become icons of 1950s design.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Card46;