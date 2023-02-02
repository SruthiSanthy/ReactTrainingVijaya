import React,{useState} from 'react'

function Users() {
    const[users,setUsers] = useState([{name:"Sruthi",gender:"Female"},{name:"Roy",gender:"Male"}])
    return (<div><h2>Welcome to users class</h2>
    {users.map((user,index)=><ul><li>{`${user.name} : ${user.gender}`}</li>
    </ul>)
    
    }
    </div>)
}

export default Users
