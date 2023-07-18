import React from "react";
import "./Navbar.css"

function Navbar(){
    return(
        <>
            <nav class="navbar navbar-expand-lg" style={{fontFamily:"Georgia"}}>
                <a class="navbar-brand" href="/home" style={{color:"black"}}><h1 className="pro" style={{fontSize:"35px",fontWeight:"bolder"}}>Vitra.</h1></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav" style={{fontSize:"20px"}}>
                        <a class="nav-item nav-link" href="/products" style={{marginLeft:"25px",color:"black"}}><h4 className="pro" >Products</h4><span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link" href="/living" style={{marginLeft:"10px",color:"black"}}><h4 className="pro" >Living</h4></a>
                        <a class="nav-item nav-link" href="/professionals" style={{marginLeft:"10px",color:"black"}}><h4 className="pro" >Professionals</h4></a>
                        <a class="nav-item nav-link" href="/about" style={{marginLeft:"10px",color:"black"}}><h4 className="pro" >About Vitra</h4></a>
                        <a class="nav-item nav-link" href="/magazine" style={{marginLeft:"10px",color:"black"}}><h4 className="pro" >Magazine</h4></a>
                        <a class="nav-item nav-link" href="/login" style={{marginLeft:"10px",color:"black"}}><h4 className="pro" >Login</h4></a>
                        <a class="nav-item nav-link " href="#" style={{marginLeft:"450px",color:"black"}}>
                            <h4 className="pro" id="pro1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg></h4>
                        </a>

                        <a class="nav-item nav-link" href="#" style={{marginLeft:"5px",color:"black"}}>
                            <h4 className="pro"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-wrench" viewBox="0 0 16 16">
                                <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z"/>
                            </svg></h4>
                        </a>
                        <a class="nav-item nav-link" href="#" style={{marginLeft:"5px",color:"black"}}>
                            <h4 className="pro"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg></h4>
                        </a>
                        <a class="nav-item nav-link" href="#" style={{marginLeft:"5px",color:"black"}}>
                            <h4 className="pro"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg></h4>
                        </a>
                        <a class="nav-item nav-link" href="#" style={{marginLeft:"5px",color:"black"}}>
                            <h4 className="pro"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg></h4>
                        </a>
                        <a class="nav-item nav-link" href="#" style={{marginLeft:"5px",color:"black"}}>
                            <h4 className="pro"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-globe-americas" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
                            </svg></h4>
                        </a>
                    </div>
                </div>
            </nav>
            <div id="div1" style={{width:"400px",textAlign:"center",marginLeft:"74%"}}>
                <h2>Care & Repair</h2>
                    <p>Resources on service,care & repair that you may find useful</p>
                <button style={{width:"380px",borderRight:"none",borderLeft:"none"}} className="btn btn-outline-dark">More Details</button>
            </div>
        </>
    )
}

export default Navbar;