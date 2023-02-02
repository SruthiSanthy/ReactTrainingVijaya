import React,{useState} from 'react'

function Users(props) {
    //const[users,setUsers] = useState([{name:"Sruthi",gender:"Female"},{name:"Roy",gender:"Male"}])
    return (<div><h2>Welcome to users class</h2>
    {props.users.map((user,index)=><ul><li>{`${user.name} : ${user.gender}`}</li>
    </ul>)
    
    }
    </div>)
}

export default Users
