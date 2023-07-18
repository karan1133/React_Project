import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back3 from "./Back3";

function Card36(){
    return(
        <>
        <Navbar/>
        <Back3/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"20%"}}>
            <div className="row">
                <div className="col-sm-7">
                    <img style={{width:"800px",height:"350px"}} src="https://static.vitra.com/media-resized/NduT3OkJwEdMMaflS4eXkxQvm-Y-qoE-WOcuw6nxAI8/fill/1440/576/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzEzNjQ3NzUvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC8zMzI2NDM0MC5qcGc.jpg"></img>
                </div>
                <div className="col-sm-5" style={{paddingLeft:"65px",marginTop:"50px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>Wiggle Stool</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Frank Gehry, 1972</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>The Wiggle Stool is part of Frank Gehry's 1972 furniture</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>series 'Easy Edges', which successfully introduced a new</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>aesthetic dimension to such an everyday material as</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>cardboard. The iconic stool is robust and lends a striking</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>note to any interior.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Card36;