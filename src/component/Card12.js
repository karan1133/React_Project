import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back from "./Back";

function Card12(){
    return(
        <>
        <Navbar/>
        <Back/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"20%"}}>
            <div className="row">
                <div className="col-7">
                    <img style={{width:"900px",height:"350px"}} src="https://static.vitra.com/media-resized/QwEdj0TN0ECDDt0ceAHEIjwAKHBT6XWQosIq-UoVoWk/fill/1440/576/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzM0MDY5NDAvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC80NzQ2Mzk5Ny5qcGc.jpg"></img>
                </div>
                <div className="col-5" style={{paddingLeft:"65px",marginTop:"-120px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>Grand Relax & Ottoman</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Antonio Citterio, 2019</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>The distinctive character of Hella Jongerius's comfortable</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>combining outstanding comfort with compact dimensions</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>and a classic understated aesthetic. When sitting down,</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>the user sinks into the soft cushions, and the chair reclines</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>thanks to an integrated and adjustable synchronised</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>mechanism concealed within the seat. The backrest can</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>be locked in any position. The outer backrest is covered</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>with embossed split leather, forming a type of shield that</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>enfolds the user, while defining the contours of the lounge</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>chair. Grand Relax appears both compact and inviting.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Card12;