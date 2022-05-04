
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-6xl'>Welcome to my pricing club</h1>

      <Header></Header>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
