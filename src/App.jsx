import { useEffect } from 'react';
import './App.css';
import { useTaskContext } from './context';
import Kanban from './component/Kanban';
function App() {
  
    // eslint-disable-next-line
    const [state, dispatch] = useTaskContext()
  useEffect(() => {
      dispatch({type: 'GET'})
    // eslint-disable-next-line
  }, [])
  return (
      <div className="App">
        <Kanban />
      </div>
  );
}

export default App;