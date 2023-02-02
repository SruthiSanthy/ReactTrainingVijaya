import logo from './logo.svg';
import './App.css';
import LivingThings from './components/LivingThings'
import LivingThingsFunctional from './components-functional/LivingThings'
import LivingThingsFunctionalProps from './components-functionalProps/LivingThings'

import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <h1>Assignment-1-useState</h1><br/>
      <LivingThingsFunctional/>
      <h1>Assignment-2-props</h1><br/>
    <LivingThingsFunctionalProps/>

    <h1>Assignment-3-class</h1><br/>
     <LivingThings/>
     <h1>Assignment-4-callback</h1><br/>
     <ParentComponent/>
    </div>
  );
}

export default App;
