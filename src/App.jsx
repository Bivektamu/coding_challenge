import { useEffect } from 'react';
import './App.css';
import { useTaskContext } from './context';
import Kanban from './component/Kanban';
function App() {
  const [state, dispatch] = useTaskContext()
  useEffect(() => {
      dispatch({type: 'GET'})
  }, [])
  return (
      <div className="App">
        <Kanban />
      </div>
  );
}

export default App;