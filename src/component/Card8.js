import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back from "./Back";

function Card8(){
    return(
        <>
        <Navbar/>
        <Back/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"20%"}}>
            <div className="row">
                <div className="col-7">
                    <img style={{width:"900px",height:"350px"}} src="https://static.vitra.com/media-resized/LBhs9tCNH7SOSzSsRr5GoDH5dWPt5JPO9NBu-Y8_VLk/fill/1440/810/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0Lzc1NjgwMzgvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83NzUxMzA2MS5qcGc.jpg"></img>
                </div>
                <div className="col-5" style={{paddingLeft:"65px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>Nuage abstrait</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Ronan & Erwan Bouroullec, 2016</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>The limited edition Nuage abstrait is fabricated using a</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>process in which each vase is immersed in a series of</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>coloured anodising solutions for a specific length of time.</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>This reflects Ronan and Erwan Bouroullec's abstract</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>interpretation of the design, giving each vase the quality</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>of a sculpture with a unique colour gradient.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Card8;