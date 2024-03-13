import { Approuter } from './Approuter';
import { Navbar } from './Components/Navbar';
import './App.css';

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Approuter />
    </div>
  );
}


