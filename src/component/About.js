import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./About.css"

function About(){
    return(
        <>
        <Navbar/>
        <div className="caa" style={{height:"700px"}}>
            <span>
            <video autoPlay muted loop style={{height:"700px",width:"100%",position:"absolute",opacity:"0.9"}} src="https://player.vimeo.com/external/540341969.sd.mp4?s=22834fe3997b5930ab1ac585a05783af6cf97c95&profile_id=164&oauth2_token_id=57447761"></video>
            <p style={{position:"relative",color:"black",fontSize:"40px",fontWeight:"400",letterSpacing:"4px",marginLeft:"70%",top:"300px",width:"250px"}}>About Vitra</p>
            </span>
        </div>
        <div style={{textAlign:"center",marginTop:"5%"}}>
            <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"2px"}}>At Vitra, we believe that environments shape our thoughts and feelings, whether we are at home, at work or</p>
            <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"2px",marginTop:"-10px",marginLeft:"25px"}}>on the go. We work every day to better our surroundings through the power of design. A family business in its</p>
            <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"2px",marginTop:"-10px",marginRight:"268px"}}>third generation, Vitra follows an environmental, cultural and commercial mission.</p>
            <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"2px",marginTop:"50px",marginRight:"20px"}}>The <u>Vitra Campus</u> and the <u>Vitra Design Museum</u> with its exhibitions, design archives and a comprehensive</p>
            <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"2px",marginTop:"-10px",marginRight:"55px"}}>furniture collection inspire visitors and employees alike. They further the understanding of design and</p>
            <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"2px",marginTop:"-10px",marginRight:"585px"}}>architecture‘s role in defining the future we live in.</p>
            <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"2px",marginTop:"50px",marginRight:"17px"}}>Environmental consciousness finds expression in every aspect of Vitra’s work. It is manifested in how Vitra</p>
            <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"2px",marginTop:"-10px",marginLeft:"-10px"}}>develops and manufactures its products, in the sourcing of raw materials and the organisation of its supply</p>
            <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"2px",marginTop:"-10px",marginRight:"285px"}}>chain. Every new insight is regarded as an opportunity for further development.</p>
        </div>
        <div style={{textAlign:"center",marginTop:"80px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-6 img4">
                        <img className="image4" style={{height:"350px",width:"600px"}} src="https://static.vitra.com/media-resized/jWz-MCSmZQz7UNRxX8grjhDSF8affcgsiXreunhTg5A/fill/1440/810/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzU1MTM2NDcvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC82MTAyMTM3MC5qcGc.jpg"></img>
                    </div>
                    <div className="col-6 img4">
                        <img className="image4" style={{height:"350px",width:"600px"}} src="https://static.vitra.com/media-resized/yzz56rmXIC2zVbGF3eQ037CyZCfrPZp6cMEeBzj-rc8/fill/1440/810/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzU1NzYwODgvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC82MTEzNjgwMi5qcGc.jpg"></img>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <p style={{fontWeight:"400",letterSpacing:"2px"}}>Sustainability</p>
                        <p style={{fontWeight:"lighter",color:"#999",letterSpacing:"2px",marginTop:"-15px"}}>Our Philosophy</p>
                    </div>
                    <div className="col-6">
                        <p style={{fontWeight:"400",letterSpacing:"2px"}}>History</p>
                        <p style={{fontWeight:"lighter",color:"#999",letterSpacing:"2px",marginTop:"-15px"}}>Vitra from 1934 to today</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6 img4">
                        <img className="image4" style={{height:"350px",width:"600px"}} src="https://static.vitra.com/media-resized/IOcm_lNpm0DYzxZbBmMhaudkbvfS5HdGE1uunZQ5ZRA/fill/1440/810/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzU2NDQzNjcvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC82MTU2MjExMy5qcGc.jpg"></img>
                    </div>
                    <div className="col-6 img4">
                        <img className="image4" style={{height:"350px",width:"600px"}} src="https://static.vitra.com/media-resized/mX3LAnOtehUWdSuYnX2t6dJF609o6EPUlXUCCZiF2d0/fill/1440/810/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzUxMjg0Mjkvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC81NzY5OTIzNC5qcGc.jpg"></img>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <p style={{fontWeight:"400",letterSpacing:"2px"}}>Design Process</p>
                        <p style={{fontWeight:"lighter",color:"#999",letterSpacing:"2px",marginTop:"-15px"}}>About designers and their collaboration with Vitra</p>
                    </div>
                    <div className="col-6">
                        <p style={{fontWeight:"400",letterSpacing:"2px"}}>Vitra Campus</p>
                        <p style={{fontWeight:"lighter",color:"#999",letterSpacing:"2px",marginTop:"-15px"}}>Production site, architecture, museums and inspiration for your home</p>
                    </div>
                </div>
            </div>
        </div>
        <hr style={{width:"1100px",marginTop:"3%"}}></hr>
        <div style={{textAlign:"center",marginTop:"3%"}}>
            <p style={{fontSize:"40px",letterSpacing:"4px",fontWeight:"lighter"}}>Working at Vitra</p>
            <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"2px",marginTop:"40px"}}>Run as a family business for the past eighty years, Vitra believes in lasting relationships with customers,</p>
            <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"2px",marginTop:"-10px",marginRight:"17px"}}>employees and designers, and stands for durable products, sustainable growth and the power of good</p>
            <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"2px",marginTop:"-10px",marginRight:"995px"}}>design.</p>
            <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"2px",marginTop:"50px",marginLeft:"25px"}}>We value commitment and flexibility. We are looking for passionate employees with agile minds and skilled</p>
            <p style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"2px",marginTop:"-10px",marginLeft:"-610px"}}>hands to help us achieve our company goals.</p>
            <button className="btn btn-outline-dark" style={{width:"250px",borderTop:"2px solid black",borderBottom:"2px solid black",borderRight:"none",borderLeft:"none",borderRadius:"0px",height:"50px",letterSpacing:"2px",marginTop:"30px"}}>MORE DETAILS</button>
        </div>
        <div style={{textAlign:"center",paddingBottom:"80px"}}>
            <p style={{fontSize:"40px",letterSpacing:"4px",fontWeight:"lighter",marginTop:"4%"}}>More Information</p>
            <div className="container" style={{marginTop:"30px"}}>
                <div className="row">
                    <div className="col-4 img4">
                        <img className="image4" style={{height:"230px",width:"360px"}} src="https://static.vitra.com/media-resized/hOQuU6DCZLpzQT5CUMp_yPE9BakkyejxkcwdJ2xE-4A/fill/700/525/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzQxMjE4ODUvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC81MzM2MTc0MC5qcGc.jpg"></img>
                    </div>
                    <div className="col-4 img4">
                        <img className="image4" style={{height:"230px",width:"360px"}} src="https://static.vitra.com/media-resized/aiZYna3aLQSgLKfz0OvZKVTTyEhIE48j4BejfKdZV5I/fill/700/525/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzM2MDE4Mzgvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC80ODQyMjE5OC5qcGc.jpg"></img>
                    </div>
                    <div className="col-4 img4">
                        <img className="image4" style={{height:"230px",width:"360px"}} src="https://static.vitra.com/media-resized/-xJP_fgUZXjq_6wIbjCiiN4qYjtl8ljmi15ByuXlu-g/fill/700/525/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzE1MjUxOTYvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC8xNjU1MzY4MC5qcGc.jpg"></img>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <p style={{letterSpacing:"2px"}}>News</p>
                    </div>
                    <div className="col-4">
                        <p style={{letterSpacing:"2px"}}>Original</p>
                    </div>
                    <div className="col-4">
                        <p style={{letterSpacing:"2px"}}>Designers & Architects</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default About;