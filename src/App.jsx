import { useState } from 'react';
import './App.css';
import NameComponent from './component/NameComponent.tsx';


function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <div className="App">
      <label>
        Name: <input value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Email: <input value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <hr />
      <NameComponent name={name} />
    </div>
  );
}

export default App;
