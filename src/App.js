import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./redux/actions";
import { getAllWorkspaces } from "./redux/thunk";


function App() {
  const tasks = useSelector(state => state.tasks)
  const isLoading = useSelector(state => state.isLoading);
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

  return (
    <div className="App">
      <h1>Todo App</h1>
      {isLoading && <h2>Loading....</h2>}
      {!isLoading && <button onClick={() => {
        dispatch(getAllWorkspaces())
        setTask('')
      }}>Add task</button> }
      <ul>
        {tasks.map(t => <li>{t}</li>)}
      </ul>
    </div>
  );
}

export default App;
