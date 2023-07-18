import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Back from "./Back";

function Card2(){
    return(
        <>
        <Navbar/>
        <Back/>
        <div className="container-fluid" style={{marginTop:"10%"}}>
            <div className="row">
                <div className="col-7">
                    <img style={{width:"900px",height:"350px",marginLeft:"50px"}} src="https://static.vitra.com/media-resized/bFTw4pr14T24AyI6xaYoehZM1-EC0JtjIUej5Ao6nUM/fill/1440/576/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0Lzc1MjEzOTcvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83NzQ3MDg1OC5qcGc.jpg"></img>
                </div>
                <div className="col-5" style={{paddingLeft:"65px",marginTop:"50px"}}>
                    <p style={{fontSize:"50px",letterSpacing:"0px"}}>Terracotta Pot, medium</p>
                    <p style={{color:"#999",fontSize:"23px",marginTop:"-15px",letterSpacing:"2px"}}>Thelonious Goupil, 2023</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px"}}>The column-like forms of the different sized Terracotta</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>Pots serve as pedestals for the plants they hold, elevating</p>
                    <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"1px",marginTop:"-13px"}}>them and giving them more presence in the room.</p>
                </div>
            </div>
        </div>
        <div>
        <center><h2 style={{fontFamily:"Georgia"}}>Information</h2></center>
        <p className='demo' style={{marginLeft:"170px",fontSize:"18px",fontWeight:"600",letterSpacing:"1px",fontFamily:"Georgia"}}>Colours and materials</p>
        <div style={{marginLeft:"7%",border:"2px solid lightgray",padding:"20px",marginTop:"-10px",fontFamily:"Georgia"}}>
            <div>
                <p style={{fontWeight:"600"}}>Terracotta</p>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2" style={{textAlign:"center"}}>
                        <img src="https://static.vitra.com/media-resized/8lU66DN54lhxNFofomWLcZ72t3-tjtcniDqKATucgn8/fill/150/150/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzY2NDc4MDMvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83NDcwODEwMS5qcGc.jpg"></img>
                        <p>terracotta, natural clay</p>
                    </div>
                </div>
            </div>
            <div style={{paddingBottom:"50px"}}>
                <p style={{marginTop:"20px",fontWeight:"600",letterSpacing:"1px",fontSize:"18px"}}>Material Description</p>
                <ul>
                    <li style={{fontSize:"17px"}}><span style={{fontWeight:"600",paddingRight:"10px"}}>Material:</span><span>100% terracotta, glazed finish on the inside, with drainage hole.</span></li>
                </ul>
            </div>
        </div>
        </div>
        <Footer/>
        </>
    )
}
export default Card2;