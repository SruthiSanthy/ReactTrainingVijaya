import React,{useState} from 'react'

function Animals() {
    const[animals,setAnimals] = useState([{name:"Cat",sound:"meow"},{name:"Dog",sound:"baw-baw"}])
    return (<div><h2>Welcome to animals class</h2>
    {animals.map((animal,index)=><ul><li>{`${animal.name} : ${animal.sound}`}</li>
    </ul>)
    
    }
    </div>)
}

export default Animals
