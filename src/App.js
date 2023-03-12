import React , {useEffect, useState} from 'react';
import './App.css'
import TodoList from './ToDoElements/Todolist';
import { ThreeCircles } from "react-loader-spinner";



const App = () => {
    const [json, setjson] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(() => {
       
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((json) => {
                setTimeout(() => {
                    
                    setjson(json)
                    setloading(true);
                }, 500);
            });
    }, []);

    
  return (
      <div>
          {loading ? (
              <TodoList jsonTodos={json} />
          ) : (
            <ThreeCircles
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor="orange"
            innerCircleColor="yellow"
            middleCircleColor="red"
          />
          )}
          
    </div>
  )
}

export default App

