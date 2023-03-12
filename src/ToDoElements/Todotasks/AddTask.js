import React from "react"

const AddTask = (props) => {
    
    return (
   
      <>
          <div>
              <div >
                  <input
                      value={props.newtask}
                      onChange={(e) => props.setNewtask(e.target.value)}
                      className='form-control '
                      type="text" />
              </div>
                <div className="col-auto">
                
                  <button
                      onClick={props.addtask}
                      className='btn  btn-success'>Add Task</button>
              </div>
          </div>
      </>
  )
}

export default AddTask