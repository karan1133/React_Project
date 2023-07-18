import React from "react";  
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Products.css"

function Products(){
    return(
        <>
            <Navbar/>
            <div className="abg">
                <p style={{fontSize:"45px",letterSpacing:"2px",fontWeight:"lighter",color:"white",fontWeight:"400"}}>Products</p>
                <p className="abh" style={{fontSize:"20px",letterSpacing:"2px",marginTop:"-10px",marginLeft:"50px",color:"white",marginTop:"20px"}}>The Vitra Home Collection encompasses classic and contemporary furniture,</p>
                <p className="abh" style={{fontSize:"20px",letterSpacing:"2px",marginTop:"-10px",marginLeft:"50px",color:"white"}}>lighting and accessories for private interiors.</p>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3" style={{textAlign:"center"}}>
                        <a href="/card1" style={{textDecoration:"none"}}>
                            <img style={{height:"250px",width:"320px"}} src="https://static.vitra.com/media-resized/Q7V80VgPJRWJWAGSfyXYyc-JM-z7-eL7cBFnIOHgOVE/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzY1ODQ0ODUvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83MzI0NzEzOC5qcGc.jpg"></img>
                            <p style={{fontWeight:"600",letterSpacing:"2px"}}>Polder Sofa</p>
                            <p style={{letterSpacing:"2px",marginTop:"-12px"}}>Hella Jongerius</p>
                        </a>
                    </div>
                    <div className="col-sm-3" style={{textAlign:"center"}}>
                        <a href="/card2" style={{textDecoration:"none"}}>
                            <img style={{height:"250px",width:"320px"}} src="https://static.vitra.com/media-resized/Bw936DiM9dLbmOUUOi7iBwCZrT2wGtar7Bu3c0iZ3pk/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0Lzc1MjIxOTYvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83NzQ3MDk3MS5qcGc.jpg"></img>
                            <p style={{fontWeight:"600",letterSpacing:"2px"}}>Terracotta Pot, medium</p>
                            <p style={{letterSpacing:"2px",marginTop:"-12px"}}>Thelonious Goupil</p>
                        </a>
                    </div>
                    <div className="col-sm-3" style={{textAlign:"center"}}>
                        <a href="/card3" style={{textDecoration:"none"}}>
                            <img style={{height:"250px",width:"320px"}} src="https://static.vitra.com/media-resized/n01TmrMrNYO1exh7Ja5xUjTLxihIenNTrO6B-FjY5NI/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzcwOTM2OTMvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83NzEwMDY4NS5qcGc.jpg"></img>
                            <p style={{fontWeight:"600",letterSpacing:"2px"}}>HAL RE Tube</p>
                            <p style={{letterSpacing:"2px",marginTop:"-12px"}}>Josper Morrison</p>
                        </a>
                    </div>
                    <div className="col-sm-3" style={{textAlign:"center"}}>
                        <a href="/card4" style={{textDecoration:"none"}}>
                            <img style={{height:"250px",width:"320px"}} src="https://static.vitra.com/media-resized/UEgIRhAicx69au4hOxzQ6F9gXjPTNA8RZGJQXQFozWk/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0Lzc1OTg5MTIvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83NzUyOTg3Mi5qcGc.jpg"></img>
                            <p style={{fontWeight:"600",letterSpacing:"2px"}}>Soft Seats Outdoor</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3" style={{textAlign:"center"}}>
                        <a href="/card5" style={{textDecoration:"none"}}>
                        <img style={{height:"250px",width:"320px"}} src="https://static.vitra.com/media-resized/poWygnd7IQLq1Nb6-aRozqFhf5ab9QcJ0etcZZ5JVzw/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzU4MDgxMDQvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC82NTI4ODc5Ny5qcGc.jpg"></img>
                        <p style={{fontWeight:"600",letterSpacing:"2px"}}>HAL Lounge Chair & Ottoman</p>
                        <p style={{letterSpacing:"2px",marginTop:"-12px"}}>Jasper Morrison</p>
                        </a>
                    </div>
                    <div className="col-sm-3" style={{textAlign:"center"}}>
                        <a href="/card6" style={{textDecoration:"none"}}>
                        <img style={{height:"250px",width:"320px"}} src="https://static.vitra.com/media-resized/vg_6rlz-UtxoCWm_XBM8BvI0GSvpSoTCZqSs09S0of0/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzYzMjgxNTkvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC82OTc2NDA3Ni5qcGc.jpg"></img>
                        <p style={{fontWeight:"600",letterSpacing:"2px"}}>Fauteuil Kangourou</p>
                        <p style={{letterSpacing:"2px",marginTop:"-12px"}}>Jean Prouve</p>
                        </a>
                    </div>
                    <div className="col-sm-3" style={{textAlign:"center"}}>
                        <a href="/card7" style={{textDecoration:"none"}}>
                        <img style={{height:"250px",width:"320px"}} src="https://static.vitra.com/media-resized/oxymZW275fN7h1rf7A1PHP1GzIzCrXbpc5Tp_HB9l-8/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzY0MTg5OTEvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83NDc5OTY0MS5qcGc.jpg"></img>
                        <p style={{fontWeight:"600",letterSpacing:"2px"}}>Abalon Sofa</p>
                        <p style={{letterSpacing:"2px",marginTop:"-12px"}}>Ronan & Erwan Bouroullec</p>
                        </a>
                    </div>
                    <div className="col-sm-3" style={{textAlign:"center"}}>
                        <a href="/card8" style={{textDecoration:"none"}}>
                        <img style={{height:"250px",width:"320px"}} src="https://static.vitra.com/media-resized/xmT-u4f7AaH3KhpMg1g6WmcMsmHon40hXr3O7fij8r8/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0Lzc1NjgxMzQvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83NzUxMzIxMS5qcGc.jpg"></img>
                        <p style={{fontWeight:"600",letterSpacing:"2px"}}>Nuage Abstrait</p>
                        <p style={{letterSpacing:"2px",marginTop:"-12px"}}>Ronan & Erwan Bouroullec</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3" style={{textAlign:"center"}}>
                        <a href="/card9" style={{textDecoration:"none"}}>
                        <img style={{height:"250px",width:"320px"}} src="https://static.vitra.com/media-resized/yujw_MpC5ie01EgKTJAYuQPqTZmEk5OiuWMITG7nXCg/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzY1NTU2ODYvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83Mjk3MjM1MS5qcGc.jpg"></img>
                        <p style={{fontWeight:"600",letterSpacing:"2px"}}>Petite Potence</p>
                        <p style={{letterSpacing:"2px",marginTop:"-12px"}}>Jean Prouve</p>
                        </a>
                    </div>
                    <div className="col-sm-3" style={{textAlign:"center"}}>
                        <a href="/card10" style={{textDecoration:"none"}}>
                        <img style={{height:"250px",width:"320px"}} src="https://static.vitra.com/media-resized/TUhUpnQ_HVZLbsy7N_dh9bSwkJ7zeFuH9Fajpjifrek/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzY1Mjk5Njcvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83Mjg5MTM5MS5qcGc.jpg"></img>
                        <p style={{fontWeight:"600",letterSpacing:"2px"}}>Fauteuil de Salon</p>
                        <p style={{letterSpacing:"2px",marginTop:"-12px"}}>Jean Prouve</p>
                        </a>
                    </div>
                    <div className="col-sm-3" style={{textAlign:"center"}}>
                        <a href="/card11" style={{textDecoration:"none"}}>
                        <img style={{height:"250px",width:"320px"}} src="https://static.vitra.com/media-resized/NO92B9bsAi08GIK36bBOHiMes00A-QnyP-216lRxEo8/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzY1MzQzMzgvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83MjkwMDk4My5qcGc.jpg"></img>
                        <p style={{fontWeight:"600",letterSpacing:"2px"}}>Standard</p>
                        <p style={{letterSpacing:"2px",marginTop:"-12px"}}>Ronan & Erwan Bouroullec</p>
                        </a>
                    </div>
                    <div className="col-sm-3" style={{textAlign:"center"}}>
                        <a href="/card12" style={{textDecoration:"none"}}>
                        <img style={{height:"250px",width:"320px"}} src="https://static.vitra.com/media-resized/93ZqEcIjCqHFaEGTkTR2Av-YuyF2oWTh6Nmv-XfTSnk/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzM0MDcyNzMvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC80NzQ2NDE0Ny5qcGc.jpg"></img>
                        <p style={{fontWeight:"600",letterSpacing:"2px"}}>grand Relax & Ottoman</p>
                        <p style={{letterSpacing:"2px",marginTop:"-12px"}}>Antonio Citterio</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3" style={{textAlign:"center"}}>
                        <a href="/card13" style={{textDecoration:"none"}}>
                        <img style={{height:"250px",width:"320px"}} src="https://static.vitra.com/media-resized/mVrN8D7Vl2pCKZ9HzZtY5v1zbGUqQMHN3V-3CI876fw/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzUyMDg5MTgvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC81Nzk5MzYzNS5qcGc.jpg"></img>
                        <p style={{fontWeight:"600",letterSpacing:"2px"}}>Toolbox RE</p>
                        <p style={{letterSpacing:"2px",marginTop:"-12px"}}>Arik Levy</p>
                        </a>
                    </div>
                    <div className="col-sm-3" style={{textAlign:"center"}}>
                        <a href="/card14" style={{textDecoration:"none"}}> 
                        <img style={{height:"250px",width:"320px"}} src="https://static.vitra.com/media-resized/rPTCz5BVjbLf-E2HHPVzMsnmGmuzX89fKMHlhfArKDM/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzY3NTE4NzYvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83NTgzOTQwMy5qcGc.jpg"></img>
                        <p style={{fontWeight:"600",letterSpacing:"2px"}}>Tip Ton Limited Print</p>
                        <p style={{letterSpacing:"2px",marginTop:"-12px"}}>Edward Barber & Jay Osgerby</p>
                        </a>
                    </div>
                    <div className="col-sm-3" style={{textAlign:"center"}}>
                        <a href="/card15" style={{textDecoration:"none"}}>
                        <img style={{height:"250px",width:"320px"}} src="https://static.vitra.com/media-resized/0drW9-yhAD7vd0guOQVz4CIv5wh_DvLu1_rjb16CJvI/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzU5MjQwMDYvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC82NjA0OTE2NC5qcGc.jpg"></img>
                        <p style={{fontWeight:"600",letterSpacing:"2px"}}>Soft Wait</p>
                        <p style={{letterSpacing:"2px",marginTop:"-12px"}}>Edward Barber & Jay Osgerby</p>
                        </a>
                    </div>
                    <div className="col-sm-3" style={{textAlign:"center"}}>
                        <a href="/card16" style={{textDecoration:"none"}}>
                        <img style={{height:"250px",width:"320px"}} src="https://static.vitra.com/media-resized/ZYE1MkqFTNX0u9ZyUlCbtI2dPru-TktCYTPW1YT7r30/fill/750/0/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzY1Mjc3NzQvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83Mjg4MDk4My5qcGc.jpg"></img>
                        <p style={{fontWeight:"600",letterSpacing:"2px"}}>Locker Box, small</p>
                        <p style={{letterSpacing:"2px",marginTop:"-12px"}}>Konstantin Grcic</p>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <ul style={{display:"flex",listStyleType:"none",marginLeft:"44%",marginTop:"50px"}}>
                    {/* <a><li style={{marginTop:"3px",color:"#999"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                    </li></a> */}
                    <a href="/products" style={{color:"black",fontWeight:"bold",marginLeft:"10px",textDecoration:"none"}}><li>1</li></a>
                    <a href="/products2" style={{textDecoration:"none"}}><li style={{marginLeft:"10px",color:"#999"}}>2</li></a>
                    <a href="/products3" style={{textDecoration:"none"}}><li style={{marginLeft:"10px",color:"#999"}}>3</li></a>
                    <a href="/products4" style={{textDecoration:"none"}}><li style={{marginLeft:"10px",color:"#999"}}>4</li></a>
                    <a href="/products2"><li style={{marginTop:"3px",marginLeft:"10px",color:"#999",textDecoration:"none"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </li></a>
                </ul>
            </div>
            <Footer/>
        </>
    )
}
export default Products;