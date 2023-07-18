import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back2 from "./Back2";

function Card29(){
    return(
        <>
        <Navbar/>
        <Back2/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"20%"}}>
            <div className="row">
                <div className="col-sm-7">
                    <img style={{width:"800px",height:"350px"}} src="https://static.vitra.com/media-resized/WeKhcJ6UNq4T9JN3IbSnu3ZcZamaufGV6L4hchoz0f8/fill/1440/576/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzE5MzM1Nzkvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC80MzAxNTIxNy5qcGc.jpg"></img>
                </div>
                <div className="col-sm-5" style={{paddingLeft:"65px",marginTop:"90px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>Ottoman</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Antonio Citterio, 2011</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>As a companion piece for Repos and Grand Repos, the</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>Ottoman enhances the extraordinary comfort of these</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>lounge chairs by allowing users to put their feet up and</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>relax.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Card29;