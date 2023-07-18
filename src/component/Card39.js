import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back3 from "./Back3";

function Card39(){
    return(
        <>
        <Navbar/>
        <Back3/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"20%"}}>
            <div className="row">
                <div className="col-sm-7">
                    <img style={{width:"800px",height:"350px"}} src="https://static.vitra.com/media-resized/77CU6dD9KG6vDxe0rZ6LAbi3DCjaPw4MMDwg6M4QGug/fill/1440/576/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzE3MzAwNTYvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC8zMTczNzY0My5qcGc.jpg"></img>
                </div>
                <div className="col-sm-5" style={{paddingLeft:"65px",marginTop:"-20px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>Softshell Chair, five-star base</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Ronan & Erwan Bouroullec, 2008</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>Designed by Ronan and Erwan Bouroullec, the Softshell</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>Chair mounted on a height-adjustable five-star swivel</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>base with castors is ideal for studio offices. Its contours</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>and quality materials give it an inviting appeal, while the</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>soft upholstery guarantees superb comfort.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Card39;