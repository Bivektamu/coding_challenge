import { lazy, Suspense } from 'react';
import './App.css';
import User from './component/User';
import Loading from  './component/Loading'
function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <User />
      </Suspense>
    </div>
  );
}

export default App;
