import React from 'react'
import { Link } from 'react-router-dom'


export default function Register() {
  return (
    <div>
      <form action="" method="post" className='container form'>
      <div className="row g-3">
      <div className="row mb-3">
    <label htmlFor="inputName3" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="inputName3"/>
    </div>
  </div>
</div>
  <div className="row mb-3 d-flex">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3"/>
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
    </div>
  </div>
  <Link to="/btns"><button type="submit" className="btn btn-primary">Sign up</button></Link>
  <Link to="/login"><button type="submit" className="btn" style={{border:"none",textDecoration:"underline",float:"right"}}>Already have an account ?</button></Link>
</form>
<img src="./images/page.jpg" style={{height:"calc(100vh)",width:"100vw",position:"absolute",top:"0px",zIndex:"-1"}} alt="" />

    </div>
  )
  
}
