import React from "react";

import "./App.css";
import User from "./components/User";

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

function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
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
      <User user={user1} />
      <User user={user2} />
    </div>
  );
}

export default App;
