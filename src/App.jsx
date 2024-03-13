import { useEffect } from 'react';
import './App.css';
import { useTaskContext } from './context';
import {Stars} from './component';
function App() {
 
  return (
      <div className="App">
        <Stars />
      </div>
  );
}

export default App;