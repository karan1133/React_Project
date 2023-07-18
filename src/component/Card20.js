import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back2 from "./Back2";

function Card20(){
    return(
        <>
        <Navbar/>
        <Back2/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"20%"}}>
            <div className="row">
                <div className="col-7">
                    <img style={{width:"800px",height:"350px"}} src="https://static.vitra.com/media-resized/6nnQ-ahNgk_OU4H74vptOWrDYO2S75hgeBybJuJlJfQ/fill/1440/576/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzE2MTMwODkvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC80NDEyODU4Ny5qcGc.jpg"></img>
                </div>
                <div className="col-5" style={{paddingLeft:"65px",marginTop:"-30px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>Bistro Stand-up Table</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Ronan & Erwan Bouroullec, 2010</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>The Bistro Tables were developed by Ronan and Erwan</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>Bouroullec in conjunction with the Softshell Chair and</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>feature the same elegant cruciform base. Thanks to its</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>understated design, the Bistro Table can be used in a</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>wide variety of interior settings. In versions with a solid</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>core top, the round standing-height tables (110 cm high)</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>are also suited for outdoor use.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Card20;
