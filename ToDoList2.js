import React, {useState} from 'react'
import Showtodo2 from './Showtodo2'


export default function ToDoList2() {


  // FOR THIRD
  const [Task2, setTask2] = useState("")
  const [Data2, setData2] = useState([])
  const onChangeHandler2 = (q)=>{
    setTask2(q.target.value)
    console.log(q.target.value)
  }
  const submitHandler2 = (q)=>{
    q.preventDefault();
    const newData2 = Task2;
    setData2([...Data2,newData2])
    console.log("submit")
  }

  const deleteitem2 = (c)=>{
    let final2 = Data2.filter((curEle2,index2)=>{
      return index2 !== c;
    })
    setData2(final2);
  }
  
  return (
    
      <>
   
    {/* for THIRD */}

    <div style={{backgroundColor:"rgb(255, 204, 255)",width:"100vw",height:"100vh",position:"absolute",top:"0px"}}>
    <div  className='container' style={{border:"1px solid black",backgroundColor:"rgb(255, 179, 255)",width:"450px",minHeight:"40vh",marginTop:"50px",paddingTop:"20px",borderRadius:"10px",textAlign:"center",fontSize:"20px"}}>
      <div className="my-3">COMPLETED</div>
    <form className="d-flex" onSubmit={submitHandler2}>
        <input style={{backgroundColor:"rgb(255, 230, 255)"}} className="form-control me-2" type="search" onChange={onChangeHandler2} defaultValue={Task2}  placeholder="Enter here"/>
        <button type="submit" className="btn btn-outline-danger" >Add</button>
      </form>
      
  {
    Data2.map((value,index2)=>{
      return <Showtodo2 key={index2} id={index2} Task2={value} onSelect2={deleteitem2} />
    })
  }
    </div>
    </div>
    </>
    
  )
}