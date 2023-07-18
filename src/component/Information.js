import  React from 'react';
import "./Products.css"
function Information(){
    return (
        <>
            <center><h2 style={{fontFamily:"Georgia"}}>Information</h2></center>
            
            <p className='demo' style={{marginLeft:"170px",fontSize:"18px",fontWeight:"600",letterSpacing:"1px",fontFamily:"Georgia"}}>Colours and materials</p>
                
            <div style={{marginLeft:"7%",border:"2px solid lightgray",padding:"20px",marginTop:"-10px"}}>
                <div>
                    <p style={{fontWeight:"600"}}>Fabric mix "The Antartic Blues"</p>
                    
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-2' style={{textAlign:"center"}}>
                            <img src='https://static.vitra.com/media-resized/G6rzXUhP3YK0gqF9VvxtgGrAvXzsjCZFWJ0E9lSY2hk/fill/150/150/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzkwOTg1NS9zdG9yYWdlL3ZfZnVsbGJsZWVkXzE0NDB4LzIzMDU4Mjk2LmpwZw.jpg'/>
                            <p>11 Volo - night blue</p>
                        </div>
                        <div className='col-sm-2' style={{textAlign:"center"}}>
                            <img src='https://static.vitra.com/media-resized/eQpyg8hrSdEWECvT3a4zyV0xW4mncOvhBwP-Vnw3a8I/fill/150/150/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzE3MTM5MDgvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC8yOTE5OTc2MS5qcGc.jpg'/>
                            <p>19 Reed - indigo</p>
                        </div>
                        <div className='col-sm-2' style={{textAlign:"center"}}>
                            <img src='https://static.vitra.com/media-resized/XPhGz_ohmARE_AxLxjwQTsZLtEG0LkzZwxT-8FNIR7Y/fill/150/150/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzYyNzc0OTkvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC82Nzg5OTY5MC5qcGc.jpg'/>
                            <p>37 Remix (762)</p>
                        </div>
                        <div className='col-sm-2' style={{textAlign:"center"}}>
                            <img src='https://static.vitra.com/media-resized/3khJgOcXNs8uVlGIFW7iRjbGVSbLY4KPxQgUAMVCMW0/fill/150/150/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzIzNDc5ODMvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC8zMjg3MDg1Mi5qcGc.jpg'/>
                            <p>21 Cosy 2 - dark blue</p>
                        </div>
                        <div className='col-sm-2' style={{textAlign:"center"}}>
                            <img src='https://static.vitra.com/media-resized/0YF4fVHDi5MMGSSyy-j3y9L07SUrYrVmgcuZ7Let7iQ/fill/150/150/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzI2MDAzOTIvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC8zOTc0MzkzMS5qcGc.jpg'/>
                            <p>31 Dumet - indigo melange</p>
                        </div>
                        <div className='col-sm-2' style={{textAlign:"center"}}>
                            <img src='https://static.vitra.com/media-resized/Vy3NOHM4zNvUZm2ysgNjkGSKVnHbiuKHwfxCsN5O4GQ/fill/150/150/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzE4NjQyNjIvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC8zMDU1MTAxOC5qcGc.jpg'/>
                            <p>18 Tress - royal blue melange</p>
                        </div>
                    </div>
                </div>
                <p style={{fontWeight:"600"}}>Fabric mix "The Earth Reds"</p>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-2' style={{textAlign:"center"}}>
                            <img src='https://static.vitra.com/media-resized/wfVNvyuCGyvnzGJ2cXJsmSdOD9tKZ73sjOfQu59ES3g/fill/150/150/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzkwOTgxNS9zdG9yYWdlL3ZfZnVsbGJsZWVkXzE0NDB4LzIxODY0MjcxLmpwZw.jpg'/>
                            <p>77 Volo - brick</p>
                        </div>
                        <div className='col-sm-2' style={{textAlign:"center"}}>
                            <img src='https://static.vitra.com/media-resized/khr_vj45HMCYQz0S0gxrJno3pyV8ytoa0b-d3bSIq9A/fill/150/150/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzkwOTY2NC9zdG9yYWdlL3ZfZnVsbGJsZWVkXzE0NDB4LzIzMDc2NDI3LmpwZw.jpg'/>
                            <p>53 Aura - poppy red</p>
                        </div>
                        <div className='col-sm-2' style={{textAlign:"center"}}>
                            <img src='https://static.vitra.com/media-resized/D3RIUxp1RaQ0vPo3JZtz-NbnHvMe0a0I8k14vpthHeU/fill/150/150/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzIzNDc5Nzkvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC8zMjg3MDgzNC5qcGc.jpg'/>
                            <p>15 Cosy 2 - rusty orange</p>
                        </div>
                        <div className='col-sm-2' style={{textAlign:"center"}}>
                            <img src='https://static.vitra.com/media-resized/NsuVrV0kipzJF95u0QJgvj3cqRsJfIkenkSROxE3kvc/fill/150/150/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzI2MTQ1MDcvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC82MTIwNTkxNC5qcGc.jpg'/>
                            <p>15 Track - brick/dark red</p>
                        </div>
                        <div className='col-sm-2' style={{textAlign:"center"}}>
                            <img src='https://static.vitra.com/media-resized/8__qntWrsFTB7QYbzfUr2bk0i4E08YKAMd5A7VRb6Y4/fill/150/150/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzE3MTM5MDMvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC8yOTE5OTcxNi5qcGc.jpg'/>
                            <p>10 Reed - brick</p>
                        </div>
                        <div className='col-sm-2' style={{textAlign:"center"}}>
                            <img src='https://static.vitra.com/media-resized/8__qntWrsFTB7QYbzfUr2bk0i4E08YKAMd5A7VRb6Y4/fill/150/150/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzE3MTM5MDMvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC8yOTE5OTcxNi5qcGc.jpg'/>
                            <p>77 Aura - brick</p>
                        </div>
                    </div>
                </div>
                <div style={{paddingBottom:"50px"}}>
                    <p style={{marginTop:"20px",fontWeight:"600",letterSpacing:"1px",fontSize:"18px"}}>Material Description</p>
                    <ul>
                        <li style={{fontSize:"17px"}}><span style={{fontWeight:"600",paddingRight:"10px"}}>Structural frame:</span><span >wooden frame.</span></li>
                        <li style={{marginTop:"15px",fontSize:"17px"}}><span style={{fontWeight:"600",paddingRight:"10px"}}>Seat cushions:</span><span >polyurethane foam with interactive pocket spring core, chamber cushion structure (filled with foam cubes and lozenges) and polyester fleece.</span></li>
                        <li style={{marginTop:"15px",fontSize:"17px"}}><span style={{fontWeight:"600",paddingRight:"10px"}}>Back cushions:</span><span >polyurethane foam with polyester fleece and chamber cushions (filled with foam cubes and lozenges).</span></li>
                        <li style={{marginTop:"15px",fontSize:"17px"}}><span style={{fontWeight:"600",paddingRight:"10px"}}>Armrest cushion:</span><span >detached bolster, freely positionable, sand-weighted, polyurethane foam filling.</span></li>
                        <li style={{marginTop:"15px",fontSize:"17px"}}><span style={{fontWeight:"600",paddingRight:"10px"}}>Cover:</span><span >coordinated combinations of various colours and fabric types, removable.</span></li>
                        <li style={{marginTop:"15px",fontSize:"17px"}}><span style={{fontWeight:"600",paddingRight:"10px"}}>Buttons:</span><span >made of wood or horn, colour and grain subject to natural variations.</span></li>
                        <li style={{marginTop:"15px",fontSize:"17px"}}><span style={{fontWeight:"600",paddingRight:"10px"}}>Ottoman:</span><span >wooden frame with polyurethane foam. The fabric and colour of the Ottoman matches that of the sofa.</span></li>
                        <li style={{marginTop:"15px",fontSize:"17px"}}><span style={{fontWeight:"600",paddingRight:"10px"}}>Applications:</span><span >recommended for domestic use only.</span></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Information;