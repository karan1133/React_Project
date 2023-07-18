import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back3 from "./Back3";

function Card43(){
    return(
        <>
        <Navbar/>
        <Back3/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"20%"}}>
            <div className="row">
                <div className="col-sm-7">
                    <img style={{width:"800px",height:"350px"}} src="https://static.vitra.com/media-resized/FTj_0Y3aqJKwDi92Hr6khxCgQY37pKDm2DQvET9yzMM/fill/1440/576/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzI1NzA5OTkvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC8zODI2MDE3Mi5qcGc.jpg"></img>
                </div>
                <div className="col-sm-5" style={{paddingLeft:"65px",marginTop:"-40px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>WorKit meeting tables</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Arik Levy, 2008</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>In combination with WorKit workstations, the WorKit</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>meeting tables lend a unified appearance to the entire</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>office space. Thanks to the understated design of the</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>tables, they can also be used together with other</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>furniture types and complement a wide variety of office</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>environments and interior concepts. The WorKit meeting</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>tables are available in three sizes for 8 to 12 people, with</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>or without electrification and with melamine or veneer</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>table tops.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Card43;