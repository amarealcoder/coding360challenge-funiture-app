import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.css';
import Info from './components/Info';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Home />
      <Info />
    </div>
  );
}

export default App;
