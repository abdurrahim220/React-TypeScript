import React from 'react'


// string ,number ,boolean ,void , null

type userProps =  {name:string , age:number}

const User = (props : userProps) => {
  return (
    <div>
        {/* <h1>Md Abdur Rahim</h1>
        <p>z.abdurrahim5@gmail.com</p>
        <p>24 years old</p> */}
        <h1>{props.name}</h1>
        <p>{props.age} years old</p>
    </div>
  )
}

export default User