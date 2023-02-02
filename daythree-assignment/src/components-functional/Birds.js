import React,{useState} from 'react'

function Birds() {
    const[birds,setBirds] = useState([{name:"Peacock",color:"blue-green"},{name:"Crow",color:"black"}])
    return (<div><h2>Welcome to birds class</h2>
    {birds.map((bird,index)=><ul><li>{`${bird.name} : ${bird.color}`}</li>
    </ul>)
    
    }
    </div>)
}

export default Birds
