import './App.css';
import FrozenDpt from './components/FrozenDpt';
import MeatDept from './components/MeatDept';
import ProduceDept from './components/ProduceDept';

function App() {
  return (
    <div className="App">
      <h1>Departaments</h1>
      <FrozenDpt />
      <MeatDept />
      <ProduceDept />
    </div>
  );
}

export default App;
