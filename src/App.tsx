import React from "react";

import "./App.css";
import User from "./components/User";
import UserDemo from "./components/UserDemo";
import DataFetch from "./components/DataFetch";
import Button from "./components/Button";
import Post from "./components/Post";
import ButtonStyle from "./components/ButtonStyle";

const user1 = {
  name: "md rifat uddin",
  age: 24,
  isRegistered: false,
  lang: ["bangla", "english"],
};
const user2 = {
  name: "md rafik uddin",
  age: 24,
  isRegistered: false,
  lang: ["bangla", "english"],
};

const user3 =[
  {
    id:1,
    name:'md abdur rahim',
    email:'z.abdurrahim5@gmail.com',
    age:24,
  },
  {
    id:2,
    name:'md abdur rahman',
    email:'z.abdurrahman5@gmail.com',
    age:25,
  },
];

const ButtonStyles = {color:'red',margin:'2px solid red',padding:'0.5rem'}


function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
      <h1>Children Props</h1>

      <ButtonStyle btnStyle={ButtonStyles}/>

      {/* <Button>Click Me</Button> */}

      {/* <Post/> */}

      {/* <DataFetch status="success"/> */}
      {/* <User
        name="md ab rahim"
        age={24}
        isRegistered={true}
        lang={["bangla", "english"]}
      />
      <User
        name="md rifat uddin"
        age={24}
        isRegistered={false}
        lang={["bangla", "english"]}
      /> */}
      {/* <User user={user1} /> */}
      {/* <User user={user2} /> */}

      {/* <UserDemo users = {user3}/> */}
      
    </div>
  );
}

export default App;
