import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back2 from "./Back2";

function Card18(){
    return(
        <>
        <Navbar/>
        <Back2/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"20%"}}>
            <div className="row">
                <div className="col-7">
                    <img style={{width:"800px",height:"350px"}} src="https://static.vitra.com/media-resized/CJurSi8gdeAJrep17GtuC7MzCJ47KN0mdFX_rUbdvbs/fill/1440/576/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzE2MDc3NzAvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC8zOTk1ODExOC5qcGc.jpg"></img>
                </div>
                <div className="col-5" style={{paddingLeft:"65px",marginTop:"-20px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>Amoebe</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Verner Panton, 1970</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>The Amoebe chair by Verner Panton is characterised by</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>its organic shape and the wide variety of bold colours</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>available for the cover fabric. The soft upholstery</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>encourages the sitter to curl up and relax in its</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>comfortable contours.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Card18;