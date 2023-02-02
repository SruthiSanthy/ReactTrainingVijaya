import React from 'react'
 const Functional = ({userData}) =>
 {
    return(
    <>
    <div><h1>List of users from-functional component props</h1>
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
            userData.map((user,index)=>(
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
    </>)
 }
 export default Functional