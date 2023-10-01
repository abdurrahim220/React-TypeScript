import React from "react";

type userDemoProps = {
  users: {
    id: number;
    name: string;
    email: string;
    age: number;
  }[];
};

const UserDemo = ({ users }: userDemoProps) => {
  //   console.log(users);
  return (
    <div>
      {users.map((user) => {
        const { id, name, age, email } = user;
        return (
          <div style={{border:'2px solid' ,margin:'1rem'}} key={id}>
            <h1>{name}</h1>
            <p>{age}</p>
            <p>{email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UserDemo;
