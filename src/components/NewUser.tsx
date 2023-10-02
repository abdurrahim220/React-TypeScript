import React, { useState } from "react";

const NewUser = () => {
  const [userName, setUserName] = useState("");

  const handleUserNameChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event?.target.value);
  };

  const handleClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    // setUserName();
    console.log(userName);
  };

  return (
    <div>
      <h2>Create new user</h2>

      <input
        type="text"
        placeholder="Enter use name"
        value={userName}
        onChange={handleUserNameChange}
      />

      <button onClick={handleClick}>ShowName</button>


      <p>{userName}</p>
    </div>
  );
};

export default NewUser;
