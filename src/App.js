import './App.css';
import Agecal from './components/agecal';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1 className='py-2'>Age Calculator</h1>
      <h4>Enter your date of birth</h4>
      <Agecal />
    </div>
  );
}

export default App;