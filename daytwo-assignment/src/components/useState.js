import React,{useState} from 'react'

const UseStateDemo = () =>
{
    const [users,setUsers] = useState([{
        name :"Jerry",
        age : 28,
        gender : "Male"
    },
    {
        name :"Angela",
        age : 38,
        gender : "Female"
    },
    {
        name :"Tim",
        age : 18,
        gender : "Male"
    }])
   
    return(<>
     <div><h1>List of users from-functional component-useState Hook</h1>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
        {
            users.map((user,index)=>(
                <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.gender}</td>
                    <td>{user.age}</td>
                </tr>)
                )
        }
        </tbody>
    </table>
    </div>
    
    </>
    
    );
    
}
export default UseStateDemo