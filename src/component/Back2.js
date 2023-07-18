import React from "react";

function Back2(){
    return(
        <>
        <a href="/products2" style={{textDecoration:"none"}}>
        <div style={{backgroundColor:"",width:"100%",height:"50px",display:"flex",marginLeft:"20px"}}>
        <svg style={{marginTop:"15px",color:"black"}} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
        <p style={{fontSize:"20px",marginTop:"8px",letterSpacing:"1px",fontWeight:"500",color:"black"}}>Back</p>
        </div>
        </a>
        </>
    )
}
export default Back2;