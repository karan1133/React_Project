import React from "react";  
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back from "./Back";

function Card13(){
    return(
        <>
        <Navbar/>
        <Back/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"20%"}}>
            <div className="row">
                <div className="col-7">
                    <img style={{width:"900px",height:"350px"}} src="https://static.vitra.com/media-resized/s_22VgE6Fi6S05q8ncxjOl0qZgVYNV0TTkjitrRj2ic/fill/1440/576/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzIzOTI3OTMvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC8zMzA3NTcwMS5qcGc.jpg"></img>
                </div>
                <div className="col-5" style={{paddingLeft:"65px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>Toolbox RE</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Arik Levy, 2010</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>Toolbox RE is a practical organiser for storing and</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>transporting small work utensils and accessories. It is</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>made of recycled plastic from industrial waste - and at</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>the end of its product lifespan, it is also 100% recyclable.</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>Toolbox RE is available in a selection of colours.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Card13;