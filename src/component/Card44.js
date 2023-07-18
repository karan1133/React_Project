import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back3 from "./Back3";

function Card44(){
    return(
        <>
        <Navbar/>
        <Back3/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"20%"}}>
            <div className="row">
                <div className="col-sm-7">
                    <img style={{width:"800px",height:"350px"}} src="https://static.vitra.com/media-resized/ijxts8nkIUiS9pfywFiszqK5S0h4ta9db0IKfdU_aoc/fill/1440/576/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzE2MTMzOTMvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC8zODI5MTQ3Ni5qcGc.jpg"></img>
                </div>
                <div className="col-sm-5" style={{paddingLeft:"65px",marginTop:"10px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>Follow Me 1</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Antonio Citterio, 2002</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>Follow Me 1 is a robust mobile pedestal for both offices</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>and home workspaces. A decorative pull strap makes it</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>easy to move the trolley from place to place. The interior</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>compartment (the height of one ring binder) can be</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>concealed by pulling down the mobile pedestal's</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>tambour shutter. Optional drawers and shelves can be</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>individually configured. The taller Follow Me 2 version</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>makes an ideal companion for standing-height tables.</p>
                </div>
            </div>
        </div> 
        <Footer/>
        </>
    )
}
export default Card44;