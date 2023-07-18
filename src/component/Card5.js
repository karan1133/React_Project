import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back from "./Back";

function Card5(){
    return(
        <>
        <Navbar/>
        <Back/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"20%"}}>
            <div className="row">
                <div className="col-7">
                    <img style={{width:"900px",height:"350px"}} src="https://static.vitra.com/media-resized/BlBWGOfT3PZsGRWRRmVP2InIJdGriKJGCPWyKmvRHp4/fill/1440/576/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzU4MDc3OTQvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC82NTI4ODU2NC5qcGc.jpg"></img>
                </div>
                <div className="col-5" style={{paddingLeft:"65px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>HAL Lounge Chair & Ottoman</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Jasper Morrison, 2021</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>The compact HAL Lounge Chair (2021) is Jasper</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>Morrison's reinterpretation of the softly upholstered four-</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>legged armchair with a high backrest.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Card5;