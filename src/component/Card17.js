import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back2 from "./Back2";

function Card17(){
    return(
        <>
        <Navbar/>
        <Back2/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"20%"}}>
            <div className="row">
                <div className="col-7">
                    <img style={{width:"800px",height:"450px"}} src="https://static.vitra.com/media-resized/N9PY4Wc5eeGN_IrEykhiy8VRjMNeZk9HJSGgtKVJEVY/fill/1440/810/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzEzODg4Njcvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC8xNjMzNjUxNC5qcGc.jpg"></img>
                </div>
                <div className="col-5" style={{paddingLeft:"65px",marginTop:"80px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>Algue</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Ronan & Erwan Bouroullec, 2004</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>Algues by Ronan and Erwan Bouroullec are plastic</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>elements which resemble plants. They can be linked to</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>create weblike structures - ranging from transparent</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>curtains to solid room dividers. Algues are available in a</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>selection of colours and come in packs of 25.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Card17;