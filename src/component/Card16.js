import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back from "./Back";

function Card16(){
    return(
        <>
        <Navbar/>
        <Back/>
        <div className="container-fluid" style={{marginTop:"10%",paddingBottom:"20%"}}>
            <div className="row">
                <div className="col-7">
                    <img style={{width:"900px",height:"350px"}} src="https://static.vitra.com/media-resized/bYs4InT92jAUO7g3Yk9jg63b4yIYE6e-J204NUNPY0Q/fill/1440/576/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzY1Mjc3NzMvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83Mjg4MDkxMS5qcGc.jpg"></img>
                </div>
                <div className="col-5" style={{paddingLeft:"65px",marginTop:"-30px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"2px"}}>Locker Box, small</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Konstantin Grcic, 2022</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>Lightweight and easy to handle, the small Locker Box</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>supports agile work routines in the office and when</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>working from home. Thanks to this practical portable</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>caddy, work utensils such as laptop, keyboard, papers,</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>pens, cables, hard drives, headphones etc. are always at</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>hand and can be simply stored away at the end of the</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>day.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Card16;