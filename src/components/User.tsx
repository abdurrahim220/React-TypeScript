import React from "react";

//? string ,number ,boolean ,void , null
//? user defined types -> object,array,enum,union,any,custom type

type userProps = {
  // name: string;
  // age: number;
  // isRegistered: boolean;
  // lang: string[];
  user: {
    name: string;
    age: number;
    isRegistered: boolean;
    lang: string[];
  };
};

//!User = (props : userProps)
//!User = ({ name, age, isRegistered, lang }: userProps)

const User = ({ user }: userProps) => {
  return (
    <div style={{border:'2px solid',margin:'1rem'}}>
      {/* <h1>Md Abdur Rahim</h1>
        <p>z.abdurrahim5@gmail.com</p>
        <p>24 years old</p> */}
      <h1>{user.name}</h1>
      <p>{user.age} years old</p>
      {user.isRegistered ? <p>Registered User</p> : <p>Not registered User</p>}
      <p>
        Speaks:{" "}
        {user.lang.map((language, index) => {
          return <span key={index}>{language} </span>;
        })}
      </p>
    </div>
  );
};

export default User;
