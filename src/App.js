import { Approuter } from './Approuter';
import { Navbar } from './Components/Navbar';
import { useState } from 'react';
import './App.css';


export const App = () => {

  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Navbar count={count} />
      <Approuter count={count} setCount={setCount} />
    </div>
  );
}


