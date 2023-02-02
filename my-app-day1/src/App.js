import logo from './logo.svg';
import './App.css';
import ClassBased from './components/classBased'
import Functional from './components/functional'

function App() {
  return (
    <div className="App">
     <ClassBased/>
     <Functional/>
    </div>
  );
}

export default App;
