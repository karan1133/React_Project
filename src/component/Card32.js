import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back2 from "./Back2";

function Card32(){
    return(
        <>
        <Navbar/>
        <Back2/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"20%"}}>
            <div className="row">
                <div className="col-sm-7">
                    <img style={{width:"800px",height:"350px"}} src="https://static.vitra.com/media-resized/AwfHUokkZlGbgwQvX5jt01v5BaUGLR_3GKBZyXjg2YQ/fill/1440/576/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzY0MTkwMzkvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83MjA0MjkxMy5qcGc.jpg"></img>
                </div>
                <div className="col-sm-5" style={{paddingLeft:"65px",marginTop:"10px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>Standard</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Jean Prouve, 1934/1950</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>The Standard chair by Jean Prouve has evolved into one</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>of the most famous classics of the French 'constructeur'.</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>The seat and backrest of this understated, iconic chair</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>are available in various types of wood, and the metal</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>frame comes in different colours.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Card32;