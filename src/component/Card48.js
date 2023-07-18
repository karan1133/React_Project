import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back3 from "./Back3";

function Card48(){
    return(
        <>
        <Navbar/>
        <Back3/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"20%"}}>
            <div className="row">
                <div className="col-sm-7" style={{marginTop:"-100px"}}>
                    <img style={{width:"800px",height:"600px"}} src="https://static.vitra.com/media-resized/lQN92ySdNowOxIrZWJaeJG1rAavDhf8sUnciUOe8AWs/fill/1440/1080/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzE3MDM5Nzcvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC8yMjQyOTE3Ny5qcGc.jpg"></img>
                </div>
                <div className="col-sm-5" style={{paddingLeft:"65px",marginTop:"10px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>Plywood Mobile, Model A</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Charles & Ray Eames, 1941</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>The Plywood Mobiles, whose shapes are strongly</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>reminiscent of Ray's artwork and graphics, were hung</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>from the ceiling of the Eameses' apartment in Los</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>Angeles.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Card48;