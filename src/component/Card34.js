import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back3 from "./Back3";

function Card34(){
    return(
        <>
        <Navbar/>
        <Back3/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"20%"}}>
            <div className="row">
                <div className="col-sm-7">
                    <img style={{width:"800px",height:"350px"}} src="https://static.vitra.com/media-resized/lYSG0HnR1C1Puc3mxHndHUIpRZhApuvsDdEjuti2H4U/fill/1440/576/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzMyMDg5NDgvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC80NTU3ODk0OC5qcGc.jpg"></img>
                </div>
                <div className="col-sm-5" style={{paddingLeft:"65px",marginTop:"10px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>Trapeze</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Jean Prouve,1950/1954</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>Jean Prouve originally designed the Trapèze table for the</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>Cite Universitaire in Antony near Paris. The trapezoidal</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>shape of the sheet steel legs provided inspiration for the</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>name and also gives the table its distinctive character.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Card34;