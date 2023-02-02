import logo from './logo.svg';
import './App.css';
import ClassBased from './components/classBased'
import Functional from './components/functional'
import UseStateDemo from './components/useState'

const userData =[
{name:"Sruthi",
gender:"female",
age:28},
{
name:"Sam",
gender:"Male",
age:29
},
{
name:"Sid",
gender:"male",
age:32
}
]

function App() {
  return (
    <div className="App">
      <ClassBased name='Sruthi'/>
      <Functional userData={userData}/>
      <UseStateDemo/>
    </div>
  );
}

export default App;
