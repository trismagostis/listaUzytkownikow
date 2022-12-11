import React, { useState } from "react";
import "./Users.css";
import UsersList from "./UsersList";

const UsersStates = () => {
  const [users, setUsers] = useState([]);
  let myRef = React.createRef();
  const deleteUser = (userIndex) => {
    // console.log(userIndex);
    setUsers(
      users.filter((user,index) => {
        console.log(index);
        return index !== userIndex;
      })
    );
  };

  const addUser = (event) => {
    event.preventDefault();
    let newUser = myRef.current.value;
    myRef.current.value = "";
    if (newUser !== "") {
      setUsers(users.concat(newUser));
    } else {
      alert("puste");
    }
  };

  return (
    <div className="main">
      <h1>Users List</h1>
      <form onSubmit={addUser}>
        <input
          ref={myRef}
          type="text"
          placeholder="Enter name"
          maxLength="30"
        />
        <button type="submit">Add user</button>
      </form>
      <UsersList usersList={users} deleteUserMethod={deleteUser} />
    </div>
  );
};

export default UsersStates;
