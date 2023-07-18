import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back from "./Back";

function Card9(){
    return(
        <>
        <Navbar/>
        <Back/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"20%"}}>
            <div className="row">
                <div className="col-7">
                    <img style={{width:"900px",height:"350px"}} src="https://static.vitra.com/media-resized/9dZ352D8Trh-R9ipROqceNaS0j4htcvYUwBoKjrHpQM/fill/1440/576/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzY1NTU2ODgvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83Mjk3MjcyNC5qcGc.jpg"></img>
                </div>
                <div className="col-5" style={{paddingLeft:"65px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>Petite Potence</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Jean Prouve, 1947</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>Jean Prouve created the first version of the Potence wall</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>lamp for his own home in Nancy: a simple light bulb</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>affixed to a long, pivoting steel bar, which is held by a</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>steel wire. This functionalist, puristic design was soon</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>produced in various sizes, with an added handle on</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>larger models to facilitate the swivel movement.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Card9;