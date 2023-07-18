import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Magazine.css"

function Magazine(){
    return(
        <>
        <Navbar/>
        <div className="daa">
            <p style={{color:"black",fontSize:"40px",fontWeight:"lighter",letterSpacing:"4px"}}>Magazine</p>
        </div>
        <div style={{paddingTop:"8%",textAlign:"center"}}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3" >
                        <a href="/card65">
                        <img style={{width:"360px",height:"230px"}} src="https://static.vitra.com/media-resized/PP505pO1_xkL_WRRQyVci1_5Uny4hN-9Dy3-58m_X-0/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzEzMTE3MTIvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC8xNTcwNzg2OC5qcGc.jpg"></img>
                        <p style={{fontWeight:"400",letterSpacing:"2px"}}>Project Vitra</p>
                        <p style={{fontWeight:"lighter",color:"#999",letterSpacing:"2px",marginTop:"-15px"}}>Rolf Fehlbaum</p>
                        </a>
                    </div>
                    <div className="col-3">
                        <a href="/card66">
                        <img style={{width:"360px",height:"230px"}} src="https://static.vitra.com/media-resized/mJ-QFVBJii2N5eZb7EDSkPirSmsajxUwaAjL60K2pog/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzY5NjkxNzcvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83NjY3MDA5MC5qcGc.jpg"></img>
                        <p style={{fontWeight:"400",letterSpacing:"2px"}}>Design is a highly political profession</p>
                        <p style={{fontWeight:"lighter",color:"#999",letterSpacing:"2px",marginTop:"-15px"}}>A talk with curator Amelie Klein</p>
                        </a>
                    </div>
                    <div className="col-3">
                        <img style={{width:"360px",height:"230px"}} src="https://static.vitra.com/media-resized/kmUYGMvUicmb4BwMbODZ2O7n5k2nU4S27h71CrSxkpA/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzY4Mzc4MzAvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83NjQ1NTY1MC5qcGc.jpg"></img>
                        <p style={{fontWeight:"400",letterSpacing:"2px"}}>Wooden Dolls</p>
                        <p style={{fontWeight:"lighter",color:"#999",letterSpacing:"2px",marginTop:"-15px"}}>By Aleish Girard Maxon</p>
                    </div>
                    <div className="col-3">
                        <img style={{width:"360px",height:"230px"}} src="https://static.vitra.com/media-resized/J2sIqrTPWj7CsUOr6x-1eBz9GTN0mHToBAjZYd84IYI/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzY3MTk3MjIvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83NTI1NTE4MC5qcGc.jpg"></img>
                        <p style={{fontWeight:"400",letterSpacing:"2px"}}>Jean Prouve</p>
                        <p style={{fontWeight:"lighter",color:"#999",letterSpacing:"2px",marginTop:"-15px"}}>A Vitra anecdote on prouve colours</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{marginTop:"50px"}}>
                <div className="row">
                    <div className="col-3" >
                        <img style={{width:"360px",height:"230px"}} src="https://static.vitra.com/media-resized/869g-h1GSmVKXLbqMX3s9Z34_C66UdnNT2rMQe7xAEM/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzY1ODQ0MTMvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83MzI0Njg0MS5qcGc.jpg"></img>
                        <p style={{fontWeight:"400",letterSpacing:"2px"}}>You can learn a lot from bees</p>
                        <p style={{fontWeight:"lighter",color:"#999",letterSpacing:"2px",marginTop:"-15px"}}>The bees on  the Vitra Campus</p>
                    </div>
                    <div className="col-3">
                        <img style={{width:"360px",height:"230px"}} src="https://static.vitra.com/media-resized/7FFCdmOOn7rRxV0AZGbOJlUtmxGmyHsl6sGSsObnuow/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzY1NTAyOTcvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83Mjk1ODk5MC5qcGc.jpg"></img>
                        <p style={{fontWeight:"400",letterSpacing:"2px"}}>The Maison Jean Prouve</p>
                        <p style={{fontWeight:"lighter",color:"#999",letterSpacing:"2px",marginTop:"-15px"}}>An interview with Catherine prouve</p>
                    </div>
                    <div className="col-3">
                        <img style={{width:"360px",height:"230px"}} src="https://static.vitra.com/media-resized/sqda-q69QCGplUWN18SUbLB_eg-nOlyzFPaH2sGGSEc/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzY0OTkzMjQvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83Mjc4NTQ0OS5qcGc.jpg"></img>
                        <p style={{fontWeight:"400",letterSpacing:"2px"}}>I like to  leave room for interpretation</p>
                        <p style={{fontWeight:"lighter",color:"#999",letterSpacing:"2px",marginTop:"-15px"}}>A conversation with Sabine Marcelis</p>
                    </div>
                    <div className="col-3">
                        <img style={{width:"360px",height:"230px"}} src="https://static.vitra.com/media-resized/AekU8rqabuuu_R2wHEow8MenaqOUAVldqcisgSHdv3g/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzY0NTgyMjYvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83MjQyMTAzMS5qcGc.jpg"></img>
                        <p style={{fontWeight:"400",letterSpacing:"2px"}}>Soft Wait - make the wait pleasant</p>
                        <p style={{fontWeight:"lighter",color:"#999",letterSpacing:"2px",marginTop:"-15px"}}>Interview with Barber Osgerby</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{marginTop:"50px"}}>
                <div className="row">
                    <div className="col-3" >
                        <img style={{width:"360px",height:"230px"}} src="https://static.vitra.com/media-resized/VX7LJN98UlKWSVjJYpj2_Y1ujQdDK-s9PBgwzgoqoh8/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzYzODM1MDgvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83MTc2MjgxMS5qcGc.jpg"></img>
                        <p style={{fontWeight:"400",letterSpacing:"2px"}}>Fauteuil Kangourou - a beloved favourite</p>
                        <p style={{fontWeight:"lighter",color:"#999",letterSpacing:"2px",marginTop:"-15px"}}>A Vitra Anecdote</p>
                    </div>
                    <div className="col-3">
                        <img style={{width:"360px",height:"230px"}} src="https://static.vitra.com/media-resized/LlpuMP3GGHue-4OHlweDXKFpe4i9cSssCQz1bC2fb34/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzY0MTUwMTUvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83MjAzNTA3OC5qcGc.jpg"></img>
                        <p style={{fontWeight:"400",letterSpacing:"2px"}}>The Jean Prouve collection at the Vitra Design Museum</p>
                        <p style={{fontWeight:"lighter",color:"#999",letterSpacing:"2px",marginTop:"-15px"}}>An interview with Serge Mauduit, Collection Curator</p>
                    </div>
                    <div className="col-3">
                        <img style={{width:"360px",height:"230px"}} src="https://static.vitra.com/media-resized/OCKJQ4RaxImjrXJbRcKjF4nSUiZm-2axZ-6BqUTClHo/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzYzODYwMTUvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83MTc5NzY3OS5qcGc.jpg"></img>
                        <p style={{fontWeight:"400",letterSpacing:"2px"}}>Every day something new happens</p>
                        <p style={{fontWeight:"lighter",color:"#999",letterSpacing:"2px",marginTop:"-15px"}}>Manfred Diebold, Rolf Fehlbaum and Thomas Schweikert in conversation with Jochen Eisenbrand</p>
                    </div>
                    <div className="col-3">
                        <img style={{width:"360px",height:"230px"}} src="https://static.vitra.com/media-resized/cyUVpOyeyNTcr_cVlVX-aa3Q3v_kbpo3xaVR3HeLGqI/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzYzMDYwMjgvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC82ODYwNTMxNS5qcGc.jpg"></img>
                        <p style={{fontWeight:"400",letterSpacing:"2px"}}>The dream of living wild</p>
                        <p style={{fontWeight:"lighter",color:"#999",letterSpacing:"2px",marginTop:"-15px"}}>Oudolf Garten</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{marginTop:"50px"}}>
                <div className="row">
                    <div className="col-3" >
                        <img style={{width:"360px",height:"230px"}} src="https://static.vitra.com/media-resized/VW2l9zqQVzSp5u5jw6pLgtKoYLDhnj2we1m1nUSxA7o/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzYxMTc4Njcvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC82NzE1NTU0Mi5qcGc.jpg"></img>
                        <p style={{fontWeight:"400",letterSpacing:"2px"}}>I had complete creative freedom</p>
                        <p style={{fontWeight:"lighter",color:"#999",letterSpacing:"2px",marginTop:"-15px"}}>Here We Are! Women in Design 1900 - Today</p>
                    </div>
                    <div className="col-3">
                        <img style={{width:"360px",height:"230px"}} src="https://static.vitra.com/media-resized/SGPKl08r7aaiyNtb9ICLu5hCmoSOQgfWS_T9X2Nph-0/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzYwMzc3NjIvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC82NjY3MDQ1NC5qcGc.jpg"></img>
                        <p style={{fontWeight:"400",letterSpacing:"2px"}}>Colouring a new world</p>
                        <p style={{fontWeight:"lighter",color:"#999",letterSpacing:"2px",marginTop:"-15px"}}>Verner Panton</p>
                    </div>
                    <div className="col-3">
                        <img style={{width:"360px",height:"230px"}} src="https://static.vitra.com/media-resized/M7eBaOjLmBOz0jZRMgENsVHhl272PWXUMa57UHcaQ2E/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzU5NzExMTkvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC82NjM5MTQ0MC5qcGc.jpg"></img>
                        <p style={{fontWeight:"400",letterSpacing:"2px"}}>Many things simply just happened</p>
                        <p style={{fontWeight:"lighter",color:"#999",letterSpacing:"2px",marginTop:"-15px"}}>A conversation with Rolf Fehlbaum</p>
                    </div>
                    <div className="col-3">
                        <img style={{width:"360px",height:"230px"}} src="https://static.vitra.com/media-resized/LO9DlQx-8Ma7LJlNxF9_3r8oy4pnYCw6MPnITr5zKEw/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzU4MjE4ODIvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC82NTM4MzgyOC5qcGc.jpg"></img>
                        <p style={{fontWeight:"400",letterSpacing:"2px"}}>Letting the idea grow</p>
                        <p style={{fontWeight:"lighter",color:"#999",letterSpacing:"2px",marginTop:"-15px"}}>The HAl chair family has gained a new member</p>
                    </div>
                </div>
            </div>
        </div>
       
        <Footer/>
        </>
    )
}
export default Magazine;