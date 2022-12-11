import React from "react";
import "./UsersList.css";

function UsersList(props) {
  let users = props.usersList;

  let usersLiElements = users.map((user, index) => {
    return (
      <li key={index}>
        {user}
        <span onClick={()=>props.deleteUserMethod(index)}>x</span>
      </li>
    );
  });

  return <ul className="list">{usersLiElements}</ul>;
}
export default UsersList;
