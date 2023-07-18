import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back2 from "./Back2";

function Card30(){
    return(
        <>
        <Navbar/>
        <Back2/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"20%"}}>
            <div className="row">
                <div className="col-sm-7">
                    <img style={{width:"800px",height:"350px"}} src="https://static.vitra.com/media-resized/ZhCVRE_nXii3-ItBCjQrqPn0uNx7m_k9ThI9a7owEjk/fill/1440/576/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzEzNzY5MDYvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC80Mjk2NDU5MC5qcGc.jpg"></img>
                </div>
                <div className="col-sm-5" style={{paddingLeft:"65px",marginTop:"10px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>Slow Chair</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Ronan & Erwan Bouroullec, 2006</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>Despite its generous proportions, the Slow Chair by</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>Ronan and Erwan Bouroullec has a lightweight,</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>understated aesthetic, thanks to the armchair's</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>translucent high-tech knit sling cover and graceful</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>contours. The Slow Chair comes in a range of colours</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>with matching cushions.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Card30;