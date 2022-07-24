import React, {useState} from 'react'
import Showtodo1 from './Showtodo1'


export default function ToDoList1() {


  // FOR second
  const [Task1, setTask1] = useState("")
  const [Data1, setData1] = useState([])
  const onChangeHandler1 = (p)=>{
    setTask1(p.target.value)
    console.log(p.target.value)
  }
  const submitHandler1 = (p)=>{
    p.preventDefault();
    const newData1 = Task1;
    setData1([...Data1,newData1])
    console.log("submit")
  }

  const deleteitem1 = (b)=>{
    let final1 = Data1.filter((curEle1,index1)=>{
      return index1 !== b;
    })
    setData1(final1);
  }
  
  return (
    
      <>
   
    {/* for second */}

    <div style={{backgroundColor:"rgb(255, 204, 255)",width:"100vw",height:"100vh",position:"absolute",top:"0px"}}>
    <div  className='container' style={{border:"1px solid black",backgroundColor:"rgb(255, 179, 255)",width:"450px",minHeight:"40vh",marginTop:"50px",paddingTop:"20px",borderRadius:"10px",textAlign:"center",fontSize:"20px"}}>
      <div className="my-3">INPROGRESS LIST</div>
    <form className="d-flex" onSubmit={submitHandler1}>
        <input style={{backgroundColor:"rgb(255, 230, 255)"}} className="form-control me-2" type="search" onChange={onChangeHandler1} defaultValue={Task1}  placeholder="Enter here"/>
        <button type="submit" className="btn btn-outline-danger" >Add</button>
      </form>
      
  {
    Data1.map((value,index1)=>{
      return <Showtodo1 key={index1} id={index1} Task1={value} onSelect1={deleteitem1} />
    })
  }
    </div>
    </div>
    </>
    
  )
}
