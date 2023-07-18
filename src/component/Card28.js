import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back2 from "./Back2";

function Card28(){
    return(
        <>
        <Navbar/>
        <Back2/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"20%"}}>
            <div className="row">
                <div className="col-sm-7">
                    <img style={{width:"800px",height:"350px"}} src="https://static.vitra.com/media-resized/7hy4Z2klcT_o9Af0VK5-RHX4a3uQt6LdVzgX_dCSvx4/fill/1440/576/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzMwNDg4NzQvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC80MjkyOTIxNi5qcGc.jpg"></img>
                </div>
                <div className="col-sm-5" style={{paddingLeft:"65px",marginTop:"20px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>Elephant Stool</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Sori Yanagi, 1954</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>As one of the most famous objects of Japanese post-war</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>design, the Elephant Stool was created by the prolific</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>product designer Sori Yanagi. The stackable plastic stool</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>can be used both indoors and outside.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Card28;