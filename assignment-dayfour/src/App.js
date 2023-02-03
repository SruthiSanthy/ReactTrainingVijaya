import logo from './logo.svg';
import './App.css';
import ClassLifeCycle from './components/class-lifecycle';
import FunctionalUseEffect from './components/functionalUseEffect';

function App() {
  return (
    <div className="App">
      <h2>Class Component with axios</h2>
     <ClassLifeCycle/><br/>
     <h2>Functional Component with axios</h2>
     <FunctionalUseEffect/>
    </div>
  );
}

export default App;
