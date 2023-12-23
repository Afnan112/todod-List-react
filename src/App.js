import { React, useState, useRef } from 'react'
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  //access to value input's
  const inputRef = useRef()
  const handleAddTask = () => {
    // fetch text inside input
    let task = inputRef.current.value

    const newItem = {
      done: false,
      task
    }
    console.log(task)
    /*
      To add item(task) in array by function "setTodos"
      ...(spear operator) means old task adding new task
    */
    setTodos([...todos, newItem])
    //empty input
    inputRef.current.value = ""
  }
  const handleTaskDone = (index) => {
    //make a copy of array in a new array 
    const newTodo = [...todos]
    newTodo[index].done = !newTodo[index].done
    setTodos(newTodo)
  }
  const handleDeleteTask = (index) => {
    const newTodo = [...todos]
    //splice => delete an element from array
    newTodo.splice(index, 1)
    setTodos(newTodo)
  }
  console.log(todos)
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className='input-task'>
        <input ref={inputRef} placeholder="Add your tasks" />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div className="list-tasks">
        <ul>
          {todos.map(({ task, done }, index) => {
            return (
              <div className='tasks'>
                <li
                  className={done ? "done" : ""}
                  onClick={() => handleTaskDone(index)}
                >
                  {task}
                </li>
                <span onClick={() => handleDeleteTask(index)}><i class="fa-solid fa-xmark"></i></span>
              </div>
            )
          })}
        </ul>
      </div >
    </div >
  );
}

export default App;
