import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back3 from "./Back3";

function Card33(){
    return(
        <>
        <Navbar/>
        <Back3/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"20%"}}>
            <div className="row">
                <div className="col-sm-7">
                    <img style={{width:"800px",height:"350px"}} src="https://static.vitra.com/media-resized/a2nb5KwMp29_OLFFpWdgFIqQdU-xkIzMOHyF1gdZ40c/fill/1440/576/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzE1MzY0Nzkvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC80Mjk3NjY3MC5qcGc.jpg"></img>
                </div>
                <div className="col-sm-5" style={{paddingLeft:"65px",marginTop:"10px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>Tabouret Haut</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Jean Prouve, 1942</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>The classic Tabouret Haut bar stool by Jean Prouve is</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>available in robust solid oak, with a natural or dark</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>stained finish. The chrome-plated steel ring with an anti-</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>skid surface guarantees stability and offers comfortable</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>use as a footrest.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Card33;