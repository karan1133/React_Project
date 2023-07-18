import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back3 from "./Back3";

function Card35(){
    return(
        <>
        <Navbar/>
        <Back3/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"20%"}}>
            <div className="row">
                <div className="col-sm-7">
                    <img style={{width:"800px",height:"350px"}} src="https://static.vitra.com/media-resized/AKwCN-rBT5NyQpWB5QcDXKR9ZNey-rNec1qu_FisjRk/fill/1440/576/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzEzNjQ3Nzcvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC8zMzI2NDMxMy5qcGc.jpg"></img>
                </div>
                <div className="col-sm-5" style={{paddingLeft:"65px",marginTop:"-5px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>Wiggle Side Chair</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Frank Gehry, 1972</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>The Wiggle Side Chair is part of Frank Gehry's 1972</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>furniture series 'Easy Edges', in which he succeeded in</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>bringing a new aesthetic dimension to such an everyday</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>material as cardboard. The sculptural chair is not only</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>very comfortable, it is also strong and robust.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Card35;