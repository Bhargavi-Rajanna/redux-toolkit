import React from 'react';
import { Counter } from './features/counter/Counter';
import { User} from './features/user/User';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        {/* <Counter /> */}
      <User />
        
      </header>
    </div>
  );
}

export default App;
