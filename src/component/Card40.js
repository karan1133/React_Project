import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back3 from "./Back3";

function Card40(){
    return(
        <>
        <Navbar/>
        <Back3/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"20%"}}>
            <div className="row">
                <div className="col-sm-7">
                    <img style={{width:"800px",height:"350px"}} src="https://static.vitra.com/media-resized/a7w8D6NOfNGUO-CC2qcPKr9zcGqxDzf1fwl_7QdTrjU/fill/1440/576/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzE1NDM4NTUvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC80MzY2MDA3NC5qcGc.jpg"></img>
                </div>
                <div className="col-sm-5" style={{paddingLeft:"65px",marginTop:"-25px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>Pivot High Stool</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Antonio Citterio, 2012</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>As Pivot is 30 cm taller than a standard office chair, it is</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>designed for use with standing-height tables. This</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>encourages a healthy and spontaneous alternation</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>between standing and sitting. Details such as the height-</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>adjustable foot ring, reverse-brake castors and non-slip</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>fabric cover are all designed to facilitate regular changes</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>in work posture.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Card40;