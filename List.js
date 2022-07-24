import React from 'react'
import { Link } from 'react-router-dom'


export default function List() {
  return (
    <div className='d-flex' style={{position:"absolute",top:"25vh",left:"25vw"}}>
        <Link to='/list'><button  type="button" className="btn btn-primary px-5 py-5 mx-5" >To-do</button></Link>
        <Link to='/list1'><button type="button" className="btn btn-primary px-5 py-5 mx-5">In progress</button></Link>
        <Link to='/list2'><button type="button" className="btn btn-primary px-5 py-5 mx-5">Completed</button></Link>
    </div>
  )
}
