import React from 'react'

class ClassBased extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            userData :
        [
            {
                name :"Rona",
                age : 28,
                gender : "Female"
            },
            {
                name :"Dave",
                age : 38,
                gender : "Male"
            },
            {
                name :"Tom",
                age : 18,
                gender : "Male"
            }
        ]
        }
    }
       
    
    render()
    {
        return(<><h1>List of users from-class component state</h1><table>
            <thead>
                <tr>
                <th>UserName</th>
                <th>UserAge</th>
                <th>UserGender</th>
                </tr>
            </thead>
            <tbody>
            {
                this.state.userData.map((user,index)=><tr key={index}><td>{user.name}</td><td>{user.age}</td><td>{user.gender}</td></tr>)
            }
            </tbody>

        </table>
       
        </>)
    }
}
export default ClassBased