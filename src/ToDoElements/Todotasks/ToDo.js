import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck,faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'

const ToDo=(props)=>{
    return(
    <>
        {
            props.toDo.map((task,index)=>{
                return(
                    <React.Fragment key={task.id}>
                    <div className='col bg'>
                    <div className={task.completed ? 'done':''}>
                    <span className='tasknum'>{index+1}</span>
                    <span className='txt'>{task.title} </span>
                    </div>
                    <div className='wrap'>
                    <span title='Completed /Not Completed'
                     onClick={(e)=>props.taskDone(task.id)}>
                    <FontAwesomeIcon className='icon-color2' icon={faCheck}></FontAwesomeIcon>
                    </span>
                    {
                        task.completed ? null:(
                            <span title='edit' onClick={()=>props.setdataUpdate({
                                id: task.id,
                                title:task.title,
                                completed: task.completed? true:false
                            })}>
                            <FontAwesomeIcon className='icon-color3' icon={faEdit}></FontAwesomeIcon>
                            </span>
                        )
                    }
                    <span title='Delete' onClick={()=>props.deleteTask(task.id)}>
                    <FontAwesomeIcon className='icon-color' icon={faTrash}></FontAwesomeIcon>
                    
                    </span>
                    </div>
                    </div>
                    </React.Fragment>
                )
            })
        }
        </>
    )
}

export default ToDo