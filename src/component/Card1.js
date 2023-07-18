import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back from "./Back";
import Information from "./Information";
function Card1(){
    return(
        <>
        <Navbar/>
        <Back/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"1%"}}>
            <div className="row">
                <div className="col-7">
                    <img style={{width:"900px",height:"350px"}} src="https://static.vitra.com/media-resized/mrLMTQX2k8xLXi-aAEaihbRGVPmq1JCDNsyKYXfF8X8/fill/1440/576/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzY1ODQ1Nzcvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83MzI0NzAwMC5qcGc.jpg"></img>
                </div>
                <div className="col-5" style={{paddingLeft:"65px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>Polder Sofa</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Hella Jongerius, 2005/2015</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>The distinctive character of Hella Jongerius's comfortable</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>Polder Sofa derives from the combination of diverse</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>fabrics and colours, an asymmetrical shape and</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>charming details.</p>
                </div>
            </div>
        </div>
        <Information/>
        <Footer/>
        </>
    )
}
export default Card1;