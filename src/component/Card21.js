import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back2 from "./Back2";

function Card21(){
    return(
        <>
        <Navbar/>
        <Back2/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"20%"}}>
            <div className="row">
                <div className="col-7">
                    <img style={{width:"800px",height:"350px"}} src="https://static.vitra.com/media-resized/MKFiXdnfwe9YQCx6pt4MlCRFbd0bRmEnwmMJKabtqIg/fill/1440/576/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzY1MzA2NDYvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83NzE3MTExMC5qcGc.jpg"></img>
                </div>
                <div className="col-5" style={{paddingLeft:"65px",marginTop:"-30px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>Cite</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Jean Prouve, 1930</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>The Cite armchair is an early masterpiece by the French</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>designer and engineer Jean Prouve. Originally designed</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>to furnish the student residence halls at the Cite</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>Universitaire in Nancy, Prouve also used this comfortable,</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>expansive armchair with powder-coated steel runners</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>and leather belt armrests in the living room of his own</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>home.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Card21;