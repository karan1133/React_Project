import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Home.css"
import "./Navbar.css"
import "./Products.css"
function Home(){
    return(
        <>
            <Navbar/>
            <div className="cdv">
                {/* <p style={{fontSize:"45px",letterSpacing:"2px",fontWeight:"lighter",color:"white",fontWeight:"400"}}>HAL RE</p>
                <p className="abh" style={{fontSize:"20px",letterSpacing:"2px",marginTop:"-10px",marginLeft:"50px",color:"white",marginTop:"20px"}}>HAL is now also available in the version HAL RE with seat shells made of </p>
                <p className="abh" style={{fontSize:"20px",letterSpacing:"2px",marginTop:"-10px",marginLeft:"50px",color:"white"}}>recycled plastic – as side chairs or armchairs.</p> */}
            </div>
            <div>
                <div className="container" style={{marginTop:"50px"}}>
                    <div className="row">
                        <div className="col-6" style={{marginLeft:"-50px"}}>
                            <div className="img1" style={{width:"600px",height:"350px"}}>
                                <img style={{width:"600px",height:"350px"}} className="img-fluid" src="https://static.vitra.com/media-resized/bfonwyIM-mDjkbJDKWlsHQ5oaNpnT6XvaDLbvmqSjU8/fill/1440/810/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0Lzc0ODc3Mzgvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83NzQ0NTAyOS5qcGc.jpg"></img>
                            </div>
                            <div className="pro"> 
                                <a style={{cursor:"pointer"}}>
                                    <h4 style={{textAlign:"center",fontSize:"18px",marginTop:"10px"}}>HAL RE Tube</h4>
                                    <h5 style={{textAlign:"center",fontSize:"14px",color:"#999"}}>Living</h5>
                                </a>
                            </div>
                        </div>
                        <div className="col-6" style={{marginLeft:"50px"}}>
                            <div className="img1" style={{width:"600px",height:"350px"}}>
                                <img style={{width:"600px",height:"350px"}} className="img-fluid" src="https://static.vitra.com/media-resized/faJyS65_AkmQk3S-gA6fUFmPmVjs7bMVtQVlH0SScfc/fill/1440/810/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzczMzY2NzIvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83NzUyMTkwMS5qcGc.jpg"></img>
                            </div>
                            <div className="pro" style={{marginLeft:"50px"}}> 
                                <a style={{cursor:"pointer"}}>
                                    <h4 style={{textAlign:"center",fontSize:"18px",marginTop:"10px"}}>Vitra Sessions</h4>
                                    <h5 style={{textAlign:"center",fontSize:"14px",color:"#999"}}>Professionals</h5>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{marginTop:"50px"}}>
                    <div className="row">
                        <div className="col-6" style={{marginLeft:"-50px"}}>
                            <div className="img1" style={{width:"600px",height:"350px"}}>
                                <img style={{width:"600px",height:"350px"}} className="img-fluid" src="https://static.vitra.com/media-resized/P_EAF_9kQggN2epHga0C8x5kRZI5A9cm0EFRfhcPUXM/fill/1440/810/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0Lzc1OTI1NjAvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83NzUyMjE5Ny5qcGc.jpg"></img>
                            </div>
                            <div className="pro"> 
                                <a style={{cursor:"pointer"}}>
                                    <h4 style={{textAlign:"center",fontSize:"18px",marginTop:"10px"}}>Nuage abstrait limited edition</h4>
                                    <h5 style={{textAlign:"center",fontSize:"14px",color:"#999"}}>New Products</h5>
                                </a>
                            </div>
                        </div>
                        <div className="col-6" style={{marginLeft:"50px"}}>
                            <div className="img1" style={{width:"600px",height:"350px"}}>
                                <img style={{width:"600px",height:"350px"}} className="img-fluid" src="https://static.vitra.com/media-resized/KWqFeDe5gHhQEjHCeKh031BRF3GcMlt16OfL1Sgzqrs/fill/1440/810/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0Lzc0ODgxMzEvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83NzQ0NTQ4My5qcGc.jpg"></img>
                            </div>
                            <div className="pro" style={{marginLeft:"50px"}}> 
                                <a style={{cursor:"pointer"}}>
                                    <h4 style={{textAlign:"center",fontSize:"18px",marginTop:"10px"}}>Panton Chair</h4>
                                    <h5 style={{textAlign:"center",fontSize:"14px",color:"#999"}}>Living</h5>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{height:"500px",width:"100%",textAlign:"center",paddingTop:"190px"}} className="abc">
                    <p style={{fontSize:"45px",fontWeight:"lighter"}}>Quickly Available</p>
                    <button className="btn btn-outline-dark" style={{width:"250px",borderTop:"2px solid black",borderBottom:"2px solid black",borderRight:"none",borderLeft:"none",borderRadius:"0px"}}>To The Products</button>
                </div>
                <div className="container" style={{marginTop:"50px"}}>
                    <div className="row">
                        <div className="col-6" style={{marginLeft:"-50px"}}>
                            <div className="img1" style={{width:"600px",height:"350px"}}>
                                <img style={{width:"600px",height:"350px"}} className="img-fluid" src="https://static.vitra.com/media-resized/u-0AxEUvcp_7RfgTOxlos3NPd6jpVN0Xj7TX65AvJdo/fill/1440/810/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzUzNDA0NzQvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC81ODk1ODU3NC5qcGc.jpg"></img>
                            </div>
                            <div className="pro"> 
                                <a style={{cursor:"pointer"}}>
                                    <h4 style={{textAlign:"center",fontSize:"18px",marginTop:"10px"}}>Club Office</h4>
                                    <h5 style={{textAlign:"center",fontSize:"14px",color:"#999"}}>Professionals</h5>
                                </a>
                            </div>
                        </div>
                        <div className="col-6" style={{marginLeft:"50px"}}>
                            <div className="img1" style={{width:"600px",height:"350px"}}>
                                <img style={{width:"600px",height:"350px"}} className="img-fluid" src="https://static.vitra.com/media-resized/NWg4trGXDIFYAZk46DE0Qgq7WGYPMvR6qqXJiadeusE/fill/1440/810/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzYyMTA3OTcvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC82NzYzNjQ1MC5qcGc.jpg"></img>
                            </div>
                            <div className="pro" style={{marginLeft:"50px"}}> 
                                <a style={{cursor:"pointer"}}>
                                    <h4 style={{textAlign:"center",fontSize:"18px",marginTop:"10px"}}>Comma</h4>
                                    <h5 style={{textAlign:"center",fontSize:"14px",color:"#999"}}>Professionals</h5>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Home;