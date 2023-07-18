import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back3 from "./Back3";

function Card41(){
    return(
        <>
        <Navbar/>
        <Back3/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"20%"}}>
            <div className="row">
                <div className="col-sm-7">
                    <img style={{width:"800px",height:"350px"}} src="https://static.vitra.com/media-resized/G85PhP8NcjQ-HECMegM1Y7qT-s30BztW7H9m0oDhjfw/fill/1440/576/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzE2MTAwNzcvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC80Mjk2NDU3NS5qcGc.jpg"></img>
                </div>
                <div className="col-sm-5" style={{paddingLeft:"65px",marginTop:"-10px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>Visiona Stool</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Verner Panton, 1970/2012</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>Verner Panton designed the Visiona Stool as part of the</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>interior installation created in 1970 for his legendary</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>Visiona exhibition in Cologne. Available in a large palette</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>of colours, the lightweight, comfortable stool has an</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>unobtrusive geometric shape that can still be combined</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>with a wide range of furnishings today.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Card41;