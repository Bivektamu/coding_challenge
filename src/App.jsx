import { useEffect, useState } from 'react';
import './App.css';
import TaskContext from './context';
import Kanban from './component/Kanban';
function App() {

  const [tasks, setTasks] = useState([])
  return (
    <TaskContext.Provider value={{tasks, setTasks}}>
      <div className="App">
        <Kanban />
      </div>
    </TaskContext.Provider>
  );
}

export default App;