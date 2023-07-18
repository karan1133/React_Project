import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back3 from "./Back3";

function Card42(){
    return(
        <>
        <Navbar/>
        <Back3/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"20%"}}>
            <div className="row">
                <div className="col-sm-7">
                    <img style={{width:"800px",height:"350px"}} src="https://static.vitra.com/media-resized/HNTR0MmSfzCQjEQpRk-H48jeOqX-Okcyx6guoBdDTqg/fill/1440/576/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzIyOTc0MTcvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC8zMTM1MTEwOC5qcGc.jpg"></img>
                </div>
                <div className="col-sm-5" style={{paddingLeft:"65px",marginTop:"-10px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>.04 beam seating</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Maarten Van Severen, 2000</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>The great comfort of .04 is first revealed upon use. The</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>flexible seat shell made of sturdy integral foam provides</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>optimal support, assisted by the integrated leaf springs in</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>the backrest. Mounted on cross beams, the .04 bench</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>units are ideally suited to serve as modular furniture in</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>waiting areas.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Card42;