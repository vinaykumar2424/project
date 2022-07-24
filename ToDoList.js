import React, {useState} from 'react'
import Showtodo from './Showtodo'


export default function ToDoList() {

  const [Task, setTask] = useState("")
  const [Data, setData] = useState([])
  const onChangeHandler = (e)=>{
    setTask(e.target.value)
    console.log(e.target.value)
  }
  const submitHandler = (e)=>{
    e.preventDefault();
    const newData = Task;
    setData([...Data,newData])
    console.log("submit")
  }

  const deleteitem = (a)=>{
    let final = Data.filter((curEle,index)=>{
      return index !== a;
    })
    setData(final);
  }
  
  
  return (
    
      <>
      <div style={{backgroundColor:"rgb(255, 204, 255)",width:"100vw",height:"100vh",position:"absolute",top:"0px"}}>
    <div  className='container' style={{border:"1px solid black",backgroundColor:"rgb(255, 179, 255)",width:"450px",minHeight:"40vh",marginTop:"50px",paddingTop:"20px",borderRadius:"10px",textAlign:"center",fontSize:"20px"}}>
      <div className="my-3">TO-DO LIST</div>
    <form className="d-flex" onSubmit={submitHandler}>
        <input style={{backgroundColor:"rgb(255, 230, 255)"}} className="form-control me-2" type="search" onChange={onChangeHandler} defaultValue={Task}  placeholder="Enter here"/>
        <button type="submit" className="btn btn-outline-danger" >Add</button>
      </form>
      
  {
    Data.map((value,index)=>{
      return <Showtodo key={index} id={index} Task={value} onSelect={deleteitem} />
    })
  }
    </div>
    </div>
    
    </>
    
  )
}
