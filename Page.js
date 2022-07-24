import React from 'react'
import { Link } from 'react-router-dom'

export default function Page() {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/login"><button className="nav-link active" style={{border:"none",backgroundColor:"transparent"}}>Login</button></Link>
          {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
        </li>
        <li className="nav-item">
        <Link to="/register"><button className="nav-link active" style={{border:"none",backgroundColor:"transparent"}}>Register</button></Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
<div >
<img src="./images/page.jpg" style={{height:"calc(100vh - 56px)",width:"100vw"}} alt="" />
<div style={{position:"absolute",top:"20vw",left:"40vw",fontSize:"40px"}}>ADD YOUR WORK</div>
<div style={{position:"absolute",top:"26vw",left:"35vw",fontSize:"20px"}}>LIST THE WORKS THAT YOU WANT TO DO IN YOUR DAY</div>

</div>
    </>
  )
}
