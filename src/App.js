import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./redux/actions";


function App() {
  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

  return (
    <div className="App">
      <h1>Todo App</h1>
      <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add task name" />
      <button onClick={() => {
        dispatch(addTodo(task))
        setTask('')
      }}>Add task</button>
      <ul>
        {tasks.map(t => <li>{t}</li>)}
      </ul>
    </div>
  );
}

export default App;
