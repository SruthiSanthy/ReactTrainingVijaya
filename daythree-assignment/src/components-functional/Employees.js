import React,{useState} from 'react'

function Employees() {
    const[employees,setEmployees] = useState([{name:"Sruthi",company:"Yash"},{name:"Roy",company:"Infosys"}])
    return (<div><h2>Welcome to employees class</h2>
    {employees.map((employee,index)=><ul><li>{`${employee.name} : ${employee.company}`}</li>
    </ul>)
    
    }
    </div>)
}

export default Employees
