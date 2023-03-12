import React, { useState } from 'react';
import './Todolist.css'
import AddTask from './Todotasks/AddTask'
import UpdateList from './Todotasks/UpdateList'
import ToDo from './Todotasks/ToDo'
import 'bootstrap/dist/css/bootstrap.min.css';
function TodoList(props) {
    const [toDo, settoDo] = useState(props.jsonTodos);

    const [newtask, setNewtask] = useState('');
    const [dataUpdate, setdataUpdate] = useState('');

    const addTask = () => {
        if (newtask) {
            let newEntry = {
                id: Date.now(),
                title: newtask,
                completed:false
            }
            settoDo([newEntry, ...toDo])
            setNewtask('');
        }
    }

    const deleteTask = (id) => {
        let newTasks = toDo.filter(task => task.id !== id);
        settoDo(newTasks)
    }

    const taskDone = (id) => {
        let completeTask = toDo.map(task => {
            if (task.id === id) {
                return ({ ...task, completed: !task.completed });
            }
            return task;
        })
        settoDo(completeTask)
    }
    const cancelUpdate = () => {
        setdataUpdate('');
    }

    const changeTask = (e) => {
        let newEntry = {
            id: dataUpdate.id,
            title:e.target.value,
            completed: dataUpdate.completed ? true : false
        }
        setdataUpdate(newEntry);
    }

    const updateTask = () => {
        let filterRecord = [...toDo].filter(task => task.id !== dataUpdate.id)
        let UpdatedObject = [dataUpdate, ...filterRecord];
        settoDo(UpdatedObject);
        setdataUpdate('')
    }

    return (
        <React.Fragment>
            
            <h2 id='heading'>React ToDo App</h2>
        <div className="container App">

            {
                dataUpdate && dataUpdate ? (
                      <UpdateList
                          dataUpdate={dataUpdate}
                          changeTask={changeTask}
                          updateTask={updateTask}
                          cancelUpdate={cancelUpdate}

                    />
                ) : (
                        <AddTask
                            newtask={newtask}
                            setNewtask={setNewtask}
                            addTask = {addTask}
                        />
            )
            }
            
            <ToDo
                toDo={toDo}
                taskDone={taskDone}
               setdataUpdate={setdataUpdate}
                deleteTask = {deleteTask}
            />
           
            </div>
        </React.Fragment>
    );
}

export default TodoList;
