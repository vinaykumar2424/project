import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
        <form action="" method="post" className='container form'>
  <div className="row mb-3">
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
  <Link to="/btns"><button type="submit" className="btn btn-primary">Sign in</button></Link>
  <Link to="/register"><button type="submit" className="btn"  style={{border:"none",textDecoration:"underline",float:"right"}}>Don't have any account ?</button></Link>
</form>
<img src="./images/page.jpg" style={{height:"calc(100vh)",width:"100vw",position:"absolute",top:"0px",zIndex:"-1"}} alt="" />
    </div>
  )
}
