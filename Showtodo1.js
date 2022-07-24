import React from 'react'

function Showtodo1(props) {
    return (
      <>
      
  
      {/* for second */}
    
      <div>
            <div className="container  mt-3 mb-3" style={{borderRadius:"5px"}}>
                <div className="d-flex">
                    <div className="form-control me-2">
                        <textarea style={{border:"none",width:"280px"}}>{props.Task1}</textarea>
                    </div>
                        <button onClick={()=>{
                            props.onSelect1(props.id)
                        }} className='btn btn-outline-danger' style={{float:"right"}}>Remove</button>
                    
                </div>
            </div>
        </div>
      
      </>
    )
  }
  
  export default Showtodo1