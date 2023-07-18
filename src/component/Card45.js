import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back3 from "./Back3";

function Card45(){
    return(
        <>
        <Navbar/>
        <Back3/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"20%"}}>
            <div className="row">
                <div className="col-sm-7">
                    <img style={{width:"800px",height:"350px"}} src="https://static.vitra.com/media-resized/5Y7jA2h5tPiDGJhHOme0rnC5_DLBnN3oITsCy9dkFCo/fill/1440/576/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzIwMzIyODUvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC8zMDA1NjA4MC5qcGc.jpg"></img>
                </div>
                <div className="col-sm-5" style={{paddingLeft:"65px",marginTop:"100px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>Rotary Tray</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Jasper Morrison, 2014</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Card45;