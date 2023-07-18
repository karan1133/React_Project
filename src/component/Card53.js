import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back4 from "./Back4";

function Card53(){
    return(
        <>
        <Navbar/>
        <Back4/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"20%"}}>
            <div className="row">
                <div className="col-sm-7">
                    <img style={{width:"800px",height:"350px"}} src="https://static.vitra.com/media-resized/JfSQrRhlW4sNq5nXg4KbjpMvr9tsx6QhpFSrL1WRMOI/fill/1440/541/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzE2MDA0MTQvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC8xODg2NDkyMS5qcGc.jpg"></img>
                </div>
                <div className="col-sm-5" style={{paddingLeft:"65px",marginTop:"40px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>Wooden Doll No. 5</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Alexander Girard, 1952</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>Alexander Girard originally created the Wooden Dolls</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>(1952), a whimsical assortment of figures both joyful and</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>grim, for his own home. Today they add a charming touch</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>to any interior.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Card53;