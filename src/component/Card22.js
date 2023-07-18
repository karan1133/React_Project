import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back2 from "./Back2";

function Card22(){
    return(
        <>
        <Navbar/>
        <Back2/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"20%"}}>
            <div className="row">
                <div className="col-7">
                    <img style={{width:"800px",height:"350px"}} src="https://static.vitra.com/media-resized/UZXVQZWWkkqwZPvJ_Lv7c2RMwosZSWNc0yYxtVEY9NY/fill/1440/501/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzEzNjQ4NDEvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC80MjkyMDk2My5qcGc.jpg"></img>
                </div>
                <div className="col-5" style={{paddingLeft:"65px",marginTop:"-30px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>Coffee Table</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Isamu Noguchi, 1944</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>In creating his design for the Coffee Table, Isamu</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>Noguchi translated the biomorphic aesthetic of his</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>sculptural works into a piece of furniture with distinctive</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>organic forms. Presumably for this reason, Noguchi</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>regarded the table as his best furniture design. Two</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>wooden leg elements, which are available in black ash,</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>maple or walnut, are positioned at a right angle to</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>provide a stable support for the heavy, sturdy glass top.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Card22;